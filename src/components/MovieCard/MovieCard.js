import './MovieCard.css'
import { Link } from 'wouter'
import { useState } from 'react';

const MovieCard = ({ id, title, genre, release_date }) => {
    const [smaller, setSmaller] = useState('');
    const date = new Intl.DateTimeFormat('en-US').format(new Date(release_date))

    const handleLeave = () => {
        setSmaller('smaller')
    }

    return <>
        <Link to={`/detail/${id}`} >
            <div className={smaller +' card'} onMouseLeave={handleLeave}>
                <span >Title: {title}</span>
                <span>Genre: {genre}</span>
                <span>Release Date: {date}</span>
            </div>
        </Link>
    </>
}

export default MovieCard