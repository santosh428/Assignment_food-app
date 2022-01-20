import './searchdish.css'


const Renderdishes = ({data}) => {
  return (
      <div className='render-list'>
          {data.map(meal=>{
            return <div className='dish-grid'>
              <div className='dish-card' key={meal.strMeal}>
                <img src={meal.strMealThumb}/>
                <p>{meal.strMeal}</p>
              </div>
            </div>
          })}
      </div>
  )
};

export default Renderdishes;
