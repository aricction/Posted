import React, { useEffect, useState } from 'react';
import ExportBtn from './components/exportbtn';

const Tools = ({handleNameChange, handleMessage , handleColorChange }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [colorPairs, setColorPairs] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

useEffect(() => {
  async function fetchColoPairs(){
    const url = `${process.env.PUBLIC_URL}/colors.json`;
    try{
    let response = await fetch(url);
    if(!response.ok){
      throw new Error('error')
    }
    let data = await response.json()
    setColorPairs(data.color_pairs);
  } catch(error) {
      console.log(error);
  }
  }
  fetchColoPairs();
},[])

const handleColorSelect = (colors)=>{
  handleColorChange({target: {value: colors}})
  setIsOpen(false);
}

 
  return (
    <div className="lg:w-full md:w-1/4 p-4 border-b md:border-b-0 md:border-r border-gray-200">   
       <h2 className="text-xl font-bold mb-4">Tools</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name </label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-blue-300"
          onChange={handleNameChange} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message </label>
          <textarea rows="6" type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-blue-300"
          onChange={handleMessage}>
            </textarea>
        </div>
       
       <button id='dropdownDefaultButton' data-dropdown-toggle='dropdown' 
       className='w-full text-white bg-blue-700 p-4 font-bold' type='button'
       onClick={toggleDropdown} >select a color</button>

       <div
        id="dropdown"
        className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          
          {colorPairs.map((pair)=> (
               <li key={pair.name}>
               <span onClick={()=> handleColorSelect(pair.colors)} 
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  {pair.name}
                </span>
             
             </li>

          ))}
         
        
        </ul>
      </div>
        
       <ExportBtn/>

      </div>
    </div>
  );
};

export default Tools;
