import './App.css';
import MovieList from './components/MovieList/MovieList'
import SearchBar from './components/SearchBar/SearchBar';
import { Route, Link } from 'wouter';
import { Home } from './pages/Home';
import MovieContext from './context/MovieContext';
import Detail from './pages/Detail';

function App() {
  return (
    <MovieContext.Provider value={{}}>
      <div className="App">
        <Link to='/' ><h1>Movies</h1></Link>
        <SearchBar />
        <Route path="/" component={Home} />
        <Route path="/search/" component={Home} />
        <Route path="/all" component={MovieList} />
        <Route path="/search/:search" component={MovieList} />
        <Route path='/detail/:id' component={Detail} />
      </div>
    </MovieContext.Provider>
  )
}

export default App;
