import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavigationBar from './Component/NavigationBar';
import Breakfastrides from './Pages/Breakfastrides';
import Events from './Pages/Events';
import Expeditions from './Pages/Expeditions';
import Workshops from './Pages/Workshops';
import AdventurePark1 from './Pages/AdventurePark1';
import Home3 from './Pages/Home3';
import ScrollToTop from './Component/Scrolltotop';
import ClickToTop from './Component/ClicktoTop';
import Aboutinfo from './Pages/Aboutinfo';
import Clubhistory from './Pages/Clubhistory';
import OurMISSIONS from './Pages/OurMISSIONS';
import OurMembers from './Pages/OurMembers';
import GridStyle from './Pages/GridStyle';
import News from './Pages/News';
import GridStylecard from './Pages/GridStylecard';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <ScrollToTop/>
      <ClickToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
       
        <Route path="/home" element={<Home3/>}/>
        <Route path="/breakfastrides" element={<Breakfastrides/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/expeditions" element={<Expeditions/>}/>
        <Route path="/workshops" element={<Workshops/>}/>
        <Route path="/adventure1" element={<AdventurePark1/>}/>
        <Route path="about-club" element={<Aboutinfo/>}/>
        <Route path="about-club/club-info" element={<Aboutinfo/>}/>
        <Route path="about-club/club-history" element={<Clubhistory/>}/>
        <Route path="about-club/our-mission" element={<OurMISSIONS/>}/>
        <Route path="about-club/our-members" element={<OurMembers/>}/>
        <Route path="rides" element={<GridStyle/>}/>
        <Route path="rides/grid-style" element={<GridStyle/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="news/single-news" element={<News/>}/>
        <Route path="rides/grid-style/grid" element={<GridStylecard/>}/>

      </Routes>
    </div>
  );
}

export default App;
