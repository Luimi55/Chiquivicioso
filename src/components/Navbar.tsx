import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/chiqui-vicioso-1-300x68.png'

type Props = {}

const NavbarMenu = (props: Props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">         
            <Image src={logo} width={200} height={60} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="flex-grow-1  justify-content-end gap-4 h5">
            <Nav.Link href="#home">
                Inicio
            </Nav.Link>
            <Nav.Link href="#biography">
                Biografía
            </Nav.Link>
            <Nav.Link  href="#art">
                Obras
            </Nav.Link>
            <Nav.Link  href="#opinion">
                Opinión
            </Nav.Link>
            <Nav.Link  href="#multimedia">
                Multimedia
            </Nav.Link>
            <Nav.Link  href="https://www.facebook.com/ChiquiViciosoRD">
                Sigueme
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarMenu