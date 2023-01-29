import { getMovies } from '../services/getMovies'
import { useState, useEffect } from 'react'

export const useMovies = ({ search = '' }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMovies({ page: search }).then(
            moviesList => {
                setMovies(moviesList)
                setLoading(false)
            }
        )
    }, [search])
    return { movies, loading }
}
