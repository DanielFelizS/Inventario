import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import ProtectedRoute from './components/utils/ProtectedRouter';
import Login from './components/pages/User/Login';
import Registro from './components/pages/User/Registro';
import { 
  HomeDispositivos,
  HomeDepartamento,
  HomeComputer,
  HomeUsuario,
  HomeAuditoria,
  HomePage,
  AgregarDispositivo,
  EditarDispositivo,
  EliminarDispositvo,
  AgregarDepartamento,
  EditarDepartamento,
  EliminarDepartamento,
  AgregarComputer,
  EditarComputer,
  EliminarComputer,
  EliminarUsuario,
  EditarUsuario } from './components/pages/Page';

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
        {/* <Route element={<ProtectedRoute canActivate={user} redirectPath='/Login' />}>
        <Route path="/Usuarios" element={<HomeUsuario />} />
        <Route path="/Dispositivo" element={<HomeDispositivos />} />
          <Route path="/Departamentos" element={<HomeDepartamento />} />
          <Route path="/Computer" element={<HomeComputer />} />
          <Route path="/Historial" element={<HomeAuditoria />} />
        </Route> */}

        {/* Navegaciones principales */}
        <Route path="/Login" element={<Login />} />

        {/* <Route path="/Login" render={()=> {
        return user ? null : <Login />
        }}/> */}

        <Route path="/Registro" element={<Registro />} />
        <Route path="/Inicio" element={<HomePage />} />
        <Route path="/Dispositivo" element={<HomeDispositivos />} />
        <Route path="/Departamentos" element={<HomeDepartamento />} />
        <Route path="/Computer" element={<HomeComputer />} />
        <Route path="/Usuarios" element={<HomeUsuario />} />
        <Route path="/Historial" element={<HomeAuditoria />} />


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