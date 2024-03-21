import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
    <Navbar bg="light" data-bs-theme="light"  className="bg-body-tertiary" id='navbar'>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"/>
          <Nav className="me-auto">
          <NavLink to="/Dispositivo" className="nav-link">Dispositivos</NavLink>
            <NavLink to="/Computer" className="nav-link">Computadoras</NavLink>
            <NavLink to="/Departamentos" className="nav-link">Departamento</NavLink>
            <NavLink to="/Usuarios" className="nav-link">Usuarios</NavLink>
          </Nav>
      </Container>
    </Navbar>
    <br />
    <br />
    <br />
  </>
  );
}
