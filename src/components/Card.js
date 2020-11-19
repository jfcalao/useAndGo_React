import React from 'react'
import styled from 'styled-components'


const CardStyled = styled.div`
      height:100px;
      width:70px;
      background: blue;
    .porto{
      color: red;
    }
  `

const Card = () => {

  return (

    <CardStyled >
      <h3 className="porto">Porto es hombre</h3>
    </CardStyled>


  )

}


export default Card