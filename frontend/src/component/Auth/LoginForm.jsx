import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {};
  return (
    <div>
      <Typography variant="h5" className="text-center">
        Login
      </Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            as={TextField}
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
          />
          <Field
            as={TextField}
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
          />

          <Button
            className="mt-2 p-[1rem]"
            fullWidth
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Form>
      </Formik>
      <Typography variant="body2" align="center" sx={{ mt: 3 }}>
        Don't have an Account?{" "}
        <Button size="small" onClick={() => navigate("/account/register")}>
          Register
        </Button>
      </Typography>
    </div>
  );
};

export default LoginForm;
