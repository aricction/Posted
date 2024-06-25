import logo from './logo.svg';
import './App.css';
import Tools from './Tools';
import Canvas from './Canvas';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const snippet = `write something...`;

  const [name, setName] = useState('your name');
  const [message, setMessage] = useState(snippet);
  const [color ,setColor] = useState('#1e1e1e');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleMessage = (e)=> {
    setMessage(e.target.value);

  }
  const handleColorChange = (e)=>{
    setColor(e.target.value);
  }
  return (
    <div className='h-screen flex flex-col'>
       <Navbar/>
    <div className="flex flex-col md:flex-row sm:flex-col h-screen w-screen">
      <div className="md:w-1/4 w-full mt-10">
        <Tools 
        handleNameChange={handleNameChange} 
        handleMessage={handleMessage}
        handleColorChange={handleColorChange}
        handleColorSelect={handleColorChange}
        />
      </div>
      <div className="md:w-3/4 sm:w-1/2 h-3/4 w-full">
        <Canvas name={name} message={message} color={color} />
      </div>
    </div>
    </div>
  );
}

export default App;
