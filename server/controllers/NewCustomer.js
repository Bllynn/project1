import React, {Component} from 'react';


class NewCustomer extends Component(props){
    constructor(){
        super(props);
        this.state={
            name:'',
            make:'',
            model:'',
            year:0
        }
    }
    ////////////////////////////METHODS/////////////////////////////////
newCustomer(val){
    this.setState({name:val})
}
newCustomer(val){
    this.setState({make:val})
}
newCustomer(val){
    this.setState({model:val})
}
newCustomer(val){
    this.setState({year:val})
}

    render(){
            return(
                <div className='customerBoxes'>
                    <input type="text" placeholder='Name'className='name'
                    value={this.target.value}/>
                    
                    <input type="text" placeholder='Make'className='make'
                    value={this.target.value}/>
                    
                    <input type="text" placeholder='Model'className='model'
                    value={this.target.value}/>

                    <input type="text" placeholder='Year'className='year'
                    value={this.target.value}/>

                    <button>New Customer</button>
            </div>
            )
    }
    






}
export default NewCustomer;