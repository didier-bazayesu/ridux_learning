// import React, { useState, useEffect } from 'react';

// function NameTransfer() {
//   const initialNames = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
//   const [names, setNames] = useState(initialNames);
//   const [ transferredName , setTransferredName] = useState([]);
//   let  [count,setCount ] = useState(0) 

//   useEffect(()=>{
//    const interval =    setInterval(() => {
//              setTransferredName(prev=> [...prev, names[count]]);
             
//              if(names.length== transferredName.length) clearInterval(interval)
//       }, 2000);

     

//   },[])

//   console.log(transferredName)

//   return (
//     <div>
//       <h3>Original Names</h3>
      
//       <ul  style={{backgroundColor:"red"}}>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>

//       <h3>Transferred Names</h3>
//       <ul  style={{backgroundColor:"green"}}>
//         {transferredName.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default NameTransfer;
import React from 'react'

function TransferedNames() {
  return (
    <div>TransferedNames</div>
  )
}

export default TransferedNames