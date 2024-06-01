"use client";

import React from "react";
import DesktopNav from "@/components/Sections/DesktopMenu/DesktopNav";

interface DesktopMenuProps {}

const DesktopMenu = (props: DesktopMenuProps) => {
  return (
    <div className="pointer-events-none hidden lg:block lg:pointer-events-auto absolute top-[20px] right-[75px] z-[1]">
      <DesktopNav />
    </div>
  );
};

export default DesktopMenu;
