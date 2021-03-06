import axios from 'axios';
import React from 'react'
import { useHistory} from 'react-router-dom'
import styled from 'styled-components'


const ContainerPadre = styled.div`
  display:flex;
  flex-direction:column;
  height:500px;
  width:300px;
  background-color:#e0e0e0;
  border-radius:20px;
  margin-top:50px;
  margin-left:80px;
  #imagen{
    width:100%;
    height:30vh;
    border-radius:20px;
  }
  img{
    height:30vh;
    width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius:20px;
  }
  .row{
    display:flex;
    flex-direction:row;
  }
  h4{
    margin:0;
    margin-bottom:10px;
  }
  p{
    margin:0;
  }
  .primero{
    margin-top:20px;
  }

`
const CardC = ({ foto, tipo, modelo, año, descripcion, id, rented }) => {
  const _id = id;
  const {push}= useHistory()
  const enviar = async () => {
    await axios.post("https://use-and-go.herokuapp.com/vehiculos/rent", { id: _id })
    push("/costumer");
  };
  const entregar = async () => {
    await axios.post("https://use-and-go.herokuapp.com/vehiculos/unrent", { id: _id })
    push("/costumerrent");
  };
  console.log(foto);



  return (
    <ContainerPadre>
      <div id="imagen">
        <img alt="imagen" src={foto}></img>
      </div>
      <h4 className="primero">Tipo:{tipo}</h4>
      <h4>Modelo:{modelo}</h4>
      <h4>Año:{año}</h4>
      <p>Descripcion:{descripcion}</p>
      {rented ?
      <button onClick={entregar}>Entregar</button>:

      <button onClick={enviar}>Alquilar</button>
      }
    </ContainerPadre>
  )

}


export default CardC