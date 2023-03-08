import './App.css';
import { Route, Link } from 'wouter';
import { lazy, Suspense } from 'react'
// Contexts
import { MovieContextProvider } from './context/MovieContext';
// Pages
const Home = lazy(() => import('./pages/Home'))
const Save = lazy(() => import('./pages/Save'))
const Detail = lazy(() => import('./pages/Detail'))
// Components
const MovieList = lazy(() => import('./components/MovieList/MovieList'))
const SearchBar = lazy(() => import('./components/SearchBar/SearchBar'))



function App() {
  return (
    <MovieContextProvider>
      <div className="App">
        <Link to='/' ><h4>Movies</h4></Link>
        <SearchBar />
        <Suspense fallback={<p>Loading ...</p>}>
          <Route path="/" component={Home} />
          <Route path="/search/" component={Home} />
          <Route path="/all" component={MovieList} />
          <Route path="/search/:search" component={MovieList} />
          <Route path='/detail/:id' component={Detail} />
          <Route path='/save' component={Save} />
        </Suspense>
      </div>
    </MovieContextProvider>
  )
}

export default App;
