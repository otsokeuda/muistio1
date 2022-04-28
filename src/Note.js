import React from 'react'; 
import Draggable from "react-draggable";
import { RiDragMove2Fill } from "react-icons/ri";
import { FiTrash2 } from "react-icons/fi";


const Note = (props) => {

    if (props.valmis === false ) {
 
return ( 
    
    <div className="Component"> 
    
    <Draggable handle=".handle">       
        <div>
        
            <div className="handle"><RiDragMove2Fill className='pic'/>
            
            <button className='remove' onClick={() => props.klikkaus(props.thId)}><FiTrash2 className='trash'/></button>
            
            </div>

            <textarea className='style'></textarea>
            
        </div>
    </Draggable>         
    
    </div>
    
  )}
}; 

export {Note};