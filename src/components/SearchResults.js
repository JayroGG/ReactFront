import { lazy, Suspense } from 'react'
import { useMovies } from '../hooks/useMovies'
import LoadingSpinner from './Spinner/Spinner'
const MovieCard = lazy(() => import('./MovieCard/MovieCard'))


const SearchResults = ({ params = '' }) => {
    const { search } = params
    const { movies, loading } = useMovies({ search })
    return <>
        {loading
            ? <LoadingSpinner />
            : movies.map(({ id, title, genre, release_date }) => {
                return <Suspense key={id}>
                    <MovieCard
                        key={id}
                        id={id}
                        title={title}
                        genre={genre}
                        release_date={release_date} />
                </Suspense>
            })
        }
    </>
}

export default SearchResults