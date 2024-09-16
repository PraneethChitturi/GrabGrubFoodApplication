import React from "react";
import Cart from "./Cart";
import { Home } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import { AddLocationAlt } from "@mui/icons-material";
const AddressCard = ({ item, showButton, handleSelectAddress }) => {
  return (
    <Card className="flex gap-5 w-64 p-5">
      <Home />
      <div className="space-y-3 text-gray-500">
        <h1 className="font-semibold text-lg text-white">Home</h1>
        <p>Hyderabad, India, 500073</p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelectAddress(item)}
          >
            Select
          </Button>
        )}
      </div>
    </Card>
  );
};

export default AddressCard;