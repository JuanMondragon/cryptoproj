import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './Componets/Header'
import Coinpage from './Pages/Coinpage';
import Homepage from './Pages/Homepage';


function App() {
  return (
    <BrowserRouter>
    <div class="bg-[#14161a] text-white h-screen">
      <Header />
      <Routes>
      <Route path ='/' element= {<Homepage/>} exact />
      <Route path ="/coins/:id" element= {<Coinpage/>} exact />

      </Routes>
      
      
    </div>
    </BrowserRouter>
  );
}

export default App;
