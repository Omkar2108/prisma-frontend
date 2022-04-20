import Login from './component/login';
import Register from './component/register';
import Home from './component/home';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import ForgotPassword from './component/forgotpassword';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}