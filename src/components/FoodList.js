import { Divider, Input} from 'antd';
import FoodBox from './FoodBox';
import foods from '../foods.json';
import { useState } from 'react';
import AddFoodForm from './AddFoodForm';

function FoodList() {

    const [myFoodArray, setMyFoodArray] = useState(foods);

    const [myFilteredArray, setMyFilteredArray] = useState(foods);

    const deleteFood = (name) => {
        const filtered = myFoodArray.filter(food => food.name !== name);
        setMyFoodArray(filtered);
        setMyFilteredArray(filtered);
    }

    const addNewFood = (newFoodObject) => {
        const copy = [...myFoodArray];
        copy.push(newFoodObject);
        setMyFoodArray(copy);
        setMyFilteredArray(copy);
    }

    const handleSearch = (event) => {
        const filtered = myFoodArray.filter(element => {
            return element.name.includes(event.target.value);
        })
        setMyFilteredArray(filtered);
    }

    if(myFilteredArray.length) {
        return(
            <div>
            <div>
          <AddFoodForm addNewFood = {addNewFood}/>
          </div>
          <div>
            <Divider>Search Food</Divider>
            <Input type="text" onChange={handleSearch}/>
          </div>
    
            <Divider>Food List</Divider>
        <div className='food-list'>
        
          {myFilteredArray.map(singleFood => {
            return (
              <FoodBox food={singleFood} delete={deleteFood}/>
            )
          })}
          </div>
          </div>
        );
    }
    else {
        return (
            <div>
            <div>
          <AddFoodForm addNewFood = {addNewFood}/>
          </div>
          <div>
            <Divider>Search Food</Divider>
            <Input type="text" onChange={handleSearch}/>
          </div>
    
            <Divider>Food List</Divider>
                <h1 style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}>Oops, no more content to show.</h1>
          </div>
        );
    }
}

export default FoodList;