

import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
 
  {
    id: 2,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 3,
    title: "Features",
    path: "/features",
    newTab: false,
  },
  {
    id: 4,
    title: "Challenges",
    path: "/challenges",
    newTab: false,
  },
  {
    id: 5,
    title: "About Us",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Privacy Policy",
        path: "/privacy-policy",
        newTab: false,
      },
      {
        id: 52,
        title: "FAQs",
        path: "/faqs",
        newTab: false,
      }
    ],
  },
];
export default menuData;
