import { Route, Routes } from 'react-router-dom';
import './App.css';
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
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
