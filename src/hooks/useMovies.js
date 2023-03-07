import { getMovies } from '../services/getMovies'
import { useState, useEffect, useContext } from 'react'
import MovieContext from '../context/MovieContext'

export const useMovies = ({ url = `http://localhost:4000/movies/?&limit=2&offset=4` } = {}) => {
    const [loading, setLoading] = useState(false)
    const { movies, setMovies } = useContext(MovieContext)

    useEffect(() => {
        setLoading(true)

        getMovies({ url: url }).then( //it can be just search due to same name variable
            moviesList => {
                setMovies(moviesList)
                setLoading(false)
            }
        )
    }, [url, setMovies])

    return { movies, loading }
}
