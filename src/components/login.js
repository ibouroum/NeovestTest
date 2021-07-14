import React, { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {Snackbar} from '../commun' 

const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`;
const Form = styled.form`
  border-radius: 7px;
  width: 260px;
  text-align: center;
  padding: 15px;
  margin: 50px auto;
  box-shadow: 5px 5px 5px #b9b7b7;
`;
const styleInput = {
  margin: "15px",
  width: "227px",
};

const Login = (props) => {
  const { onSubmit, handleSubmit, errors, register ,state} = props;
  
  const { open, status, message } = state;
  console.log(state)
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Snackbar
          message={message ? message : ""}
          status={status ? status : ""}
          open={open ? open : false}
        />
      <Typography color="textSecondary" gutterBottom align="left">
        Login
      </Typography>

      <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
      <OutlinedInput
        style={styleInput}
        label="username"
        id="outlined-adornment-password"
        type="text"
        {...register("username", {
          maxLength: {
            value: 15,
            message: "Username must be less than 15 character",
          },
          required: {
            value: true,
            message: "Username is required",
          },
        })}
        labelWidth={70}
      />
      {errors.username && (
        <Message  gutterBottom align="center">
          {errors.username.message}
        </Message>
      )}
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        style={styleInput}
        label="password"
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        {...register("password", {
          pattern: {
            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
            message: "Password must contain a Number , Uppercase, Lowercase and special character",
          },
          minLength: {
            value: 6,
            message: "Password must be greater than 6 character",
          },
          required: {
            value: true,
            message: "Password is required",
          },
        })}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        labelWidth={70}
      />
      {errors.password && (
        <Message  gutterBottom align="center">
          {errors.password.message}
        </Message>
      )}

      <Button
        type="submit"
        variant="contained"
        size="medium"
        color="primary"
        align="right"
      >
        Login
      </Button>
    </Form>
  );
};
export default Login;
