
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const UserProfileDropDown = ({ userName }) => {
    return (
        <Nav className="mr-sm-2">
            <NavDropdown alignRight title={userName} >
                <NavDropdown.Item href="/example-app/section-a/">Section A</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
};

export default UserProfileDropDown;
