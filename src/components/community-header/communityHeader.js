import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import CircularImage from '../image/circular-image/circular-image';

const CommunityHeader = () => {
    return (
        <div>
            <Card>
                <div
                    style={{
                        overflow: 'hidden',
                        height: '100px',
                        width: 'inherit',
                        position: 'relative',
                        margin: '-1px',
                    }}
                >
                    <Image
                        style={{
                            width: '100%',
                            overflow: 'hidden',
                            marginTop: '0px',
                        }}
                        variant="top"
                        src="https://wallpaperaccess.com/full/32056.jpg"
                    />
                </div>
                <div
                    style={{
                        margin: '10px',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <CircularImage imageUrl="https://wallpaperaccess.com/full/32056.jpg"></CircularImage>

                    <div>
                        <Card.Title
                            style={{ textAlign: 'left', marginLeft: '10px' }}
                        >
                            Hello meow?
                        </Card.Title>
                        <Card.Text
                            style={{ textAlign: 'left', marginLeft: '10px' }}
                        >
                            r/MeowMeow
                        </Card.Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CommunityHeader;
