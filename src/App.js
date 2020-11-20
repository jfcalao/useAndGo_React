import Login from './containers/Login'
import Registro from './containers/Registro'
import Jobs from './containers/Jobs'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={Login} ></Route>
        <Route exact path="/Registro" component={Registro} ></Route>
        <Route exact path="/Jobs" component={Jobs} ></Route>
      </Switch>
    </BrowserRouter>
    //<Login></Login>
  );
}

export default App;
