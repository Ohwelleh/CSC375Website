import './App.css';
import Home from './Pages/Home'
import Header from './Header/Header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Members from './Pages/Members';
import Documents from './Pages/Documents';
import Project from './Pages/Project';
import Client from './Pages/Client';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/CSC375Website" component={Home} />
            <Route exact path="/Members" component={Members} />
            <Route exact path="/Project" component={Project} />
            <Route exact path="/Client" component={Client} />
            <Route exact path="/Documents" component={Documents} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
