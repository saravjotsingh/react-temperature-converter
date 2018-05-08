import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Temperature from './components/temperature';
import Boil from './components/boil';

class App extends Component {
  state = {
      temperature:'',
      scale:'c'
  }
  
  toCelsius=(f)=>{
      return (f-32)*5/9;
  }
  
  
  toFahrenheit=(c)=>{
      return (c*9/5)+32;
  }
  
  try=(temp,convert)=>{
      const input = parseFloat(temp);
      
      if(Number.isNaN(input)){
          return '';
      }
      
      const output = convert(input);
      return output;
  }
  
  handleCelsius=(a)=>{
      this.setState({
          temperature:a,
          scale:'c'
      })
  }
  
  handleFarhn=(a)=>{
      this.setState({
          temperature:a,
          scale:'f'
      })
  }
  
    
    render() {
        const temp=this.state.temperature;
        const scale = this.state.scale;
        const celsius = scale === 'f'?this.try(temp,this.toCelsius) :temp ;
        const farhn = scale === 'c' ? this.try(temp,this.toFahrenheit) : temp;
    return (
    <div>
            <Temperature scale='c' temperature={celsius} onTempChange={this.handleCelsius}/>
            <Temperature scale='f' temperature={farhn} onTempChange={this.handleFarhn}/>
            <hr></hr>
            <Boil celsius={celsius}/>
        
    </div> 
    );
  }
}

export default App;
