import React, { useState, useEffect } from "react";
import { Login } from "../components";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const [state, setState] = useState({
    open: false,
    message: "",
    status: "",
  });
  useEffect(() => {
    console.log("welcom");
  }, [state.open]);
  const validate = (response) => {
    if (response.status === 200) {
      window.localStorage.setItem("user", JSON.stringify(response.data));
      history.push({
        pathname: "/",
        open: true,
        status: "success",
        message: "Authentification Success",
      });
    } else if (response.status === 401) {
      if (response.errors.username)
        setError("username", { message: response.errors.username });
      if (response.errors.password)
        setError("password", { message: response.errors.password });
    } else if (response.status === 400) {
      setState({
        open: true,
        message: response.errors,
        status: "error",
      });
    }
  };
  const onSubmit = (data) => {
    setState({ ...state, open: false });
    // const response = request(
    //   {
    //     url: "/login",
    //     params: data,
    //     method: "post",
    //   },
    // );
    // const response = {
    //   status: 200,
    //   errors: null,
    //   data: {
    //     username: "user",
    //     token: "token",
    //   },
    // };
    const response = {
      status: 401,
      errors: {
        // username: "already exists",
        password : "PAssword Does not match"
      },
      data : null
    };
    // const response = {
    //   status: 400,
    //   errors: "Bad request : The request was invalid.",
    //   data : null
    // };
    validate(response);
  };

  return (
    <div>
      <Login
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        errors={errors}
        register={register}
        state={state}
      />
    </div>
  );
};

export default LoginContainer;
