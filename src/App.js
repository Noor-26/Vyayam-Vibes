import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home/Home';
import Publications from './Components/Publications/Publications';
import Footer from './Components/Shared/Footer/Footer';
import Navber from './Components/Shared/Navber/Navber';
function App() {
  return (
    <div className="App">
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/publications' element={<Publications/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/classes' element={<Classes/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
