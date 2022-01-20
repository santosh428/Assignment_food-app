import './searchdish.css'
import { useState } from 'react';
import Renderdishes from './Renderdishes';

const Searchdish = () => {
    const [search,setSearch] = useState('')
    const [data,setData]  = useState([])

    const styles = {
      textAlign:"center",
      color:"orange",
      marginTop: "50px"
    }

    const submitHandle = e=>{
        e.preventDefault()
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
      setSearch('')
    }
   
  return (
  <div className='searchdish'>
      <form onSubmit={submitHandle}>
          <input type="text" val={search} placeholder='Search your fav Dish' onChange={e=>setSearch(e.target.value)}/>
          <button type='submit'>Search Dish</button>
      </form>
      <hr/>
      {data?.length > 0 ?<Renderdishes data={data}/> : <h1 style={styles}>"No dishes found"</h1>}
  </div>
  );
};

export default Searchdish;
