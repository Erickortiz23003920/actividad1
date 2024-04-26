import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'

function item() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text className='fw-bold'>
                    Descripcion
                </Card.Text>
                <Card.Text>Hacer la tarea a tiempo</Card.Text>
                <Card.Text className='fw-bold'>
                    Due Date
                </Card.Text>
                <Card.Text>
                    26-04-2024
                </Card.Text>
                <Button variant="info">Remove</Button>
            </Card.Body>
        </Card>
    );
}

export default item;