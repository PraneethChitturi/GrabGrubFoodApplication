import { Delete } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const EventCard = () => {
  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345 }}
          image="https://cdn.pixabay.com/photo/2017/01/26/02/06/platter-2009590_640.jpg"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">Indian Fast Food</Typography>
          <Typography variant="body2">50% off on your first order</Typography>
          <div className="py-2 space-y-2">
            <p>{"San Francisco"}</p>
            <p className="text-sm text-blue-500">September 15, 2024 12:00PM</p>
            <p className="text-sm text-red-500">September 16, 2024 12:00PM</p>
          </div>
        </CardContent>
        {true && (
          <CardActions>
            <IconButton>
              <Delete></Delete>
            </IconButton>
          </CardActions>
        )}
      </Card>
    </div>
  );
};

export default EventCard;
