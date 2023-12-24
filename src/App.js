import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import { Company } from './components/Companies/Company';
import Residencies from './components/Residencies/Residencies';
function App() {
  return (
    <div className = "Apps"> 
        <div>
          <div className='white-gradient'/>
          <Header/>
          <Hero/>
        </div>
        <Company/>
        <div className="residencies">
           <Residencies />
        </div>
     </div>
  );
}

export default App;
