import { GlobalContext } from '../Context';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

import '../App.css'


function Navlink() {
  let { state, dispatch } = useContext(GlobalContext);
  let handleClick = ()=>{
    dispatch({
      type: "CHANGE_THEME"
    
    })
  }
  return (
    <div className={`main ${state.darkTheme == true ? "light" : "dark" }`}>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto tag">
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
               <Link to="/contact">contact</Link>
              
                {state.darkTheme == true ? (<IoSunnyOutline  onClick={handleClick}/>):
               (<IoMoonOutline onClick={handleClick}/>)}
              
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default Navlink;














 
