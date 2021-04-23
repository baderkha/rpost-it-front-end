import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { HandThumbsDown, HandThumbsUp, ChatLeftDotsFill } from 'react-bootstrap-icons';
import { useState } from 'react';
const PostCard = ({
    title,
    text,
    updatedAt,
    communityTitle,
    postedBy,
    commentCount = 0,
    likeCount = 0,
    dislikeCount = 0,
    onLikeClick,
    onDislikeClick,
    onCommentclick,
}) => {
    const [counters, setCounters] = useState({
        likeCount,
        dislikeCount,
        commentCount,
    });
    const onLikeClickChild = (ev) => {
        
        onLikeClick && onLikeClick(ev);
    }
    return (
        <Card
            className="text-center"
            style={{
                margin: '0.5em',
            }}
        >
            <Card.Header>
                <div
                    style={{
                        textAlign: 'left',
                        justifyContent: 'space-between',
                        display: 'flex',
                    }}
                >
                    <Card.Title>{communityTitle} </Card.Title>
                    <Card.Text> Posted By {postedBy}</Card.Text>
                </div>
            </Card.Header>

            <Card.Body>
                <Card.Title style={{ textAlign: 'left' }}>{title}</Card.Title>
                <br></br>
                <Card.Text style={{ textAlign: 'left' }}>{text}</Card.Text>
                <Card.Text
                    style={{
                        fontStyle: 'italic',
                        fontSize: '0.85em',
                    }}
                >
                    Updated {updatedAt}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                    }}
                >
                    <Button variant="primary" onClick={onLikeClick}>
                        {counters.likeCount + ' '}
                        <HandThumbsUp></HandThumbsUp>
                    </Button>
                    <Button variant="secondary" onClick={onCommentclick}>
                        <ChatLeftDotsFill></ChatLeftDotsFill> {counters.commentCount + ' '} Comments
                    </Button>
                    <Button variant="danger" onClick={onDislikeClick}>
                        {counters.dislikeCount + ' '}
                        <HandThumbsDown></HandThumbsDown>
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default PostCard;
