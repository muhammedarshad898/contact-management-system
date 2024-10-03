import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
   <>
    <Navbar className="bg-secondary">
        <Container>
          <Navbar.Brand href="#home"><i className="fa-solid fa-address-book fa-xl fa-bounce"  style={{color: "#145ddb",}} />
            {' '}
            My Contacts
          </Navbar.Brand>
        </Container>
      </Navbar>
   </>
  )
}

export default Header