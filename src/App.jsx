import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' index element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;