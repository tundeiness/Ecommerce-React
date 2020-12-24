
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing';

const App = () => (
  <Router>
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </>
  </Router>
);

export default App;
