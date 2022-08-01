import './App.scss';
import Footer from './Components/Footer';
import Nav from './Components/Nav'
import Loader from './Components/Loader.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [display, setDisplay] = useState(<Loader/>)

  useEffect(() => {
    setTimeout(() => {
      setDisplay(<Nav/>)
    }, 7000);
  }, [display])
  
  return (
    <div className={`App`}>
      {display}
      {/* <Loader/> */}
      <Footer/>
    </div>
  );
}

export default App;
