import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulario() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Due Date</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Text className="text-muted">
              
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit" >
                ADD GOALS
            </Button>
        </Form>
    );
}

export default Formulario;