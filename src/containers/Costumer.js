import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../components/MenuC";
import Cards from "../components/CardC";
import axios from "axios";

const ContenedorJobs = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: #181818;
`;
const ContenedorPJobs = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400vh;
  background-color: #181818;
`;
const Costumer = (props) => {
  const [vehiculos, setVehiculos] = useState([]);
  const [userName, setUserName] = useState("");
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "x-access-token": sessionStorage.getItem("token"),
    },
  };

  useEffect(() => {
    axios
      .post("https://use-and-go.herokuapp.com/vehiculos", {}, axiosConfig)
      .then((response) => {
        console.log("Todo bien", response);
        console.log(response.data.vehiculos);
        setVehiculos(response.data.vehiculos);
        setUserName(response.data.nombreUsuario)
        sessionStorage.setItem('usern',response.data.nombreUsuario);
        console.log("Este es el array?", vehiculos);
      })
      .catch((e) => {
        // Capturamos los errores
        console.log("Todo mal", e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ContenedorPJobs>
        <NavBar userName={userName}></NavBar>
        <ContenedorJobs>
          {
          vehiculos.map(item=>{
              console.log("este es itm",item);
            return(
              <Cards
                tipo={item.tipo}
                foto={item.foto}
                modelo={item.modelo}
                año={item.año}
                descripcion={item.descripcion}
                id={item._id}
                rented={false}
              ></Cards>
            )
          })
          }
        </ContenedorJobs>
      </ContenedorPJobs>
    </>
  );
};

export default Costumer;
