import React, { Component } from 'react';
import axios from 'axios';
import './reset.css';
import './App.css';
import ShowGarage from '../src/showGarage';
import ShowLot from '../src/showLot';
class App extends Component {
  constructor(){
    super();
    this.state = {
      garage:[],
      lot:[],
      input:''
    }
  }
////////////////////////METHODS//////////////////////////////

brokenCars=() =>{
  axios.get('/api/all_cars').then(res =>{
    this.setState({garage:res.data.})
  })
  .catch(err => {
    alert('Error')
  })
}

fixedCars=() =>{
  axios.get('/api/all_cars').then(res =>{
    this.setState({lot:res.data.fixedCars})
  })
  .catch(err => {
    alert('Error')
  })
}

  


  render() {
    let cars1 = this.state.garage.map((e,id) =>{
      return (
        <div key={id}>{e.name}: {e.make} {e.model}, {e.year} </div>
      )
    })
    let cars2 = this.state.lot.map((e,id) =>{
      return (
        <div key={id}>{e.name}: {e.make} {e.model}, {e.year} </div>
      )
    })


    return (
      <div className="App">
          
          <p className='welcome'>
            WELCOME TO THE SHOP
          </p>
      <div className="building">
        <div className='garage'>
          <div>
          <ShowGarage
            garageCars={this.brokenCars}/>
            {cars1}
          
          </div>
        </div>
        <div className='lot'>
        <ShowLot
            lotCars={this.fixedCars}/>
          {cars2}
        </div>
      </div>   
      
      </div>
    );
  }
}

export default App;
