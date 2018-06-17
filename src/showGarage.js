import React, { Component } from 'react';
import './showGarage.css'
export default function ShowGarage(props){
    return(
       <div>
           <button className='button'
           onClick ={ () => props.garageCars()}>What's in the Garage?</button>
       </div>
    )
}




// newCustomer = everything from my input boxes added together to make an object.