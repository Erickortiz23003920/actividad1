import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeGoal } from '../../reducers/goalSlice';
import { removeTask } from '../../reducers/taskSlice'; // Importa la acción para eliminar tareas
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss';


function Item(props) {
    const dispatch = useDispatch();
    const option = useSelector((state) => state.option.value)

    const handleRemoveItem = () => {
        if (option === 'goal') {
            dispatch(removeGoal(props.id)); // Elimina objetivo
        } else if (option === 'task') {
            dispatch(removeTask(props.id)); // Elimina tarea
        }
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text className="fw-bold">Name</Card.Text>
                <Card.Text>{props.name}</Card.Text>
                <Card.Text className="fw-bold">Description</Card.Text>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text className="fw-bold">Due date</Card.Text>
                <Card.Text>{props.dueDate}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Button variant="info">Editar</Button>
                <Button onClick={handleRemoveItem} variant="info">
                    Eliminar {/* El texto del botón se actualizará automáticamente */}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Item;
