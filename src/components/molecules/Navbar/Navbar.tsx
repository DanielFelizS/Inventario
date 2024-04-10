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
          <NavLink to="/inicio" className="nav-link">Acerca de</NavLink>
            <NavLink to="/dispositivos" className="nav-link">Dispositivos</NavLink>
            <NavLink to="/computer" className="nav-link">Computadoras</NavLink>
            <NavLink to="/departamentos" className="nav-link">Departamento</NavLink>
            <NavLink to="/usuarios" className="nav-link">Usuarios</NavLink>
            <NavLink to="/historial" className="nav-link">Auditoría</NavLink>
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
