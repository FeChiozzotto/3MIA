import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavRodape() {
  return (
    <Container variant="dark" bg="dark">
      <Navbar variant="dark" bg="dark">
          <Navbar.Brand href="/">Clique e volte ao topo</Navbar.Brand>
          <h1 class="text-rodape">Felipe Chiozzotto-3°Mia</h1>
          <p class="text">© 2023 Copyright: Felipe Chiozzotto</p>
      </Navbar>
    </Container>
  );
}

export default NavRodape;