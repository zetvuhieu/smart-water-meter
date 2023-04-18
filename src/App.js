import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import User from './pages/User';
import Statistical from './pages/Statistical';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/statistical" element={<Statistical />} />
                    <Route path="/user" element={<User />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
