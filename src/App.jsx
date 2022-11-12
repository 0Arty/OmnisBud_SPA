import React from 'react';
import s from './App.module.scss'
import AboutUS from './components/aboutUs/AboutUs';
import Header from './components/header/Header';
import OurProjects from './components/ourProjects/ourProjects';


const App = () => {
  return (
    <div className={s.project}>
      <Header/>
      <AboutUS />
      <OurProjects />
    </div>
  );
}
export default App