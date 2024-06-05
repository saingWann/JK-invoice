import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../state/data/usersSlice";
import { LogOutIcon, User2Icon, UserIcon } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Dashboard", "Log Out"];
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUserId");
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  return (
    <Navbar
      id="navbar"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden " justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p
            onClick={() => navigate("/invoice")}
            className="font-bold text-2xl text-inherit"
          >
            JK.invoice
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Link
            onClick={() => navigate("/invoice")}
            className="font-bold text-2xl text-inherit text-red-600 cursor-pointer"
          >
            JK.invoice
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {currentUser?.userName ? (
          <NavbarItem className="hidden md:flex sm:flex lg:flex">
            <Button
              className="px-4 py-2 font-semibold hover:text-white/70 bg-red-600 text-white rounded-full hover:shadow-md flex gap-1 items-center"
              onClick={() => navigate(`/profile/${currentUser.userName}`)}
            >
              <User2Icon size={20} />
              {currentUser.userName}
            </Button>
          </NavbarItem>
        ) : null}

        {currentUser?.userName ? (
          <NavbarItem className="hidden sm:flex lg:flex md:flex">
            <button
              className="px-4 py-2 bg-slate-200 rounded-full font-semibold hover:bg-slate-100 active:bg-slate-200 flex items-center gap-2"
              onClick={handleLogout}
            >
              <LogOutIcon size={20} />
              Logout
            </button>
          </NavbarItem>
        ) : null}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === menuItems.length - 1 ? "danger" : "foreground"}
              onClick={() => {
                if (item === "Log Out") {
                  handleLogout();
                } else if (item === "Home") {
                  navigate(`/invoice`);
                } else {
                  navigate(`/profile/${currentUser.userName}`);
                }
              }}
              size="md"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
