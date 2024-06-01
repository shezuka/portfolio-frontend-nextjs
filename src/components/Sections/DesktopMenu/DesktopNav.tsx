import React from "react";
import { motion } from "framer-motion";
import MenuItems, { MenuItem } from "@/data/MenuItems";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import usePageTransition from "@/context/PageTransition/usePageTransition";

const navVariants = {
  initial: { y: -100 },
  animate: { y: 0 },
};

interface DesktopNavProps {}

const DesktopNav = (props: DesktopNavProps) => {
  const pathname = usePathname();
  const pageTransition = usePageTransition();

  const onLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: MenuItem,
  ) => {
    e.preventDefault();
    pageTransition.push(link.link);
  };

  return (
    <motion.nav
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5, delay: 0.5 }}
      variants={navVariants}
      className="flex flex-row justify-end z-50"
    >
      {MenuItems.map((it) => (
        <motion.div
          key={it.link}
          transition={{ delay: 0, duration: 0.1 }}
          whileHover={{ y: -3 }}
          className={classNames({})}
        >
          <Link
            href={it.link}
            onClick={(e) => onLinkClick(e, it)}
            className={classNames({
              "hover:underline": true,
              "underline-offset-8": true,
              "no-underline": pathname !== it.link,
              underline: pathname === it.link,
              "inline-block": true,
              "px-6": true,
              "py-3": true,
              "last:mr-0": true,
              uppercase: true,
              "hover:text-gray-300": true,
              transition: true,
              "duration-300": true,
            })}
          >
            {it.label}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  );
};

export default DesktopNav;
