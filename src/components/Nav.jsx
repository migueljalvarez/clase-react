import React, {Component} from "react";
import styled from 'styled-components';


const Navbar = styled.div`
top: 0;
width: 100%;
display: block;
position: fixed;
background-color: #444444;
-webkit-transition: all 0.4s;
transition: all 0.4s;
`

const Enlace = styled.a`
    padding: 20px;
    color: #F8F9FB;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`


class Nav extends Component {
  render(){
    return (
      <Navbar>
        <Enlace>Home</Enlace>
        <Enlace>Noticias</Enlace>
        <Enlace>Fotos</Enlace>
      </Navbar>
    )
  }
}

export default Nav;