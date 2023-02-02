import './MovieCard.css'
import { useState } from 'react'
import { Link } from 'wouter'

const MovieCard = ({ id, title, genre, release_date }) => {
    const [bigger, setBigger] = useState('')
    const [smaller, setSmaller] = useState('')
    const date = new Intl.DateTimeFormat('en-US').format(new Date(release_date))

    const makeBigger = () => {
        setBigger('bigger')
        setSmaller('')
    }
    
    const makeSmaller = () => {
        setSmaller(' smaller')
        setBigger('')
    }

    return <>
        <Link to={`/detail/${id}`} >
            <div onMouseEnter={makeBigger} onMouseLeave={makeSmaller} className={bigger+smaller+' card'}>
                <span >Title: {title}</span>
                <span>Genre: {genre}</span>
                <span>Release Date: {date}</span>
            </div>
        </Link>
    </>
}

export default MovieCard