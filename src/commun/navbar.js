import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Neovest Test
            </Link>
          </Typography>
          <Typography variant="h6" color="secondary">
            <Link
              to="/login"
              className={classes.link}
            >
              Login
            </Link>
          </Typography>
          {/* <Button color="inherit" onClick={() => history.push('/login')} >Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
