import MovieCard from './MovieCard'
import './MovieList.css'
import { useMovies } from '../hooks/useMovies'

const MovieList = ({search}) => {
   const movies = useMovies({search})
    return (
        <>
        {
            movies.map(({id, title, genre, release_date}) => {
                return <MovieCard 
                    key={id}
                    title={title}
                    genre={genre}
                    release_date={release_date}/>
            })
        }
        </>
    )        
}
export default MovieList