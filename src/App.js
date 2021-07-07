import './App.css';
import GeneralHeader from './components/GeneralHeader/GeneralHeader';
import Home from './components/Home/Home';
import About from './components/About/About';
import Interns from './components/Interns/Interns';
import Mission from './components/Mission/Mission';
import BecomeIntern from './components/BecomeIntern/BecomeIntern';
import GeneralFoooter from './components/GeneralFooter/GeneralFooter';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <GeneralHeader />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/interns" component={Interns} />
          <Route path="/mission" component={Mission} />
          <Route path="/becomeintern" component={BecomeIntern} />
        </Switch>
        <GeneralFoooter />
      </div>
    </Router>
  );
}


export default App;
