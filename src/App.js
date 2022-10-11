import './App.css';
import Header from './Header';
import Buttons from './Buttons';
import Navbar from './Navbar';
import Map from './Map';
import Contact from './Contact'
import { useState } from 'react';



function App() {
  const [selection, setSelection] = useState('');
  const [navigation, setNavigation] = useState('MAIN');
  return (
    <>
      <Navbar setNavigation={setNavigation}></Navbar>
      {navigation === 'MAIN' &&
        <div id='container-home'>
          <Header></Header>
          <Map selection={selection}></Map>
          <Buttons setSelection={setSelection}></Buttons>
        </div>
      }
      {navigation === 'CONTACT' &&
        <Contact></Contact>
      }
    </>
  );
}

export default App;
