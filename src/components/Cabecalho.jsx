import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Cabecalho() {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
            <h2 class="titulo">Loja de Móveis</h2>
        </Container>
        
      </Navbar>
    </>
  );
}

export default Cabecalho;