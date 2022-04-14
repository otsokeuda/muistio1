import React from 'react'; 

const Button = (props) => { 
  
  return ( 
    <div   className="Component">
        <button className="AddButton" onClick={props.onClick}>{props.text}</button> 
    </div>
  ); 
  
} 

export {Button};