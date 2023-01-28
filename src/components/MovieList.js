import MovieCard from './MovieCard'
import './MovieList.css'
import { useMovies } from '../hooks/useMovies'

const MovieList = ({ params } = {}) => {
    const { search } = params
    const {movies, loading} = useMovies({ search })
    return ( <>
        { loading
             ? <h1>Loading ...</h1>
             : movies.map(({ id, title, genre, release_date }) => {
                return <MovieCard
                    key={id}
                    title={title}
                    genre={genre}
                    release_date={release_date} />
               }) 
        }
    </>
    )
}
export default MovieList