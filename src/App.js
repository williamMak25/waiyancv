
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Contact } from './pages/contact';
import { Home } from './pages/homePage';
import { Projects } from './pages/project';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
