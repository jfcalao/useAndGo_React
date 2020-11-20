import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../components/Menu";
import Cards from "../components/Card";
import NewCard from "../components/NewCard";
import { storage } from "../firebase";
import logo from "../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";

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
const Jobs = (props) => {
  /*
  ///firebase
  const [image,setImage] = useState(null);
  const handleChange = e => {
    if (e.target.files[0]){
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      ()=>{
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url =>{
            console.log(url)
          });
      }
    )
  };
  console.log("image:",image);
  <input type="file" onChange={handleChange}></input>
      <button onClick={handleUpload}>Upload</button>
  /// firebase
  */
  const [access, setAccess] = useState(false);
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
      .post("http://54.90.249.186:3000/vehiculos", {}, axiosConfig)
      .then((response) => {
        console.log("Todo bien", response);
        setVehiculos(response.data.vehiculos);
        setUserName(response.data.nombreUsuario)
        console.log("Este es el array?", vehiculos);
        setAccess(true);
      })
      .catch((e) => {
        // Capturamos los errores
        setAccess(false);
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
            return(
              <Cards
                tipo={item[0].tipo}
                foto={item[0].foto}
                modelo={item[0].modelo}
                año={item[0].año}
                descripcion={item[0].descripcion}
              ></Cards>
            )

          })
          }
          <NewCard></NewCard>
        </ContenedorJobs>
      </ContenedorPJobs>
    </>
  );
};

export default Jobs;
