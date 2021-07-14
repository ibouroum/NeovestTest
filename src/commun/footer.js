import React from "react";
import Hink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const Root = styled.div`
  background-color: "#FFFFFF",
  border-top: "3px solid #E7E7E7",
  text-align: "center",
  padding: 20px,
  left: 0,
  width: 100%,
  `;

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Hink color="inherit" href="#">
        Neovest Test
      </Hink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  return (
    <Root>
      <Copyright />
    </Root>
  );
};

export default Footer;
