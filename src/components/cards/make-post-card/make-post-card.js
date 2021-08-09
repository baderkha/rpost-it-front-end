import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Camera } from 'react-bootstrap-icons';
import CircularImage from '../../image/circular-image/circular-image';
import styles from './style.module.css';

const MakePostCard = ({ avatar }) => {
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
                        <CircularImage imageUrl="https://wallpaperaccess.com/full/32056.jpg"></CircularImage>
                        <Form
                            className="mx-2 my-auto d-inline"
                            style={{ width: '75%' }}
                        >
                            <FormControl
                                type="text"
                                placeholder="Create a Post ..."
                                className="form-control border"
                            />
                        </Form>
                        <Button variant="secondary">
                            <Camera></Camera>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MakePostCard;
