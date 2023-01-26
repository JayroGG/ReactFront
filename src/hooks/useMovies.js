import { getMovies } from '../services/getMovies'
import { useState, useEffect} from 'react'

export const useMovies = ({search = ''}) => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovies({ page: search }).then(moviesList => setMovies(moviesList))
    },[search])
    return movies
}
