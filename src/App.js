import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect, RouteProps} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopicPage from './components/topic-page/topic-page'
import LoginView from './components/LoginView/LoginView'


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/login' exact component={LoginView}/>
                <Route path='/topic' exact component={TopicPage}/>
            </Switch>
            
        </Router>
        
    );
}

export default App;
