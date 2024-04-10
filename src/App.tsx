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
import Navbar from './components/molecules/Navbar/Navbar';

export const App = () => {
  // const [user, setUser] = useLocalStorage('token');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/') {
      navigate('/login');
    }
  }, [navigate, location]);

  return (
    <>
      <Routes>

        {/* Navegaciones principales */}
        <Route path="/login" element={<Login />} />

        {/* <Route path="/Departamentos" element={user ? <HomeDepartamento /> : <Navigate to="/Login" />} /> */}

        <Route path="/registro" element={<Registro />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/dispositivos" element={<HomeDispositivos />} />
        <Route path="/departamentos" element={<HomeDepartamento />} />
        <Route path="/computer" element={<HomeComputer />} />
        <Route path="/usuarios" element={<HomeUsuario />} />
        <Route path="/historial" element={<HomeAuditoria />} />


        {/* Dispositivo */}
        <Route path="/agregarDispositivo" element={<AgregarDispositivo />} />
        <Route path="/editarDispositivo/:id" element={<EditarDispositivo />} />
        <Route path="/eliminarDispositivo/:id" element={<EliminarDispositvo />} />

        {/* Departamento */}
        <Route path="/agregarDepartamento" element={<AgregarDepartamento />} />
        <Route path="/editarDepartamento/:id" element={<EditarDepartamento />} />
        <Route path="/eliminarDepartamento/:id" element={<EliminarDepartamento />} />

        {/* Computer */}
        <Route path="/agregarPc" element={<AgregarComputer />} />
        <Route path="/editarPc/:id" element={<EditarComputer />} />
        <Route path="/eliminarPc/:id" element={<EliminarComputer />} />

        {/* Usuario */}
        <Route path="/editarUsuario/:id" element={<EditarUsuario />} />
        <Route path="/eliminarUsuario/:id" element={<EliminarUsuario />} />

        {/* Otros */}
        <Route path="/" element={<Navbar />} />
      </Routes>
    </>
  );
};

export default App;