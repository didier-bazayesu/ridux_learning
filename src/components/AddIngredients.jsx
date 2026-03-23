import { addIngredient } from "../features/ingredient"
import { useDispatch } from "react-redux"
import { useState } from "react";
function AddIngredients() {
  const dispatch = useDispatch();
  const [formData ,setFormData] = useState("");

  return (
    <div>
        <h2>Add Ingredient used </h2>
        <input type="text" placeholder="eg: coconut"  onChange={(event)=> {setFormData(event.target.value)}}/>
        <button onClick={()=>{dispatch(addIngredient(formData))}}>Add Ingredient</button>

    </div>
  )
}

export default AddIngredients