import './randomdish.css'
import {useState} from 'react'

const Randomdish = () => {

  const [random, setRandom] = useState([])

  const submitHandle = e =>{
    e.preventDefault()
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRandom(data.meals));
  }
   
  return (
  <div className='random-dish'>
      <div className='random-button'>
         <button onClick={submitHandle}>Choose Random dish</button>
      </div>
      <div className='random-card'>
        {random.map(meal=>{
          return <div key={meal.strMeal}>
            <div className='card'>
            <img src={meal.strMealThumb} className='card-image'/>
            <h5>{meal.strMeal}</h5>
            </div>
            <div className='meal_instur'>
              <p>{meal.strInstructions}</p>
            </div>
          </div>
        })}
     
      </div>
       
  </div>
  );
};

export default Randomdish;
