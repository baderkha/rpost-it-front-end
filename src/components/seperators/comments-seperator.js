import Card from 'react-bootstrap/Card';
const CommentSeperator = ({}) => {
    return (
        <Card
            className="text-center rounded-0"
            style={{
                marginLeft: '0.5em',
                marginRight: '0.5em',
            }}
            color="white"
        >
            <Card.Body>
                <div
                    style={{
                        textAlign: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}
                >
                    <Card.Title>Comments </Card.Title>

                </div>
            </Card.Body>

        </Card>
    );
};

export default CommentSeperator;
