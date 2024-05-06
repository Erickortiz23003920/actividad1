import logo from './logo.svg';
import './App.scss';
import Item from './Componentes/Item/item';
import Formulario from './Componentes/Item/form';
import Menu from './Componentes/Item/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Componentes/Item/addingMobileButton';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Container>
        <Row>
          <Col xs={0} md={0} className='d-none d-sm-block d-sm-none d-md-block '><Formulario></Formulario></Col>
          <Col xs={0} sm={0}> 
            
            <Row className='d-md-none'>
            <div className='bg-transparent overlapping-div ' >
            <AddingMobileButton className='float-left' />
            </div>
            </Row>
              <Row>
                <div>
                  <Item></Item>
                  <Item></Item>
                  <Item></Item>
                </div>
              </Row>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
