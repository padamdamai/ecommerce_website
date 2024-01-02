import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { Company } from './components/Companies/Company';
import Residencies from './components/Residencies/Residencies';
import Values from './components/Value/Values';
import Contact from './components/Contact/Contact'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className = "Apps"> 
        <div>
          <div className='white-gradient'/>
          <Header/>
          {/* <Hero/> */}
        </div>
        {/* <Company/>
        <div className="residencies">
           <Residencies />
        </div>
        <Values/>
        <Contact/>
        <GetStarted/>
        <Footer/> */}
     </div>
  );
}

export default App;
