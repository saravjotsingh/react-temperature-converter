import React from 'react';

const Boil = (props) =>{
    if(props.celsius>=100){
        return (<p>The water would boil</p>)
    }else{
        return(<p>The Water would not boil</p>)
    }
   
}
export default Boil;
