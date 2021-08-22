import { Card } from 'react-bootstrap';
import { Collection, Flag, Person } from 'react-bootstrap-icons';

const SearchResultCard = ({ isCommunnity = true, name, followerCount, linkHref }) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                width: '100%',
                marginLeft: '10px',
            }}
            onClick={() => (window.location.href = linkHref)}
        >
            <div
                style={{
                    height: '100%',
                }}
            >
                <div
                    style={{
                        marginLeft: '0px',
                        alignItems: 'center',
                    }}
                >
                    <p>
                        {isCommunnity ? <Flag></Flag> : <Person></Person>} {name}{' '}
                    </p>
                </div>
                <div
                    style={{
                        marginLeft: '20px',
                        fontSize: '0.75em',
                        width: '100%',
                        textAlign: 'start',
                    }}
                >
                    <p>
                        {followerCount} {isCommunnity ? 'members' : 'followers'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SearchResultCard;
