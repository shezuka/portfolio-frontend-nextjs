"use client";

import React from "react";
import { motion, useCycle } from "framer-motion";
import classNames from "classnames";
import useScreenSize from "@/hooks/useScreenSize";
import useScroll from "@/hooks/useScroll";
import MobileMenuToggle from "@/components/Sections/MobileMenu/MobileMenuToggle";
import MobileNav from "@/components/Sections/MobileMenu/MobileNav";

interface MobileMenuProps {}

const menuVariants = {
  open: (props: any) => {
    const { screenSize } = props;
    const radius = Math.sqrt(
      Math.pow(screenSize.width - 40, 2) + Math.pow(screenSize.height - 40, 2),
    );
    return {
      clipPath: `circle(${radius}px at 40px 40px)`,
      background: "rgba(174, 174, 185, 0.6)",
      transition: {
        type: "tween",
        duration: 0.2,
        ease: "easeInOut",
      },
    };
  },
  closed: (props: any) => {
    const { scroll } = props;
    return {
      clipPath: "circle(30px at 40px 40px)",
      background: "#00000020",
      opacity: scroll > 10 ? 0 : 1,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 0.4,
        ease: "easeInOut",
      },
    };
  },
};

const MobileMenu = (props: MobileMenuProps) => {
  const screenSize = useScreenSize();
  const scroll = useScroll();

  const [isOpen, toggleIsOpen] = useCycle(false, true);

  const commonClasses = classNames({
    "pointer-events-none": !isOpen && scroll.y > 50,
    "pointer-events-auto": isOpen || scroll.y <= 50,
    "transition-opacity": true,
    "opacity-0": !isOpen && scroll.y > 50,
    "opacity-1": isOpen || scroll.y <= 50,
  });

  const navClasses = classNames({
    "pointer-events-none": !isOpen,
    "pointer-events-auto": isOpen,
  });

  return (
    <motion.nav
      className={`fixed lg:hidden top-0 left-0 right-0 bottom-0 z-[1] transition-opacity duration-150 ${commonClasses}`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className={`absolute top-0 left-0 right-0 bottom-0 border-2 border-[#2e2e2eaa] backdrop-blur-sm ${commonClasses}`}
        variants={menuVariants}
        custom={{
          screenSize,
          scroll,
        }}
      />
      <MobileMenuToggle onToggle={toggleIsOpen} isOpen={isOpen} />
      <motion.div
        className={`absolute left-0 right-0 top-[100px] ${navClasses}`}
      >
        <MobileNav onMenuSelected={toggleIsOpen} />
      </motion.div>
    </motion.nav>
  );
};

export default MobileMenu;
