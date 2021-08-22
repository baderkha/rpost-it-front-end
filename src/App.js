import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, RouteProps} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopicPage from './components/topic-page/topic-page'
import LoginView from './components/LoginView/LoginView'
import NavBar from './components/nav-bar/nav-bar';
import { useState } from 'react';


function App() {
    const [mainsState, setMainState] = useState({})
    return (
        <NavBar isLoggedIn={false} userName={"ahmad"}></NavBar>
        
    );
}

export default App;
