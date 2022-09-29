import { Divider, Input, Button } from 'antd';
import { useState } from "react";

// Iteration 4
function AddFoodForm(props) {

  const [newFoodName, setNewFoodName] = useState('');
  const [newFoodImage, setNewFoodImage] = useState('');
  const [newFoodCalories, setNewFoodCalories] = useState(0);
  const [newFoodServings, setNewFoodServings] = useState(0);
  const [show, setShow] = useState(true);

  const updateFoodName = (event) => setNewFoodName(event.target.value);
  const updateFoodImage = (event) => setNewFoodImage(event.target.value);
  const updateFoodCalories = (event) => setNewFoodCalories(event.target.value);
  const updateFoodServings = (event) => setNewFoodServings(event.target.value); 

  const updateShow = () => setShow(prev => !prev); 


  const handleFormSubmit = (event) => {
    event.preventDefault();

    const myNewFoodObject = {
      name: newFoodName,
      calories: newFoodCalories,
      image: newFoodImage,
      servings: newFoodServings
    };

    props.addNewFood(myNewFoodObject);

  }
    if(show) {
      return (
        <form onSubmit={handleFormSubmit}>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input value={newFoodName} type="text" onChange={updateFoodName} />
    
          <label>Image</label>
          <Input value={newFoodImage} type="text" onChange={updateFoodImage}/>
          {/* render antd <Input /> type="text" here */}
    
          <label>Calories</label>
          <Input value={newFoodCalories} type="number" onChange={updateFoodCalories}/>
          {/* render antd <Input /> type="number" here */}
    
          <label>Servings</label>
          <Input value={newFoodServings} type="number" onChange={updateFoodServings}/>
          {/* render antd <Input /> type="number" here */}
    
          <button type="submit">Create</button><br></br>
          <button onClick={updateShow}>Hide form</button>
        </form>
      );
    }
    else {
      return (
        <button type="text" onClick={updateShow}>Add new Form</button>
      );
      
    }
  }
  


export default AddFoodForm;