import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import React from "react";

const demo = [
  {
    category: "Nuts & Seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground Beef", "Bacon Strips"],
  },
  {
    category: "Bread",
    ingredients: ["Hamburger Buns"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    //console.log(value);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5 ">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src="https://cdn.pixabay.com/photo/2024/08/31/04/53/ai-generated-9010446_640.jpg"
                alt=""
              />
            </div>
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>₹499</p>
              <p className="text-gray-400">
                A burger is a patty of ground beef grilled and placed between
                two halves of a bun. Slices of raw onion, lettuce, bacon,
                mayonnaise, and other ingredients add flavor.
              </p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {demo.map((item) => (
                <div>
                  <p>{item.category}</p>
                  <FormGroup>
                    {item.ingredients.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox onChange={handleCheckBoxChange(item)} />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <Button type="submit" variant="contained" disabled={false}>
                {true ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
