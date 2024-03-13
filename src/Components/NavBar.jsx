import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = ["Home", "Contact", "About", "Career"];

  // Handle the navigation between the pages
  function handleNavigate(item) {
    if (item === "Home") {
      navigate("/");
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      className="bg-slate-400"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-[30%]",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="px-2 py-2 font-bold bg-blue-300 border rounded-full text-inherit">
            <img
              src="/Images/s.svg"
              alt="logo"
              className=" max-w-[30px] drop-shadow-xl"
            />
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        {menuItems?.map((item, index) => (
          <NavbarItem
            key={item + index}
            isActive={
              location.pathname === `/${item.toLowerCase()}` ||
              (location.pathname === "/" && item === "Home")
            }
          >
            <Link
              color="foreground"
              onClick={() => handleNavigate(item)}
              className="font-semibold cursor-pointer hover:animate-pulse "
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                location.pathname === `/${item.toLowerCase()}`
                  ? "primary"
                  : item === "Home" && location.pathname === "/"
                  ? "primary"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
              onClick={() => handleNavigate(item)}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
