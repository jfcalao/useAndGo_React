import React from 'react'
import styled from 'styled-components'
import perfil from '../assets/pruebaPersona.jpg'
import {Link} from 'react-router-dom'

const Contenedor1 = styled.div`
    height:200vh;
    width:15%;
    background-color:#23242D;
    margin-right:20px;
`

const Contenedor = styled.div`
    height:100vh;
    width:15%;
    background-color:#23242D;
    position:fixed;
    .column{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    .row{
        display:flex;
        flex-direction:row;
        align-items:center;
    }
    h1{
        text-align:center;
        color:white;
        font-size:20px;
    }
    .mr{
        margin-right:10px;
    }
    .mb{
        margin-bottom:50px;
    }
    button{
        width: 100%;
        background-color: #0275d8;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button{
        background-color: #0275c0;
    }
    #ayuda{
        margin-top:120px;
        margin-left:80px;
    }   
`
const ImagenPerfil = styled.div`
    height:150px;
    width:150px;
    background-image:url(${perfil});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
    margin-top:45px;
` 
const Menu = () => {

  return (
      <>
      <Contenedor1>
        <Contenedor>
            <div className="column">
                <ImagenPerfil></ImagenPerfil>
                <h1>Gustavo Guerrero</h1> 
                <div className="row">
                    <Link className="mr mb" to='/perfil' style={{color: 'white'}}>Perfil</Link>
                    <Link className="mr mb" to='/perfil' style={{color: 'white'}}>Salir</Link>
                </div>
            </div>
            <button>Agregar vehiculos</button>
            <button>Modificar vehiculos</button>
            <button>Eliminar vehiculos</button>
            <button>Seguimiento de vehiculos</button>
            <div id="ayuda">
                <Link className="mr mb" to='/perfil' style={{color: 'white'}}>Ayuda?</Link>
            </div>
        </Contenedor>
      </Contenedor1>
      </>
  )
}


export default Menu