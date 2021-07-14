import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Radio from "@material-ui/core/Radio";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar } from "../commun";

const Root = styled.div`
  border-radius: 7px;
  width: 260px;
  text-align: center;
  padding: 15px;
  margin: 50px auto;
  box-shadow: 5px 5px 5px #b9b7b7;
`;

const useStyles = makeStyles({
  root: {
    width: "260px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = (props) => {
  const { clients, detailClients, state } = props;
  const { open, status, message } = state;
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState(0);
  const handleChange = (id) => {
    setSelectedValue(id);
  };
  
  return (
    <>
      <Root>
        <Snackbar
          message={message ? message : ""}
          status={status ? status : ""}
          open={open ? open : false}
        />
        <Typography color="textSecondary" gutterBottom align="left">
          Client List's
        </Typography>
        <List dense>
          {clients.map((value) => {
            return (
              <ListItem key={value.id} button>
                <ListItemText id={value.firstname} primary={value.firstname} />
                <ListItemText id={value.lastname} primary={value.lastname} />
                <ListItemSecondaryAction>
                  <Radio
                    checked={selectedValue === value.id ? true : false}
                    onChange={() => handleChange(value.id)}
                    value={value.id}
                  />
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>

        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              variant="h1"
              color="textSecondary"
              gutterBottom
            >
              Details
            </Typography>
            <Typography
              className={classes.title}
              variant="body1"
              color="textSecondary"
              gutterBottom
            >
              {`Adrress : ` +
                detailClients[selectedValue].address +
                " " +
                detailClients[selectedValue].city +
                "," +
                detailClients[selectedValue].country}
            </Typography>
          </CardContent>
        </Card>
      </Root>
    </>
  );
};
export default Home;
