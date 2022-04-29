import { useState } from 'react'; 
import { Button } from './Button.js'; 
import { Note } from './Note.js'; 
import './App.css'; 

function App() { 
  
  const [components, setComponents] = useState([]); 
 
  


  function addComponent() { 
    
    setComponents([...components, {
      id: components.length + 1,
      description: "",
      completed: false
    }]) 
    
    console.log(components);
  }   

  function removeComponent(id) {

    const updated = components.map(tehtava => {
      if (tehtava.id === id) {
        return {...tehtava, completed: true}
      }
      return tehtava;
    });
    setComponents(updated);
    console.log(updated);
  }
  
  

  return ( 
    
    <div> 
    
      <Button  onClick={addComponent} text="New note"/> 
      <div   className="note">
      {components.map((tehtava) =>  ( <Note text={tehtava} klikkaus={removeComponent} thId={tehtava.id} valmis={tehtava.completed}/> ))} 
      </div>
    </div> 
    
  ) 
  
} 

export default App;
