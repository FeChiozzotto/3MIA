import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavRodape() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="ms-auto">
          <p class="text-rodape">Felipe Chiozzotto-3°Mia</p>
        </Nav>
      </Container>
    </Navbar>
  </>
  );
}

export default NavRodape;