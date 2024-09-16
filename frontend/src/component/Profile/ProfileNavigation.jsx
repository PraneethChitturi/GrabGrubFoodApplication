import React from "react";
import {
  AccountBalanceWallet,
  Event,
  Favorite,
  Home,
  Logout,
  NotificationsActive,
  ShoppingBag,
} from "@mui/icons-material";
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

const menu = [
  { title: "Orders", icon: <ShoppingBag /> },
  { title: "Favorites", icon: <Favorite /> },
  { title: "Address", icon: <Home /> },
  { title: "Payments", icon: <AccountBalanceWallet /> },
  { title: "Notifications", icon: <NotificationsActive /> },
  { title: "Events", icon: <Event /> },
  { title: "Logout", icon: <Logout /> },
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(min-width:900px)");
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    navigate(`/my-profile/${item.title.toLowerCase()}`);
  };
  return (
    <>
      <div>
        <Drawer
          sx={{ zIndex: 1 }}
          open={true}
          anchor="left"
          onClose={handleClose}
          variant={isSmallScreen ? "temporary" : "permanent"}
        >
          <div className="w-[50vw] lg:w-[20vw] h-[100vh]  flex flex-col justify-center text-xl gap-10 ">
            {menu.map((item, i) => (
              <>
                <div
                  onClick={() => handleNavigate(item)}
                  className="px-5 flex items-center space-x-5 cursor-pointer"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </div>
                {i !== menu.length - 1 && <Divider />}
              </>
            ))}
          </div>
        </Drawer>
      </div>
      <s></s>
    </>
  );
};

export default ProfileNavigation;
