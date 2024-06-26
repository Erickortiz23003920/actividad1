import logo from './logo.svg'
import './App.scss';
import Item from './Componentes/Item/item';
import Formulario from './Componentes/Form/form';
import Menu from './Componentes/Menu/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col><Formulario></Formulario></Col>
          <Col>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
