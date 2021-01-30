import Game from './components/Game';
import './App.css';
import Formularz from "./components/Formularz";
import Welcome from "./components/Welcome";
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom';


function App() {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/"> <Redirect to="/welcome"/> </Route>
                <Route path="/welcome"> <Welcome/> </Route>
                <Route path="/registration"> <Formularz/> </Route>
                <Route path="/game"> <Game/> </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default App;
