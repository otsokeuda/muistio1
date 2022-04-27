import { useState } from 'react'; 
import { Button } from './Button.js'; 
import { Note } from './Note.js'; 
import './App.css'; 

function App() { 
  
  const [components, setComponents] = useState([""]); 
 
  


  function addComponent() { 
    
    setComponents([...components, ""]) 
    
    console.log(components);
  }   

  const removeComponent = () => {

     
  
    
  }
  
  
  return ( 
    
    <div > 
    
      <Button  onClick={addComponent} text="New note"/> 
      
      {components.map((component, index) =>  ( <Note text={component} onClick={removeComponent(index)}/> ))} 
      
    </div> 
    
  ) 
  
} 

export default App;
