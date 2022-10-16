import './App.css';
import React, { useState} from 'react';
import Lifecycle from './Lifecycle';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [show, setShow] = useState(true);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      {/* <button onClick={()=>setShow(!show)}>unmount</button>
      {show ? <Lifecycle /> :""} */}
    </BrowserRouter>
  );
}

export default App;
