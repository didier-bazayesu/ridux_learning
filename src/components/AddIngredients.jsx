import { addIngredient } from "../features/ingredient";
import { useDispatch } from "react-redux";
import { useState } from "react";

function AddIngredients() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState("");

  return (
    <div className="card-container">
      <h2>Ingredient List</h2>
      <div className="handle-flex-row">
        <input 
          type="text" 
          placeholder="eg: coconut" 
          value={formData}
          onChange={(event) => setFormData(event.target.value)}
        />
        <button 
          className="add-button" // You can add a button style in CSS later
          onClick={() => {
            if(formData) {
              dispatch(addIngredient(formData));
              setFormData(""); // Clear input after adding
            }
          }}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  );
}

export default AddIngredients;