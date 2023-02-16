
import { useMovies } from '../hooks/useMovies'
import MovieCard from './MovieCard/MovieCard'
import LoadingSpinner from './Spinner/Spinner'

const SearchResults = ({ params = ''}) => {
    const { search } = params
    const { movies, loading } = useMovies({ search })
    return <>
        {loading
            ? <LoadingSpinner />
            : movies.map(({ id, title, genre, release_date }) => {
                return <MovieCard
                    key={id}
                    id = {id}
                    title={title}
                    genre={genre}
                    release_date={release_date} />
            })
        }
    </>
}

export default SearchResults