import logo from './logo.svg';
import Login from './containers/Login'
import Registro from './containers/Registro'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/Registro" component={Registro} ></Route>
      </Switch>
    </BrowserRouter>
    //<Login></Login>
  );
}

export default App;
