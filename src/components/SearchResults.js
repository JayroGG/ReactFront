import { lazy, Suspense, useState } from 'react'
import { useMovies } from '../hooks/useMovies'
import LoadingSpinner from './Spinner/Spinner'
const MovieCard = lazy(() => import('./MovieCard/MovieCard'))


const SearchResults = ({ params = '' } = {}) => {
    const { search } = params
    const limit = 2    
    const [page, setPage] = useState(0);
    const handleNext = evt => {
        setPage(page+1)
    }

    const handlePrev = evt => {
        setPage(page-1)
    }
    const url = typeof (search) === 'undefined' ? `http://localhost:4000/movies/?&limit=${limit}&offset=${page * limit}` : `http://localhost:4000/movies/${search}?&limit=2&offset=0`

    const { movies, loading } = useMovies({ url: url })
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
        <button type='button' onClick={handlePrev}>Prev</button>
        <button type='button' onClick={handleNext}>Next</button>
    </>
}

export default SearchResults