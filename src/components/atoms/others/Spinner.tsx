import Spinner from 'react-bootstrap/Spinner';

export function DataSpinner() {
  return (
    <Spinner animation="border" role="status" variant='info'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}