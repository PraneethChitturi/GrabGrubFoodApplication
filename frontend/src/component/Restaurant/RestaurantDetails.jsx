import {
  Divider,
  FormControl,
  Grid,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const RestaurantDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <section className="">
        <h3 className="text-gray-500 py-2 mt-10">
          Home/India/Indian Fast Food/
        </h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://nolinskiparis.com/wp-content/uploads/2022/06/restaurant-nolinski-paris-5-etoiles-luxe-12-guillaume-de-laubier.jpg"
                alt=""
              ></img>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg"
                alt=""
              ></img>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://milpitasbeat.com/wp-content/uploads/2023/06/IMG_4767-1068x601.jpg"
                alt=""
              ></img>
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>
          <p className="text-gray-500 flex items-center gap-3 mt-1">
            <span>
              Indian multinational restaurant aggregator and food delivery
              company. It was founded by Deepinder Goyal and Pankaj Chaddah in
              2008
            </span>
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Mumbai, India</span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon></CalendarTodayIcon>
              <span>Mon-Fri 8:00AM - 12:00PM</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup></RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10 ">Menu</div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
