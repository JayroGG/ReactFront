import { getMovies } from '../services/getMovies'
import { useState, useEffect, useContext } from 'react'
import MovieContext from '../context/MovieContext'

export const useMovies = ({ search = '' }) => {
    const [loading, setLoading] = useState(false)
    const { movies, setMovies } = useContext(MovieContext)
    
    useEffect(() => {
        setLoading(true)
        
        getMovies({ search: search }).then( //it can be just search due to same name variable
            moviesList => {
                setMovies(moviesList)
                setLoading(false)
            }
        )
    }, [search, setMovies])

    return { movies, loading }
}
