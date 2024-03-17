import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const navItems = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/favorite-list",
      title: "Favorite List",
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((nav) => (
          <NavigationMenuItem key={nav.href} className="mr-2">
            <NavLink to={nav.href} className="text-lime-900 font-bold">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {nav.title}
              </NavigationMenuLink>
            </NavLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
