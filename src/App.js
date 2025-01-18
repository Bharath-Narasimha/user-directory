import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import UserDetail from './pages/UserDetail';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <ThemeToggle />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:id" element={<UserDetail />} />
            </Routes>
          </Router>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;