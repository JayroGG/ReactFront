import MovieCard from './MovieCard'
import { getMovies } from '../services/getMovies'
import { useState, useEffect} from 'react'
import './MovieList.css'

const MovieList = ({search}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies({ page: search }).then(moviesList => setMovies(moviesList))
    },[search])

    return (
        <div>
        {
            movies.map(({id, title, genre, release_date}) => {
                return <MovieCard 
                    key={id}
                    title={title}
                    genre={genre}
                    release_date={release_date}/>
            })
        }
        </div>
    )        
}
export default MovieList