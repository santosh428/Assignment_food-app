
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Searchdish from './components/Searchdish/Searchdish';
import Randomdish from './components/Randomdish/Randomdish';
import Header from './components/Header/Header';



function App() {
  return (
    <Router>
    <div className="App">
      
      <Header/>
     <Routes>
       <Route path="/" exact element={<Searchdish/>}/>
       <Route path="/randomdish" exact element={<Randomdish/>}/>
     </Routes>
     

    </div>
    </Router>
  );
}

export default App;
