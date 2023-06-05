import './App.css';
import Chat from './componets/Chat';
import Register from './componets/Register';
import Login from './componets/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {


  return (
    <div className="App">
    <h1>Don't Stop</h1>
    <Router>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/chat" component={Chat} />
    </Router>
  </div>
  );
  }

export default App;
