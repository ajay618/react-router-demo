import About from './Container/About'
import Profile from './Container/Profile'
import { useState } from 'react';
function App() {
  const[state , setState] = useState('')
  let component 
  if (state === 'About'){
    component = <About/>
  }
  else if (state === 'Profile') {
    component = <Profile />
  } 

  return (
    <div className="App">
      <button onClick={ () => setState('About')}>About</button>
      <button onClick={ () => setState('Profile')}>Profile</button>
      {component}
    </div>
  );
}

export default App;
