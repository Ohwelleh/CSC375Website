import './App.css';
import Home from './Pages/Home'
import Header from './Header/Header'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Members from './Pages/Members';
import Documents from './Pages/Documents';
import Contact from './Pages/Contact';


function App() {
  return (
    <div>
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Members" component={Members} />
          <Route exact path="/Documents" component={Documents} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
