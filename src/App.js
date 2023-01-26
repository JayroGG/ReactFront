import './App.css';
import MovieList from './components/MovieList'
import { useState } from 'react';

function App() {  
  const [keyword, setKeyword] = useState('')
//Change input handleler
  const handleChange = (evt) => {
    setKeyword(evt.target.value)
  }
  return (
    <div className="App">
        <h1>Movies: </h1>
          <input onChange={handleChange} type="text" value={keyword} placeholder='Search your movie...' />     
        <MovieList search={keyword}/>
       
    </div>
  )
}

export default App;
