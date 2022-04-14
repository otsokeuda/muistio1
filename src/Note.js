import React from 'react'; 
import Draggable from "react-draggable";
import { RiDragMove2Fill } from "react-icons/ri";

const Note = (props) => {
return ( 
    
    <div   className="Component"> 
    
    <Draggable>        
        <div>
            <textarea className='style'></textarea>
        </div>
    </Draggable>         
    
    </div>
    
  );   
}; 

export {Note};