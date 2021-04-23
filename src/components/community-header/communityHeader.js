import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

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
                        margin:'-1px'
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
                    <div
                        style={{
                            overflow: 'hidden',
                            height: '72px',
                            width: '72px',
                            position: 'relative',
                        }}
                    >
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                overflow: 'hidden',
                            }}
                            src="https://wallpaperaccess.com/full/32056.jpg"
                            roundedCircle
                        ></Image>
                    </div>
                    <div>
                        <Card.Title style={{ textAlign: 'left', marginLeft: '10px' }}>
                            Hello meow?
                        </Card.Title>
                        <Card.Text style={{ textAlign: 'left', marginLeft: '10px' }}>
                            r/MeowMeow
                        </Card.Text>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CommunityHeader;
