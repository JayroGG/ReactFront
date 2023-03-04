import './MovieCard.css'
import { Link } from 'wouter'

const MovieCard = ({ id, title, genre, release_date }) => {
    const date = new Intl.DateTimeFormat('en-US').format(new Date(release_date))

    return <>
        <Link to={`/detail/${id}`} >
            <div className='card'>
                <span >Title: {title}</span>
                <span>Genre: {genre}</span>
                <span>Release Date: {date}</span>
            </div>
        </Link>
    </>
}

export default MovieCard