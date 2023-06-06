import './App.css';
import Chat from './componets/Chat';
import Register from './componets/Register';
import Login from './componets/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <h1>Don't Stop</h1>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
