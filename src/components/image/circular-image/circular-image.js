import Image from 'react-bootstrap/Image';
import styles from './style.module.css';

const CircularImage = ({ imageUrl }) => {
    console.log(styles);
    return (
        <div className={styles.imageContainer}>
            <Image
                className={styles.image}
                src={imageUrl}
                roundedCircle
            ></Image>
        </div>
    );
};

export default CircularImage;
