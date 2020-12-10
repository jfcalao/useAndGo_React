import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { storage } from "../firebase";
import axios from "axios";
import { useHistory} from 'react-router-dom'

Modal.setAppElement("#root");

const ContainerPadre = styled.div`
  height: 495px;
  width: 300px;
  background-color: #e0e0e0;
  border-radius: 20px;
  margin-top: 50px;
  margin-left: 80px;
  border: #bbbbbf 5px dashed;
  #centrar {
    display: flex;
    justify-content: center;
    margin-top: 150px;
  }
`;
const ContainerModal = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
  }
  .custom-file-input::before {
    content: "Subir imagen";
    display: inline-block;
    background: #0275d8;
    border: 1px solid #999;
    border-radius: 3px;
    padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    font-weight: 700;
    font-size: 10pt;
    margin-top: 10px;
    padding-left: 100px;
    padding-right: 100px;
  }
  .custom-file-input:hover::before {
    border-color: black;
  }
  .custom-file-input:active::before {
    background: black;
  }
  .column {
    display: flex;
    flex-direction: column;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input[type="password"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    background-color: #0275d8;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type="submit"]:hover {
    background-color: #0275c0;
  }
  #boton {
    margin-bottom: 20px;
  }
  #separar {
    margin-right: 150px;
  }
  img {
    margin-top: 20px;
    width: 800px;
  }
`;


const Card = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgUR, setimgUR] = useState("");

  // variables
  const [tipo, setTipo] = useState("");
  const [modelo, setModelo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [año, setAño] = useState("");

  const {push}= useHistory()

  /// fin variables

  ///firebase
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(async (url) => {
            setimgUR(url);
            let axiosConfig = {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
                "x-access-token": sessionStorage.getItem("token"),
              },
            };
            await axios
              .post("https://use-and-go.herokuapp.com/vehiculos/register", {
                foto: url,
                descripcion: descripcion,
                modelo: modelo,
                año: año,
                tipo: tipo,
                alquilado:false
              }, axiosConfig)
              .then((response) => {
                alert('El vehiculo se agrego correctamente');
                setModalIsOpen(false)
                push("/jobs")
              })
              .catch((e) => console.error("problema fetching data", e));
          });
      }
    );
  };
  console.log("image:", image);
  /// firebase
  return (
    <ContainerPadre>
      <div id="centrar">
        <button onClick={() => setModalIsOpen(true)}>
          <svg
            width="5em"
            height="5em"
            viewBox="0 0 16 16"
            className="bi bi-plus-circle"
            fill="#bbbbbf"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
        </button>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <ContainerModal>
          <div id="separar">
            <h1>Ingresar nuevo vehiculo</h1>
            <div className="column">
              <label>Tipo</label>
              <input
                onChange={(e) => setTipo(e.target.value)}
                type="text"
                name="tipo"
                placeholder="Tipo"
              ></input>
              <label>Modelo</label>
              <input
                onChange={(e) => setModelo(e.target.value)}
                type="text"
                name="modelo"
                placeholder="Modelo del vehiculo"
              ></input>
              <label>Año</label>
              <input
                onChange={(e) => setAño(e.target.value)}
                type="text"
                name="año"
                placeholder="Año"
              ></input>
              <label>Descripcion</label>
              <input
                onChange={(e) => setDescripcion(e.target.value)}
                type="text"
                name="descripcion"
                placeholder="Descripcion"
              ></input>
              <input
                type="file"
                className="custom-file-input"
                onChange={handleChange}
              ></input>
              <input
                onClick={handleUpload}
                id="boton"
                type="submit"
                value="Añadir vehiculo"
              ></input>
            </div>
          </div>
          <img alt="" src={imgUR}></img>
        </ContainerModal>
      </Modal>
    </ContainerPadre>
  );
};

export default Card;
