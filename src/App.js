import './App.css';
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar';
import { Route } from 'wouter';

function App() {
  return (
    <div className="App">
      <h1>Movies: </h1>
      <SearchBar />
      <Route path="/search/:search" component={MovieList} />
    </div>
  )
}

export default App;
