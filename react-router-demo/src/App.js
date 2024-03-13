import About from './Container/About';
import Profile from './Container/Profile';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
