import './App.css';
import { MovieList } from './components/MovieList'

function App() {  
  return (
    <div className="App">
        <h1>Movies: </h1>
        <MovieList search=''/>
       
    </div>
  )
}

export default App;
