import logo from './logo.svg';
import './App.css';
import Estadisticas from './Components/Estatidisticas/Estadisticas';
import HeaderFoto from './Components/Header/HeaderFoto/HeaderFoto';
import Nav from './Components/Header/Nav/Nav';
import Footer from './Components/Footer/Footer';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Coh3 from './Components/Coh3/Coh3';
import Home from './Components/Home/Home';


function App() {
  return (
    <>
    <BrowserRouter>     
        <HeaderFoto/>
        <Nav/>
        <Routes>         
          <Route path='/' element={<Home/>} />
          <Route path='/Estadisticas/:juego' element={<Estadisticas/>} />     
          <Route path='/Estadisticas/Coh3' element={<Coh3/>} />  
          <Route path='/Estadisticas/Coh3/:modalidad' element={<Estadisticas/>} /> 
        </Routes>        
        <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App;
