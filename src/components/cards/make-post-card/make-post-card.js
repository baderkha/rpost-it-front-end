import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Camera} from 'react-bootstrap-icons';
const MakePostCard = () => {
    return (
        <div
            style={{
                margin: '0.5em',
            }}
        >
            <Card>
                <Card.Body>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Form className="mx-2 my-auto d-inline w-100">
                            <FormControl
                                type="text"
                                placeholder="Create a Post ..."
                                className="form-control border"
                            />
                        </Form>
                        <Button variant="secondary"><Camera></Camera></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MakePostCard;
