import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import {Link, useNavigate} from 'react-router-dom';


const Home = () => {
    const navigates=useNavigate();

    useEffect(()=>{
    
        let firstName=sessionStorage.getItem("firstName")
        if(firstName=== "" || firstName===null)
        {
            navigates('/login')
        }

    })
  return (
    <>


   <Container fluid>
    <Row>
      <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand  to="/" className='logo'> Thangam Thangaikal Kadai</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className='head' >Home</Nav.Link>
            <Nav.Link as={Link} to="/register" className='head' >SignUp</Nav.Link> 
            <Nav.Link as={Link} to="/login" className='head' >LogOut</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
   </Container>


 <div className='banner'>
    <div className='conters'>
        <h2>Golden Toys Shop</h2>
        <p>"Thangam Thangaikal Kadai" is a charming and unique name for a toy shop, 
          combining the Tamil words for "gold" and "toys." It suggests that your shop offers precious 
          and valuable toys for children. It can convey a sense of quality and specialness, which may attract 
          customers looking for unique and high-quality toys. Just make sure to check for any 
          trademark or business name conflicts in your area before finalizing the name.</p>

            <div>
                <button className='btn1'>About.....</button> 
                <button className='btn1' >Shop Now...</button>
            </div>
    </div>
 </div>
   </>
  )
}

export default Home