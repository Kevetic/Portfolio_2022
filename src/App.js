import { useState } from 'react';
import './App.scss';
import Home from './Components/Home';
import Intro from './Components/Intro';
import Nav from './Components/Nav'

function App() {
  const [display, setDisplay] = useState(<Intro/>)

  
  return (
    <div className={`App`}>
      {display}
      <Nav/>
    </div>
  );
}

export default App;
