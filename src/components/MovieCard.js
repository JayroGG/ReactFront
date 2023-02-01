import './MovieCard.css'
import { useState } from 'react'

const MovieCard = ({title, genre, release_date}) => {
    const [disabled, setDisabled] = useState(false)
    const date = new Intl.DateTimeFormat('en-US').format(new Date(release_date))
    const handleClick = () => {
        setDisabled(!disabled)
    }
    const classesNames = disabled ? 'card disabled' : 'card'

    return <>
        <div onClick={handleClick} className={classesNames}>
            <span >Title: {title}</span>
            <span>Genre: {genre}</span>
            <span>Release Date: {date}</span>
        </div>
    </>
}

export default MovieCard