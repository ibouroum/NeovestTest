import React from "react";
import { Home } from "../components";
import { useHistory } from "react-router-dom";
const clients = [
  {
    id: 0,
    firstname: "Martin",
    lastname: "Arthur",
  },
  {
    id: 1,
    firstname: "Dupond",
    lastname: "Edouard",
  },
  {
    id: 2,
    firstname: "Lemaitre",
    lastname: "Christian",
  },
];
const detailClients = [
  {
    idClient: 0,
    address: "14 rue Pegolesse 4000",
    city: "Paris",
    country: "France",
  },
  {
    idClient: 1,
    address: "14 rue Pegolesse 7520",
    city: "Parma",
    country: "Italie",
  },
  {
    idClient: 2,
    address: "14 rue Pegolesse 1000",
    city: "casa",
    country: "Morocco",
  },
];

const HomeContainer = () => {
  const history = useHistory();
  const state = history.location;

  return (
    <div>
      <Home
        clients={clients}
        detailClients={detailClients}
        state={state}
      />
    </div>
  );
};

export default HomeContainer;
