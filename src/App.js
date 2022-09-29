import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import Example from './components/Example';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider} from 'antd';
import FoodList from './components/FoodList';


function App() {
  return (
    <div className='container'>
      
      
      <FoodList/>
      {/* {foods.map(singleFood => {
        return (
          <div className='food-example'>
            <h1>{singleFood.name}</h1>
            <img src={singleFood.image} alt="foodImage"></img>
          </div>
          
        );
      })} */}
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
