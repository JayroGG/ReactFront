import { lazy, Suspense } from 'react'
import { useMovies } from '../hooks/useMovies'
import LoadingSpinner from './Spinner/Spinner'
import PaginationButton from './PaginationButton'
import { useSelector } from 'react-redux'
const MovieCard = lazy(() => import('./MovieCard/MovieCard'))


const SearchResults = ({ params = '' } = {}) => {
    const { search } = params
    const BASE_URL = process.env.REACT_APP_API_URL
    const limit = 2
    const page = useSelector(state => state.pagination.page)
    const url = typeof (search) === 'undefined' ? `${BASE_URL}/?&limit=${limit}&offset=${page * limit}` : `${BASE_URL}/${search}?&limit=2&offset=0`
    
    const { movies, loading } = useMovies({ url: url })
    return <>
        <p>
            <PaginationButton mode={'prev'} />
            <PaginationButton mode={'next'} />
        </p>
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