import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/BookingConfirm.css"

const BookingConfirm = () => {
    const navigate=useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem("name")){
          console.log("Already Login")
          navigate("/Search")
        };
      },[])
    return (
        <div className='thanks-container'>
            <h2>Thank You!! 😊😊 </h2>
            <h3>Your Booking is Confirmed 🤩🤩</h3>
            <button
            onClick={()=>navigate("/Search")}
            >Go To Home Page</button>
        </div>
    )
}

export default BookingConfirm;