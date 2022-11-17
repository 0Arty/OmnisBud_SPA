import React from 'react';
import s from './App.module.scss'
import AboutUS from './components/aboutUs/AboutUs';
import ContactMenu from './components/contactMenu/ContactMenu';
import Header from './components/header/Header';
import OurProjects from './components/ourProjects/ourProjects';


const App = () => {
  return (
    <div className={s.project}>
      <Header/>
      <AboutUS />
      <OurProjects />
      <ContactMenu />
    </div>
  );
}
export default App