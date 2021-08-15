import react, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import styles from './style.module.css'
import Modal from 'react-bootstrap/Modal'
import {AuthApi} from '../../api/postrealm/auth'

const LoginModal = ({showModal, closeModal}) => {
const [userName, setUsername] = useState('')
const [pass, setPass] = useState('')

const handleClose = () => {
    closeModal()
}

const handleEnter = (ev) => {
    if(ev.key === 'Enter' && isValidEmail(userName)) {
        // handleAuth()
        console.log('handle enter')
    }
}

const handleAuth = (userName, pass) => {
    AuthApi.login(userName, pass)
}

const isValidEmail = (email) => {
    const result = /\S+@\S+\.\S+/.test(email)
     return result
 };
    return (
        <div className={styles.Login}>
            <Modal show={showModal} onHide={handleClose} centered className={styles.container}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                    <InputGroup size="md" className={`${styles.inputField} mb-3`}>
                        <FormControl onChange={(ev) => setUsername(ev.target.value)} placeholder='Username' aria-label="username" aria-describedby="inputGroup-sizing-md" />
                    </InputGroup>
                    <InputGroup size="md" className={`${styles.inputField} mb-3`}>
                        <FormControl onKeyUp={handleEnter} onChange={(ev) => setPass(ev.target.value)} placeholder='Password' type='password' aria-label="password" aria-describedby="inputGroup-sizing-md" />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer >
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose} disabled={!isValidEmail(userName)}>
                            Login
                        </Button>
                </Modal.Footer>
                
                
            </Modal>
        </div>
    )
}

export default LoginModal