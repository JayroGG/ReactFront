import { getMovies } from '../services/getMovies'
import { useState, useEffect, useContext } from 'react'
import MovieContext from '../context/MovieContext'

export const useMovies = ({ search = '' }) => {
    const [loading, setLoading] = useState(false)
    const { movies, setMovies } = useContext(MovieContext)
    
    useEffect(() => {
        setLoading(true)
        
        getMovies({ page: search }).then(
            moviesList => {
                setMovies(moviesList)
                setLoading(false)
            }
        )
    }, [search, setMovies])

    return { movies, loading }
}
