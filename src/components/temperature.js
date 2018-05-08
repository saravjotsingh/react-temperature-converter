import React,{Component} from 'react';

const scaleName = {
    c : 'celsius',
    f : 'fahrenheit'
}

class Temperature extends Component{
    render(){
            const temp = this.props.temperature;
            
        return(
            <fieldset>
            <legend>Enter the values in {scaleName[this.props.scale]}</legend>    
            <input type="text"
                value={temp} onChange={(e)=>this.props.onTempChange(e.target.value)}
                />
            
            </fieldset>
        );
    }
}

export default Temperature;