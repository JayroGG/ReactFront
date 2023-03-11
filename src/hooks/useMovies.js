import { getMovies } from '../services/getMovies'
import { useState, useEffect, useContext } from 'react'
import MovieContext from '../context/MovieContext'

export const useMovies = ({ url = `${process.env.REACT_APP_API_URL}/?&limit=2&offset=4` } = {}) => {
    const [loading, setLoading] = useState(false)
    const { movies, setMovies } = useContext(MovieContext)
    // const { pages } = JSON.parse(localStorage.getItem(url))
    useEffect(() => {
        setLoading(true)

        getMovies({ url }).then( //it can be just url due to same name variable
            data => {
                setMovies(data)
                setLoading(false)
            }
        )
    }, [url, setMovies])

    return { movies, loading }
}
