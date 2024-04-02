import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="bg-body-tertiary" id='navbar'>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <NavLink to="/Inicio" className="nav-link">Acerca de</NavLink>
            <NavLink to="/Dispositivo" className="nav-link">Dispositivos</NavLink>
            <NavLink to="/Computer" className="nav-link">Computadoras</NavLink>
            <NavLink to="/Departamentos" className="nav-link">Departamento</NavLink>
            <NavLink to="/Usuarios" className="nav-link">Usuarios</NavLink>
            <NavLink to="/Historial" className="nav-link">Auditoría</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br />
    <br />
    <br />
    </>
  );
}
