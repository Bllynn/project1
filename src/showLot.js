import React, { Component } from 'react';
import './showLot.css'
export default function ShowLot(props){
    console.log(props)
    return(
       <div>
           <button className='button'
           onClick ={ () => props.lotCars()}>Is my car ready?</button>
       </div>
    )
        
}




// newCustomer = everything from my input boxes added together to make an object.