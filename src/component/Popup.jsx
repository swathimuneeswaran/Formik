import React from 'react';
import "./style.css";

const Popup = (props) => {
  return (
    <>
    <div className="Popup">
        <div className="Popup-Inner">
            <h1 className='close' onClick={props.onClick}>X</h1>
            <br />
            <br />
            <center>
                <span className='tick'>&#10003;</span>
            </center>
            <h2 className='text2'>You have<br></br>
             added the book</h2>
        </div>
    </div>
    </>
  )
}

export default Popup;
