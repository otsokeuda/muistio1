import { useState } from 'react'; 
import { Button } from './Button.js'; 
import { Note } from './Note.js'; 
import './App.css'; 

function App() { 
  
  const [components, setComponents] = useState([""]); 
  
  function addComponent() { 
    
    setComponents([...components, ""]) 
    
  } 
  
  return ( 
    
    <div > 
    
      <Button onClick={addComponent} text="New note"/> 
      {components.map((item, i) => ( <Note text={item} /> ))} 
      
    </div> 
    
  ) 
  
} 

export default App;
