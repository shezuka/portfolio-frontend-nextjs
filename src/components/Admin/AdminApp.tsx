"use client";

import React from "react";
import { Admin, AuthProvider, Resource, UserIdentity } from "react-admin";
import simpleRestDataProvider from "ra-data-simple-rest";
import axios from "@/lib/axios";
import SkillCategoryList from "@/components/Admin/SkillCategory/SkillCategoryList";
import SkillCategoryCreate from "@/components/Admin/SkillCategory/SkillCategoryCreate";
import SkillCategoryEdit from "@/components/Admin/SkillCategory/SkillCategoryEdit";
import SkillList from "@/components/Admin/Skill/SkillList";
import SkillCreate from "@/components/Admin/Skill/SkillCreate";
import SkillCategoryShow from "@/components/Admin/SkillCategory/SkillCategoryShow";
import SkillEdit from "@/components/Admin/Skill/SkillEdit";
import SkillShow from "@/components/Admin/Skill/SkillShow";
import ImageList from "@/components/Admin/Image/ImageList";
import ProjectList from "@/components/Admin/Project/ProjectList";
import ProjectCreate from "@/components/Admin/Project/ProjectCreate";
import ProjectEdit from "@/components/Admin/Project/ProjectEdit";
import ProjectShow from "@/components/Admin/Project/ProjectShow";
import ImageCreate from "@/components/Admin/Image/ImageCreate";
import MessageList from "@/components/Admin/Message/MessageList";
import MessageShow from "@/components/Admin/Message/MessageShow";
import getRecaptchaToken from "@/lib/getRecaptchaToken";

const decodeToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const data = token.split(".")[1];
  if (!data) return null;

  // decode base64
  const base64Url = data.replace(/-/g, "+").replace(/_/g, "/");
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decoded = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );
  return JSON.parse(decoded);
};

const authProvider: AuthProvider = {
  login: async (data) => {
    data.captcha_token = await getRecaptchaToken("login_admin");
    const response = await axios.post("/auth/login", data);
    const token = response.data.access_token;
    localStorage.setItem("token", token);
    return Promise.resolve();
  },
  logout: () => {
    localStorage.removeItem("token");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () => {
    const token = decodeToken();
    if (!token) return Promise.reject();
    return token.exp > Date.now() / 1000 ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
  getIdentity: () => {
    const token = decodeToken();
    if (!token) return Promise.reject();
    const user: UserIdentity = {
      id: token.id,
    };
    return Promise.resolve(user);
  },
};

const httpClient = async (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = {} as any;
  }

  if (options.headers) {
    if (!options.headers["Accept"]) {
      options.headers["Accept"] = "application/json";
    }

    if (options.method && ["PUT", "POST"].includes(options.method)) {
      if (!options.headers["Content-Type"]) {
        options.headers["Content-Type"] = "application/json";
      }
    }
  }

  const token = localStorage.getItem("token");
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(url, options);
  const json = await response.json();
  let body: string = "";

  if (response.body) {
    if (json) body = JSON.stringify(json);
  }

  return {
    status: response.status,
    headers: response.headers,
    body,
    json,
  };
};

const dataProvider = simpleRestDataProvider(`/api/admin`, httpClient);

const AdminApp = () => {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="messages" list={MessageList} show={MessageShow} />
      <Resource
        name="projects"
        list={ProjectList}
        create={ProjectCreate}
        edit={ProjectEdit}
        show={ProjectShow}
      />
      <Resource
        name="skills"
        list={SkillList}
        create={SkillCreate}
        edit={SkillEdit}
        show={SkillShow}
      />
      <Resource
        name="skill-categories"
        recordRepresentation={(record) => record.title}
        list={SkillCategoryList}
        create={SkillCategoryCreate}
        show={SkillCategoryShow}
        edit={SkillCategoryEdit}
      />
      <Resource name="images" list={ImageList} create={ImageCreate} />
    </Admin>
  );
};

export default AdminApp;
