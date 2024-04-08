import Spinner from 'react-bootstrap/Spinner';

export default function DataSpinner() {
  return (
    <Spinner animation="border" role="status" variant='info'>
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
  );
}