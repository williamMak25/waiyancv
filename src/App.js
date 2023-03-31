
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { AboutMe } from './pages/aboutMe';
import { Contact } from './pages/contact';
import { Footer } from './pages/footer';
import { Header } from './pages/header';
import { Home } from './pages/homePage';
import { Projects } from './pages/project';
import { Skill } from './pages/skill';
function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
