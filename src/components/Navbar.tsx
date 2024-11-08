import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '/img/chiqui-vicioso-1-300x68.png'
import facebook from '/img/facebook.png'


const NavbarMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar.Brand href="/">         
            <Image src={logo} width={200} height={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="flex-grow-1  justify-content-end gap-4 h5">
            <Nav.Link className='navLink' href="/Chiquivicioso">
                Inicio
            </Nav.Link>
            <Nav.Link className='navLink' href="/Chiquivicioso">
                Biografía
            </Nav.Link>
            <Nav.Link className='navLink'  href="/Chiquivicioso">
                Obras
            </Nav.Link>
            <Nav.Link className='navLink'  href="/Chiquivicioso">
              Artículos
            </Nav.Link>
            <Nav.Link className='navLink'  href="/Chiquivicioso">
                Multimedia
            </Nav.Link>
            <Nav.Link className='text-primary'  href="https://www.facebook.com/ChiquiViciosoRD">
              <Image src={facebook} width={20} height={20}/>
              <span>  </span>
                Sigueme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu