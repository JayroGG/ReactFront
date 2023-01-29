import './App.css';
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar';
import { Route, Link } from 'wouter';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Link to='/'><h1>Movies</h1></Link>
      <SearchBar />
      <Route path="/" component={Home} />
      <Route path="/search/" component={Home} />
      <Route path="/all" component={MovieList} />
      <Route path="/search/:search" component={MovieList} />

    </div>
  )
}

export default App;
