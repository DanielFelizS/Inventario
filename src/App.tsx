import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AgregarDispositivo from './components/pages/AgregarDispositivo';
import EditarDispositivo from './components/pages/EditarDispositivo';
import VerDispositivo from './components/pages/VerDispositivo';
import EliminarDispositvo from './components/pages/EliminarDispositvo';

import AgregarDepartamento from './components/pages/AgregarDepartamento';
import EditarDepartamento from './components/pages/EditarDepartamento';
import VerDepartamento from './components/pages/VerDepartamento';
import EliminarDepartamento from './components/pages/EliminarDepartamento';
import HomePage from './components/pages/HomePage'
import Login from './components/pages/Login';
import HomeDispositivos from './components/pages/HomeDispositivos';
import HomeDepartamento from './components/pages/HomeDepartamento';
// import Sidebar from './components/molecules/Navbar';
import Sidebar from './components/Sidebar';

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
      <Sidebar/>
      <Routes>
        {/* Navegaciones principales */}
        <Route path="/Login" element={<Login />} />
        <Route path="/Inicio" element={<HomePage />} />
        <Route path="/Dispositivo" element={<HomeDispositivos />} />
        <Route path="/Departamentos" element={<HomeDepartamento />} />
        {/* Dispositivo */}
        <Route path="/AgregarDispositivo" element={<AgregarDispositivo />} />
        <Route path="/EditarDispositivo/:id" element={<EditarDispositivo />} />
        <Route path="/VerDispositivo/:id" element={<VerDispositivo />} />
        <Route path="/EliminarDispositivos/:id" element={<EliminarDispositvo />} />
        {/* Departamento */}
        <Route path="/AgregarDepartamento" element={<AgregarDepartamento />} />
        <Route path="/EditarDepartamento/:id" element={<EditarDepartamento />} />
        <Route path="/VerDepartamento/:id" element={<VerDepartamento />} />
        <Route path="/EliminarDepartamento/:id" element={<EliminarDepartamento />} />
        <Route path="/" element={<Sidebar />} />
      </Routes>
      {/* </Sidebar> */}
    </>
  );
};

export default App;