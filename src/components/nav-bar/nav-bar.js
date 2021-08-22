import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import UserProfileDropDown from '../drop-down-items/user-profile/profile';
import LoginModal from '../LoginView/LoginView';
import { useState } from 'react';
import SearchBar from '../search-bar/SearchBar';

const NavBar = ({ isLoggedIn, userName }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Navbar
                bg="dark"
                variant="dark"
                style={{
                    marginBottom: '0px',
                }}
            >
                <Navbar.Brand href="#home">
                    <img src="logo.png" width={196}></img>
                </Navbar.Brand>
                <Form className="mx-2 my-auto d-inline w-100">
                    <SearchBar></SearchBar>
                </Form>
                {isLoggedIn ? (
                    <UserProfileDropDown userName={userName}></UserProfileDropDown>
                ) : (
                    <Button onClick={() => setShowModal(true)}>Login</Button>
                )}
            </Navbar>
            <LoginModal showModal={showModal} closeModal={() => setShowModal(false)} />;
        </div>
    );
};

export default NavBar;
