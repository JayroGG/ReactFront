import './App.css';
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar';
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <Link to='/'><h1>Movies:</h1></Link>
      <SearchBar />
      <Route path="/" component={MovieList} />
      <Route path="/search/:search" component={MovieList} />
    </div>
  )
}

export default App;
