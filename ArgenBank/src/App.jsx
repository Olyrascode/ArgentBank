
// App.js
import Home from './React/Pages/Home';
import SignIn from './React/Pages/SignIn';
import User from './React/Pages/User';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';


function App () {
  return (
    <Router>
      <Routes>
      <Route>
        <Route path="/" element={<Home />}/>
        <Route path="SignIn" element={<SignIn />}/>
        <Route path="User" element={<User />}/>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
