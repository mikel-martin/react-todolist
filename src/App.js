import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
import './App.css';
import Layout from './components/Layout';

// npm install -g json-server
// Start json-server: json-server --watch data/db.json --port 8000

function App() {

  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path='/'>
            <Notes/>
          </Route>
          <Route exact path='/create'>
            <Create/>
          </Route>
        </Layout>
      </Switch>
    </Router>
  );

}

export default App;
