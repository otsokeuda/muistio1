import React from 'react'; 
import Draggable from "react-draggable";
import { RiDragMove2Fill } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";


const Note = (props) => {
 
return ( 
    
    <div className="Component"> 
    
    <Draggable handle=".handle">       
        <div>
        
            <div className="handle"><RiDragMove2Fill className='pic'/>
            
            <button className='remove' onClick={props.onClick}><FiTrash2 className='trash'/></button>
            
            </div>

            <textarea className='style'></textarea>
            
        </div>
    </Draggable>         
    
    </div>
    
  );   
}; 

export {Note};