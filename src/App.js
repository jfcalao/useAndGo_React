import Login from './containers/Login'
import Registro from './containers/Registro'
import Jobs from './containers/Jobs'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} ></Route>
        <Route exact path="/registro" component={Registro} ></Route>
        <Route exact path="/jobs" component={Jobs} ></Route>
      </Switch>
    </BrowserRouter>
    //<Login></Login>
  );
}

export default App;
