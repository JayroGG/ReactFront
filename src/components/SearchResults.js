
import { useMovies } from '../hooks/useMovies'
import MovieCard from './MovieCard'

export const SearchResults = ({ params } = {}) => {
    const { search } = params
    const { movies, loading } = useMovies({ search })
    return <>
        {loading
            ? <span className='loading'>🫧Loading 🫧</span>
            : movies.map(({ id, title, genre, release_date }) => {
                return <MovieCard
                    key={id}
                    title={title}
                    genre={genre}
                    release_date={release_date} />
            })
        }
    </>
}