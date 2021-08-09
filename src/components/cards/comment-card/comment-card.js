import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from './style.module.css';
import {
    HandThumbsDown,
    HandThumbsUp,
    ChatLeftDotsFill,
    Arrow90degLeft,
} from 'react-bootstrap-icons';
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
            className={styles.commentCardContainer}
        >
            <Card.Body>
                <div className={styles.commentCardBody}>
                    <Card.Text>{postedBy} </Card.Text>
                    <Card.Text>{updatedAt} </Card.Text>
                </div>

                <br></br>
                <Card.Text className={styles.commentCardText}>{text}</Card.Text>
            </Card.Body>

            <Card.Footer className={styles.cardFooter}>
                <div className={styles.footerButtonContainer}>
                    <Button
                        variant="outline-secondary"
                        onClick={onCommentclick}
                    >
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
