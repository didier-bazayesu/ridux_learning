import React, { useState } from 'react';

function ToggleButtons() {

 const initialColors = Array(5).fill('gray');  
 const [buttonColors, setButtonColors] = useState(initialColors);
 function handleToggle (getIndex ){

    setButtonColors(prev => [...prev.map((element, index)=> {
         if(index == getIndex && element == 'gray') return element  = 'blue'
         if(index == getIndex && element == 'blue') return element = 'gray'
         else return element
    })])
    console.log(buttonColors)
   
 }
 
 
 return (
   <div>
     {buttonColors.map((color, index) => (
       <button
         key={index}
         style={{ backgroundColor: color, padding: '10px', margin: '5px', border: 'none' }}
         onClick={() => handleToggle (index) }
       >
         Button {index + 1}
       </button>
     ))}
   </div>
	);
}

export default ToggleButtons;

