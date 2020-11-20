import React from 'react'
import styled from 'styled-components'

const ContainerPadre = styled.div`
  height:495px;
  width:300px;
  background-color:#e0e0e0;
  border-radius:20px;
  margin-top:50px;
  margin-left:80px;
  border: #bbbbbf 5px dashed;
  #centrar{
    display:flex;
    justify-content:center;
    margin-top:150px;
  }
  
`

const Card = () => {
  return (
    <ContainerPadre>
        <div id="centrar">
            <svg width="5em" height="5em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="#bbbbbf" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
        </div>
    </ContainerPadre>
  )
}


export default Card