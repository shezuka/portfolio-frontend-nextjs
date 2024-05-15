"use client";

import dynamic from "next/dynamic";
import React from "react";

const AdminApp = dynamic(() => import("@/components/Admin/AdminApp"), {
  ssr: false,
});

const AdminPage = () => <AdminApp />;

export default AdminPage;
