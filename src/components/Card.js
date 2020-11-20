import React from 'react'
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
const Card = ({foto,tipo,modelo,año,descripcion}) => {
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
    </ContainerPadre>
  )
}


export default Card