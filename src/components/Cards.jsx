import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from '../assets/Sofá.jpg';

function Cards() {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt="PC" />
      <Card.Body>
        <Card.Title>Sofá Confort</Card.Title>
        <Card.Text>
        Perfeita para relaxar em frente à TV do home cinema ou na roda de bate papo com amigos e familiares na sala de estar, a linha Muy possui desenho livre de excessos e ótima relação custo x benefício
        </Card.Text>
        <Button variant="danger">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;