import React, { Component } from "react";
import styled from 'styled-components';

const Nav = styled.div`
background:#4267b2;
height:70px;
`;

const Title = styled.div`
font-size:30;
color:#fff;
margin-left:20
`

export default class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <Title>Movie-App</Title>
          <div style={styles.cartContainer}>
            <img alt="cart icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styles.cartIcon}/>
            <span style={styles.cartCount}>0</span>
          </div>
        </Nav>
      </>
    );
  }
}

const styles = {
  nav: {
    height: "70px",
    backgroundColor: "#4267b2",
    display: "flex",
    justifyContent: "space-between",
    position:"relative",
    padding:"10px"
  },
  title:{
    fontSize:30,
    color:"#fff",
    fontFamily:'"Montserrat", sans-serif',
    textTransform:"uppercase",
    marginLeft:20
  },
  cartContainer:{
    position:"relative",
    cursor:"pointer"
  },
  cartIcon:{
    height:48,
    marginRight:20
  },
  cartCount:{
    background:"orange",
    borderRadius:"50%",
    padding:"4px 8px",
    position:"absolute",
    right:10,
    top:-5,
    fontSize:12
  }
};
