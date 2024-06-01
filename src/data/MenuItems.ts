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
    link: "/skills",
    label: "Skills",
  },
  {
    link: "/about",
    label: "About",
  },
];

export default MenuItems;
