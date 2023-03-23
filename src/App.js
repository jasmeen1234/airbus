
import  React from "react";
// import {  Routes, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
// import {useNavigate} from 'react-router-dom';
// import "./styles/Styles.css"
import SearchLogin from './SearchLogin';
import Login from './Login'
import Payment from './Payment'
import BookingConfirm from './BookingConfirm'
import { Routes, Route } from 'react-router-dom';


function App(){
 
  return (
   <>
<div className="home">

      <Header/>
       <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/SearchLogin" element={<SearchLogin />}/> 
     <Route path="/Payment" element={<Payment/>}/>
     <Route path="/BookingConfirm" element={<BookingConfirm/>}/>
      </Routes> 
      
    </div>

   </>
  );
}

export default App; 
