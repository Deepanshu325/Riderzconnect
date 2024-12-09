import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import NavigationBar from './Component/NavigationBar';
import Breakfastrides from './Pages/Breakfastrides';
import Events from './Pages/Events';
import Expeditions from './Pages/Expeditions';
import Workshops from './Pages/Workshops';
import AdventurePark1 from './Pages/AdventurePark1';
import Mainhome from './Pages/Mainhome';
import ScrollToTop from './Component/Scrolltotop';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Home2/>}/>
        <Route path="/home" element={<Mainhome/>}/>
        <Route path="/breakfastrides" element={<Breakfastrides/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/expeditions" element={<Expeditions/>}/>
        <Route path="/workshops" element={<Workshops/>}/>
        <Route path="/adventure1" element={<AdventurePark1/>}/>
      </Routes>
    </div>
  );
}

export default App;
