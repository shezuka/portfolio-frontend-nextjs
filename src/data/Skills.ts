"use client";

import axios from "@/lib/axios";
import { Category } from "@/types";

export async function GetSkills(): Promise<Category[]> {
  return axios
    .get("skill-categories", {
      params: {
        sort: "['order', 'ASC']",
      },
    })
    .then((response) => response.data as Category[]);
}
