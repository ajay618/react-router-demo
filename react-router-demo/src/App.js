import { useState } from 'react';
import About from './Container/About';
import Profile from './Container/Profile';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {AppContext} from './AppContext'
function App() {
  const navigate = useNavigate();
  const [state ] = useState(10)

  return (
    <div className="App">
      <button onClick={() => navigate('/about')}>About</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
     
      <AppContext.Provider value={{data:state , a : 100}}>
        <Routes>
         <Route path="/about" element={<About  />} />
         <Route path="/profile" element={<Profile data={state}/>} />
        </Routes>
      </AppContext.Provider>
      
    </div>
  );
}

export default App;
