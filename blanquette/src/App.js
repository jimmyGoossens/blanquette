import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import EventListScreen from './screens/EventListScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeScreen/>
        </Route>
        <Route path='/About'>
          <AboutScreen/>
        </Route>
        <Route path='/Events'>
          <EventListScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
