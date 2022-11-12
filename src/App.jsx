import React from 'react';
import s from './App.module.scss'
import AboutUS from './components/aboutUs/AboutUs';
import Header from './components/header/Header';


const App = () => {
  return (
    <div className={s.project}>
      <Header/>
      <AboutUS />
    </div>
  );
}
export default App