import { AddPhotoAlternate, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { Form, useFormik } from "formik";
import React, { useState } from "react";
import { uploadImageToCloudinary } from "../util/UploadToCloudinary";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: "",
  vegeterian: true,
  seasonal: false,
  ingredients: [],
  images: [],
};
const CreateMenuForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      values.restaurantId = 2;

      console.log("Data from create restaurant form", values);
    },
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (i) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(i, 1);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">
          Add New Menu Item
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            <Grid item xs={12} className="flex flex-wrap gap-5">
              <input
                accept="image/*"
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              ></input>
              <label htmlFor="fileInput" className="relative">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-grey-600">
                  <AddPhotoAlternate className="text-white" />
                </span>{" "}
                {uploadImage && (
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, i) => {
                  return (
                    <div className="relative">
                      <img
                        className="w-24 h-24 object-cover"
                        key={i}
                        src={image}
                        alt=""
                      />
                      <IconButton
                        size="small"
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          outline: "none",
                        }}
                        onClick={() => handleRemoveImage(i)}
                      >
                        <Close sx={{ fontSize: "1rem" }} />
                      </IconButton>
                    </div>
                  );
                })}
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.price}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="openingHours"
                name="openingHours"
                label="Opening Hours"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.openingHours}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="category"
                name="category"
                label="Food Category"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.category}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="ingredients">Ingredients</InputLabel>
                <Select
                  labelId="ingredients"
                  id="ingredients"
                  multiple
                  value={formik.values.ingredients}
                  onChange={formik.handleChange}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Ingredients"
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {[1, 1, 1].map((name, index) => (
                    <MenuItem key={name} value={name}>
                      {index}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                id="stateProvince"
                name="stateProvince"
                label="State/Province"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.stateProvince}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={4}>
              <TextField
                fullWidth
                id="postalCode"
                name="postalCode"
                label="Postal Code"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="country"
                name="country"
                label="Country"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.country}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
              ></TextField>
            </Grid>

            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.mobile}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="instagram"
                name="instagram"
                label="Instagram"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.instagram}
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="twitter"
                name="twitter"
                label="Twitter"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.twitter}
              ></TextField>
            </Grid>
          </Grid>
          <Button
            className=""
            variant="contained"
            color="primary"
            type="submit"
          >
            Create Restaurant
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenuForm;