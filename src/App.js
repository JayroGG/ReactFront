import './App.css';
import { Route, Link } from 'wouter';
// Pages
import { Home } from './pages/Home';
import { Save } from './pages/Save';
import { Detail } from './pages/Detail';
// Components
import MovieList from './components/MovieList/MovieList'
import SearchBar from './components/SearchBar/SearchBar';
// Contexts
import { MovieContextProvider } from './context/MovieContext';


function App() {
  return (
    <MovieContextProvider>
      <div className="App">
        <Link to='/' ><h1>Movies</h1></Link>
        <SearchBar />
        <Route path="/" component={Home} />
        <Route path="/search/" component={Home} />
        <Route path="/all" component={MovieList} />
        <Route path="/search/:search" component={MovieList} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/save' component={Save} />
      </div>
    </MovieContextProvider>
  )
}

export default App;
