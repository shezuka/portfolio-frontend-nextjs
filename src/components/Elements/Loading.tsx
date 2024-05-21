"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 z-50 animate-gradient">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-indigo-500" />
    </div>
  );
};

export default Loading;
