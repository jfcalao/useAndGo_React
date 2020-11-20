import React,{useState} from 'react'
import styled from 'styled-components'
import NavBar from '../components/Menu'
import Cards from '../components/Card'
import NewCard from '../components/NewCard'
import logo from '../assets/logo.png'
import axios from 'axios'
import {Link} from 'react-router-dom'

const ContenedorJobs = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:100%;
  height:100vh;
  background-color:#181818;
`
const ContenedorPJobs = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  height:400vh;
  background-color:#181818;
`

const Jobs = () => {
  return (
    <>
      <ContenedorPJobs>
          <NavBar></NavBar>
      <ContenedorJobs>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <NewCard></NewCard>
      </ContenedorJobs>
      </ContenedorPJobs>
    </>
  )
}


export default Jobs