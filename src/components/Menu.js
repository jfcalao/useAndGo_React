import React, {useState} from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'
import perfil from '../assets/sinFoto.jpg'
import {Link} from 'react-router-dom'
import { storage } from "../firebase";

Modal.setAppElement('#root')

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
const ImagenPerfil1 = styled.div`
    height:350px;
    width:350px;
    background-image:url(${perfil});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
    margin-top:45px;
    margin-left:20px;
` 

const ContainerModal = styled.div`
    width:100%;
    height:80vh;
    display:flex;
    flex-direction:row;
    .custom-file-input::-webkit-file-upload-button {
    visibility: hidden;
    }
    .custom-file-input::before {
    content: 'Cambiar imagen';
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
        margin-left: 130px;
    }
    .custom-file-input:hover::before {
        border-color: black;
    }
    .custom-file-input:active::before {
        background: black;
    }
`

const Menu = (props) => {
  const [modalIsOpen,setModalIsOpen] = useState(false)
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
  /// firebase
  return (
      <>
      <Contenedor1>
        <Contenedor>
            <div className="column">
                <ImagenPerfil></ImagenPerfil>
                <h1>{props.userName}</h1> 
                <div className="row">
                    <Modal isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
                        <ContainerModal>
                            <div>
                                <ImagenPerfil1></ImagenPerfil1>
                                <input type="file" className="custom-file-input" onChange={handleChange}></input>
                            </div>
                        </ContainerModal>
                        <button onClick={handleUpload}>Upload</button>
                        <button onClick={() => setModalIsOpen(false)}>Cerrar</button>
                    </Modal>
                    <Link onClick={()=>setModalIsOpen(true)} to='/jobs' className="mr mb" style={{color: 'white'}}>Perfil</Link>
                    <Link className="mr mb" to='/login' style={{color: 'white'}}>Salir</Link>
                </div>
            </div>
            <button>Agregar vehiculos</button>
            <button>Modificar vehiculos</button>
            <button>Eliminar vehiculos</button>
            <button>Seguimiento de vehiculos</button>
            <div id="ayuda">
                <Link className="mr mb" to='/help' style={{color: 'white'}}>Ayuda?</Link>
            </div>
        </Contenedor>
      </Contenedor1>
      </>
  )
}
export default Menu