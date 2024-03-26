import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import ProtectedRoute from './components/utils/ProtectedRouter';
// import HomePage from './components/pages/HomePage'
import Login from './components/pages/Login';
import Registro from './components/pages/Registro';
import HomeDispositivos from './components/pages/HomeDispositivos';
import HomeDepartamento from './components/pages/HomeDepartamento';
import HomeComputer from './components/pages/HomePc';
import HomeUsuario from './components/pages/HomeUsuario';
import HomeAuditoria from './components/pages/HomeAuditoria';

import AgregarDispositivo from './components/pages/AgregarDispositivo';
import EditarDispositivo from './components/pages/EditarDispositivo';
import EliminarDispositvo from './components/pages/EliminarDispositvo';
import AgregarDepartamento from './components/pages/AgregarDepartamento';
import EditarDepartamento from './components/pages/EditarDepartamento';
import EliminarDepartamento from './components/pages/EliminarDepartamento';
import AgregarComputer from './components/pages/AgregarPc';
import EditarComputer from './components/pages/EditarPc';
import EliminarComputer from './components/pages/EliminarPc';

import EliminarUsuario from './components/pages/EliminarUsuario';
import EditarUsuario from './components/pages/EditarUsuario';
// import { useLocalStorage } from 'react-use';
import Navbar from './components/molecules/Navbar';

export const App = () => {
  // const [user, setUser] = useLocalStorage('token');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/') {
      navigate('/Login');
    }
  }, [navigate, location]);

  return (
    <>
      <Routes>
      {/* <Route element={<ProtectedRoute canActivate={user} redirectPath='/Login' />}> */}
      <Route path="/Usuarios" element={<HomeUsuario />} />
      <Route path="/Dispositivo" element={<HomeDispositivos />} />
        <Route path="/Departamentos" element={<HomeDepartamento />} />
        <Route path="/Computer" element={<HomeComputer />} />
        <Route path="/Historial" element={<HomeAuditoria />} />
      {/* </Route> */}

        {/* Navegaciones principales */}
        <Route path="/Login" element={<Login />} />

        {/* <Route path="/Login" render={()=> {
        return user ? null : <Login />
        }}/> */}

        <Route path="/Registro" element={<Registro />} />
        {/* <Route path="/Inicio" element={<HomePage />} /> */}
        <Route path="/Dispositivo" element={<HomeDispositivos />} />
        <Route path="/Departamentos" element={<HomeDepartamento />} />
        <Route path="/Computer" element={<HomeComputer />} />

        {/* Dispositivo */}
        <Route path="/AgregarDispositivo" element={<AgregarDispositivo />} />
        <Route path="/EditarDispositivo/:id" element={<EditarDispositivo />} />
        <Route path="/EliminarDispositivos/:id" element={<EliminarDispositvo />} />

        {/* Departamento */}
        <Route path="/AgregarDepartamento" element={<AgregarDepartamento />} />
        <Route path="/EditarDepartamento/:id" element={<EditarDepartamento />} />
        <Route path="/EliminarDepartamento/:id" element={<EliminarDepartamento />} />

        {/* Computer */}
        <Route path="/AgregarPc" element={<AgregarComputer />} />
        <Route path="/EditarPc/:id" element={<EditarComputer />} />
        <Route path="/EliminarPc/:id" element={<EliminarComputer />} />

        {/* Usuario */}
        <Route path="/EditarUsuario/:id" element={<EditarUsuario />} />
        <Route path="/EliminarUsuario/:id" element={<EliminarUsuario />} />

        {/* Otros */}
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
};

export default App;