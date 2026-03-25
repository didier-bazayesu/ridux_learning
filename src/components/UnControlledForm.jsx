import React, { Profiler } from 'react'
import { useMemo } from 'react';
import { useRef } from 'react'


function UnControlledForm() {
  const inputRef = useRef(null);
   function handleSubmit(e){
    e.preventDefault();
    alert(inputRef.current.value);
   }
   function handleClickParagraph(e){
      alert('Paragraph clicked!');
      e.stopPropagation();
      // Stop the event from bubbling up to the form
   }
   function handleClickDiv(e){
    alert('Div clicked!');
   }
  return (

    <div onClick={handleClickDiv}>
        <p onClick={handleClickParagraph}>Click me!</p>
      <form action="" onSubmit={handleSubmit}>
        <input type='text' ref={inputRef}/>
        
        <button type='submit'>Submit</button>
      </form>

    </div>
  
  )
}

export default UnControlledForm