import React from 'react'
import styled from 'styled-components'
import perfil from '../assets/pruebaPersona.jpg'

const ContainerPadre = styled.div`
  display:flex;
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
`
const Imagen = styled.div`
  height:30vh;
  width:100%;
  background-image:url(${perfil});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius:20px;
`
const Card = () => {
  return (
    <ContainerPadre>
      <div id="imagen">
        <Imagen></Imagen>
      </div>
    </ContainerPadre>
  )
}


export default Card