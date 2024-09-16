import { Button, Card } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <Card className="flex justify-between items-center p-5">
      <div className="flex items-center space-x-5">
        <img
          className="h-16 w-16"
          src="https://cdn.pixabay.com/photo/2024/08/31/04/53/ai-generated-9010446_640.jpg"
          alt=""
        />
        <div>
          <p>Biryani</p>
          <p>$399</p>
        </div>
        <div>
          <Button className="cursor-not-allowed">Completed</Button>
        </div>
      </div>
    </Card>
  );
};

export default OrderCard;
