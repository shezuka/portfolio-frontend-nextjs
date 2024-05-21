export const MenuItemsAnimationDuration = 0.2;

export interface MenuItem {
  link: string;
  label: string;
}

const MenuItems: MenuItem[] = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/about",
    label: "About",
  },
  {
    link: "/contact",
    label: "Contact",
  },
];

export default MenuItems;
