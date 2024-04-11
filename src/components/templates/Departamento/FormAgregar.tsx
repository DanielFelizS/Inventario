import {
  useState,
  Form, BtnAction,
  FormInput } from '../Dependencies.js';
import { NavegarProps } from '../../../types.js';
import { DepartamentAddState } from './DepartmentTypes.js';
import usePost from '../../utils/CustomHooks/usePost.js';

export const DepartmentAdd = ({ Navegar }: NavegarProps) => {
  const [nombreDepartamento, setNombreDepartamento] = useState<DepartamentAddState["nombre"]>("");
  const [descripcion, setDescripcion] = useState<DepartamentAddState["descripción"]>("");
  const [fecha, setFecha] = useState<DepartamentAddState["fecha_creacion"]>("");
  const [encargado, setEncargado] = useState<DepartamentAddState["encargado"]>("");
  const [data, setData] = useState<DepartamentAddState["departamentoData"]>([]);

  const { msg, agregarDatos } = usePost("departamento");


  const handleAgregarDatos = async () => {
    const postData = {
      nombre: nombreDepartamento,
      descripción: descripcion,
      fecha_creacion: fecha,
      encargado: encargado,
    };
    agregarDatos(postData);
  };

  return (
    <>
      <Form className="FormData">
        <Form.Group className="mb-3" controlId="">
          <FormInput
            InputTitle="Nombre del departamento"
            InputType="text"
            InputName="nombre"
            Inputvalue={nombreDepartamento}
            InputChange={(e) => setNombreDepartamento(e.target.value)}
          />

          <FormInput
            InputTitle="Descripción (Objetivo del departamento)"
            InputType="text"
            InputName="descripción"
            Inputvalue={descripcion}
            InputChange={(e) => setDescripcion(e.target.value)}
          />

          <FormInput
            InputTitle="Encargado del departamento"
            InputType="text"
            InputName="encargado"
            Inputvalue={encargado}
            InputChange={(e) => setEncargado(e.target.value)}
          />
          <FormInput
            InputTitle="Fecha de creación"
            InputType="date"
            InputName="fecha_creacion"
            Inputvalue={fecha}
            InputChange={(e) => setFecha(e.target.value.toString())}
          />
        </Form.Group>
        <BtnAction btnlabel="Cancelar" btncolor="danger" action={Navegar} />
        <BtnAction
          btnlabel="Guardar"
          btncolor="success"
          action={handleAgregarDatos}
        />
      </Form>
      { msg && <span style={{color: "red"}}>{msg}</span> }
    </>
  );
};

export default DepartmentAdd;
