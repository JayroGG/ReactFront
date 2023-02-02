import { getMovies } from '../services/getMovies'
import { useState, useEffect } from 'react'

export const useMovies = ({ search = '' }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    //Get the localStorage last search
    const searchThis = search || localStorage.getItem('lastsearch')

    //Filling the movies array with data from getMovies
    useEffect(() => {
        getMovies({ page: searchThis }).then(
            moviesList => {
                setMovies(moviesList)
                setLoading(false)
                //Set the localStorage last search
                localStorage.setItem('lastsearch', search)
            }
        )
    }, [searchThis, search])
    return { movies, loading }
}
