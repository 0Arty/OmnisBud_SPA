import React from 'react';
import s from './App.module.scss'
import Header from './components/header/Header';


const App = () => {
  return (
    <div className={s.project}>
      <Header/>
    </div>
  );
}
export default App