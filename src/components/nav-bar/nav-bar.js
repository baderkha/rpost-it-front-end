import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import UserProfileDropDown from '../drop-down-items/user-profile/profile';
import LoginModal from '../LoginView/LoginView'
import { useState } from 'react';

const NavBar = ({ isLoggedIn, userName }) => {

const [showModal, setShowModal] = useState(false)

    return (
        <Navbar bg="dark" variant="dark" style={{
          marginBottom:"0px"
        }}>
            <Navbar.Brand href="#home">rpost-it</Navbar.Brand>
            <Form className="mx-2 my-auto d-inline w-100">
                <FormControl
                    type="text"
                    placeholder="Search ..."
                    className="form-control border border-right-0"
                />
            </Form>
            {isLoggedIn ? (
                <UserProfileDropDown userName={userName}></UserProfileDropDown>
            ) : (
              <Button onClick={()=>setShowModal(true)}>Login</Button>
            )}
            
            <LoginModal showModal={showModal} closeModal={()=>setShowModal(false)}/>
        </Navbar>
        
    );
};

export default NavBar;
