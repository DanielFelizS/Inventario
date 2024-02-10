import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AgregarDispositivo from './pages/AgregarDatos';
import EditarDispositivo from './pages/EditarDatos';
import VerDatos from './pages/VerDatos';
import HomePage from './pages/HomePage'
import EliminarDatos from './pages/EliminarDatos';
import Login from './pages/Login';
import Sidebar from './molecules/Navbar';
// import Sidebar from './components/Sidebar';

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Redirigir automáticamente a /Login solo si no se encuentra en la página de inicio de sesión
  useEffect(() => {
    if (location.pathname == '/') {
      navigate('/Login');
    }
  }, [navigate, location]);

  return (
    <>
      <Sidebar>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Inicio" element={<HomePage />} />
        <Route path="/Agregar" element={<AgregarDispositivo />} />
        <Route path="/Editar/:id" element={<EditarDispositivo />} />
        <Route path="/Consultar/:id" element={<VerDatos />} />
        <Route path="/Eliminar/:id" element={<EliminarDatos />} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
      </Sidebar>
    </>
  );
};

export default App;