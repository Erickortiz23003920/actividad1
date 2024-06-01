import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { changeOption } from '../../reducers/optionsSlice';


function Menu() {
    const option = useSelector((state) => state.option.value);
    const dispatch = useDispatch();

    const changeOptionFunction = (selectedOption) => {
        dispatch(changeOption(selectedOption));
   }
    
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey="tasks" onClick={()=> changeOptionFunction("tasks")} active={option === "tasks"} >Task</Nav.Link>
                        <Nav.Link eventKey="goals" onClick={() => changeOptionFunction("goals")} active={option === "goals"} >Goals</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Menu;