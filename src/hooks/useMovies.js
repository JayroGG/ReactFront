import { getMovies } from '../services/getMovies'
import { useState, useEffect, useContext } from 'react'
import MovieContext from '../context/MovieContext'

export const useMovies = ({ search = '' }) => {
    const [loading, setLoading] = useState(false)
    const { movies, setMovies } = useContext(MovieContext)
    
    useEffect(() => {
        //Get the localStorage last search
        setLoading(true)
        const searchThis = search || localStorage.getItem('lastsearch')
        
        getMovies({ page: searchThis }).then(
            moviesList => {
                setMovies(moviesList)
                setLoading(false)
                //Set the localStorage last search
                localStorage.setItem('lastsearch', search)
            }
        )
    }, [search, setMovies])

    return { movies, loading }
}
