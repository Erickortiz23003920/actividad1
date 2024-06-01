import './App.scss';
import Item from './Componentes/Item/item';
import Formulario from './Componentes/Item/form';
import Menu from './Componentes/Item/menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddingMobileButton from './Componentes/Item/addingMobileButton';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initAddTask } from "./reducers/taskSlice"

function App() {
  const tasks = useSelector((state) => state.task.value);
  const option = useSelector((state) => state.option.value);
  const goals = useSelector((state) => state.goals.value);
  const dispatch = useDispatch;

  function initFetch() {
    fetch("http://localhost:3001/tasks/getTasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "inventado1"
      }
    }).then((response) => {
      return response.json()
    }).then((response) => {
      response.map((task) => {
        console.log(task)
        dispatch((initAddTask(task)));
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    initFetch()
  }, []);

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
              <div className='scrolling'>
                {option === 'tasks' &&
                  tasks.map((task, index) => (
                    <Item key={index} name={task.name} description={task.description} dueDate={task.dueDate} id={task.id} />
                  ))
                }

                {option === 'goals' &&
                  goals.map((goal, index) => (
                   <Item key={index} name={goal.name} description={goal.description} dueDate={goal.dueDate} id={goal.id} />
                  ))
                }  
                </div>
              </Row>
          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
