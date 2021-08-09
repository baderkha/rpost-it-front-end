import react from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import styles from './style.module.css'


const LoginView = () => {
    return (
        <div className={styles.Login}>
            <div className={styles.Login__container}>
                <h3>
                    Login
                </h3>
                <InputGroup size="md" className={`${styles.inputField} mb-3`}>
                    <FormControl placeholder='Username' aria-label="username" aria-describedby="inputGroup-sizing-md" />
                </InputGroup>
                <InputGroup size="md" className={`${styles.inputField} mb-3`}>
                    <FormControl placeholder='Password' type='password' aria-label="password" aria-describedby="inputGroup-sizing-md" />
                </InputGroup>
                
                <Button className={styles.button}>Login</Button>
                <a className={styles.forgotPass}>Forgot Password?</a>
            </div>  
            

        </div>
    )
}

export default LoginView