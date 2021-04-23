import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { HandThumbsDown, HandThumbsUp, ChatLeftDotsFill,Arrow90degLeft } from 'react-bootstrap-icons';
import { useState } from 'react';
const CommentCard = ({
    text,
    updatedAt,
    postedBy,
    onLikeClick,
    onDislikeClick,
    onCommentclick,
    likeCount,
    dislikeCount,
    commentCount,
}) => {
    const [counters, setCounters] = useState({
        likeCount,
        dislikeCount,
        commentCount,
    });
    const onLikeClickChild = (ev) => {
        onLikeClick && onLikeClick(ev);
    };
    return (
        <Card
            className="text-center rounded-0"
            style={{
                marginLeft : '0.5em',
                marginRight : '0.5em',
                marginTop:'-0.2em'
            }}
        >
            <Card.Body>
                <div
                    style={{
                        textAlign: 'left',
                        justifyContent: 'space-between',
                        display: 'flex',
                    }}
                >
                    <Card.Text>{postedBy} </Card.Text>
                    <Card.Text>{updatedAt} </Card.Text>
                </div>

                <br></br>
                <Card.Text style={{ textAlign: 'left' }}>{text}</Card.Text>
            </Card.Body>

            <Card.Footer className="text-muted" style={{
                background:"white",
                border:"0px"
            }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                    }}
                >
                   
                    <Button variant="outline-secondary" onClick={onCommentclick}>
                        <Arrow90degLeft height="2em"></Arrow90degLeft> Reply
                    </Button>
                    <Button variant="outline-primary" onClick={onLikeClick}>
                        {counters.likeCount + ' '}
                        <HandThumbsUp></HandThumbsUp>
                    </Button>
                    <Button variant="outline-danger" onClick={onDislikeClick}>
                        {counters.dislikeCount + ' '}
                        <HandThumbsDown></HandThumbsDown>
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CommentCard;
