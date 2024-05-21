"use client";

import MenuItems, {
  MenuItem,
  MenuItemsAnimationDuration,
} from "@/data/MenuItems";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import usePageTransition from "@/context/PageTransition/usePageTransition";

const navVariants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
    },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 10,
    opacity: 0,
  },
};

const linkVariants = {
  active: {
    scale: 1,
    backgroundColor: "rgba(30, 27, 75, 0.8)",
    color: "#f0f0f0",
    transition: {
      duration: MenuItemsAnimationDuration,
    },
  },
  notActive: {
    scale: 0.9,
    backgroundColor: "#ffffffaa",
    color: "#2e2e2e",
    transition: {
      duration: MenuItemsAnimationDuration,
    },
  },
};

interface MobileNavProps {
  onMenuSelected: () => void;
}

const MobileNav = (props: MobileNavProps) => {
  const pathname = usePathname();
  const pageTransition = usePageTransition();

  const onLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: MenuItem,
  ) => {
    e.preventDefault();
    props.onMenuSelected();
    pageTransition.push(link.link);
  };

  return (
    <motion.ul
      variants={navVariants}
      className="w-full flex flex-col justify-center indigo"
    >
      {MenuItems.map((it) => {
        return (
          <motion.li key={it.link} variants={itemsVariants}>
            <motion.div
              className="mx-2 my-2.5 rounded-full border-2 border-gray-900 backdrop-blur-sm"
              variants={linkVariants}
              initial={"notActive"}
              animate={pathname === it.link ? "active" : "notActive"}
            >
              <Link
                href={it.link}
                className="inline-block w-full h-full text-center uppercase p-2"
                onClick={(e) => onLinkClick(e, it)}
              >
                {it.label}
              </Link>
            </motion.div>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default MobileNav;
