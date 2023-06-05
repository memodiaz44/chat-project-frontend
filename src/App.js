import './App.css';
import Chat from './componets/Chat';
import Register from './componets/Register';
import Login from './componets/Login';
import { Route,  Routes  } from 'react-router-dom';


function App() {


  return (
    <div className="App">
    <h1>Don't Stop</h1>
    <Routes>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/chat" component={Chat} />
      </Routes>
  </div>
  );
  }

export default App;
