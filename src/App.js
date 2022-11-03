import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [counter,setCounter]=useState(0);

  const [color, setColor] = useState('white');

  const handleCounter = color => {
    setColor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div className="container">
      <div className='text-center my-5'>
        
          <h1>Count</h1>
          <div className='my-5'>
            <h1>{counter}</h1>
            <button className='btn btn-dark mx-3' onClick = {
            ()=>{
              setCounter(counter+1)
              handleCounter('green');
            }
          }
          >+ </button>
          
          <button className='btn btn-dark mx-3' onClick={
            ()=>{  
                setCounter(counter-1)
                handleCounter('red');
          }
        }
          disabled={counter===0}
          >-</button>
          
          </div>
        </div>
      </div>
   

  );
}

export default App;
