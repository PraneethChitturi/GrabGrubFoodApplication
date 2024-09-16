import { Avatar, Badge, Icon, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import { Person, ShoppingCart } from "@mui/icons-material";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="px-5 sticky z-50 py-[.8rem] bg-[#e91e63] 
  lg:px-20 flex justify-between"
    >
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">Grab Grub</li>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="flex items-center ">
          {false ? (
            <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>P</Avatar>
          ) : (
            <IconButton onClick={() => navigate("/account/login")}>
              <Person />
            </IconButton>
          )}
        </div>
        <div className="flex items-center ">
          <IconButton>
            <Badge color="secondary" badgeContent={3}>
              <ShoppingCart sx={{ fontSize: "1.5rem" }}></ShoppingCart>
            </Badge>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
