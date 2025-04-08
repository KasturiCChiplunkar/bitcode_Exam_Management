import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import StudentHome from './components/StudentHome';
import StudentFeedback from './components/student/StudentFeedback';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/signup" Component={SignUp}></Route>
          <Route path="/studenthome" Component={StudentHome}></Route>
          <Route path="/studentfeedback" Component={StudentFeedback}></Route>
          <Route path="/*" Component={Login}></Route>
        </Routes>
    </div>
  );
}

export default App;
