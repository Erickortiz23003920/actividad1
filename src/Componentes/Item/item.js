import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './item.scss'

function Item() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text className="fw-bold">Name</Card.Text>
                <Card.Text>
                    Realizar proyecto de desarrollo web
                </Card.Text>
                <Card.Text className="fw-bold">
                Description
                </Card.Text>
                <Card.Text>
                    Desarrollar y entregar proyecto de desarrollo de aplicaciones web
                </Card.Text>
                <Card.Text className="fw-bold">
                    Due date
                </Card.Text>
                <Card.Text>
                    26-05-2024
                </Card.Text>     
            </Card.Body>
            <Card.Body>
                <Button variant="info">Editar</Button>
                <Button variant="info">Eliminar</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;