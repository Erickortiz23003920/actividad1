import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal } from '../../reducers/goalSlice';
import { addTask } from '../../reducers/taskSlice';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.scss';

function Formulario() {
    const inputRefName = useRef();
    const inputRefDescription = useRef();
    const inputRefDueDate = useRef();

    const dispatch = useDispatch();
    const option = useSelector((state) => state.option.value); // Obtener la opción seleccionada

    const addItem = (e) => {
        e.preventDefault();

        const newItem = {
            name: inputRefName.current.value,
            description: inputRefDescription.current.value,
            dueDate: inputRefDueDate.current.value,
        };

        // Agregar tarea u objetivo según la opción seleccionada
        if (option === 'tasks') {
            dispatch(addTask(newItem));
        } else if (option === 'goals') {
            dispatch(addGoal(newItem));
        }

        // Limpiar los campos después de agregar
        inputRefName.current.value = '';
        inputRefDescription.current.value = '';
        inputRefDueDate.current.value = '';
    };

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={inputRefName} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} ref={inputRefDescription} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="date" ref={inputRefDueDate} />
            </Form.Group>

            <Button variant="info" type="submit" onClick={addItem}>
                {option === 'tasks' ? 'ADD Task' : 'ADD Goal'}
            </Button>
        </Form>
    );
}

export default Formulario;
