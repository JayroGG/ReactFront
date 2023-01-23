import './MovieCard.css'
import { useState } from 'react'

export const MovieCard = ({title, genre, release_date}) => {
    const [disabled, setDisabled] = useState(false)

    const handleClick = () => {
        setDisabled(!disabled)
    }
    const classesNames = disabled ? 'card disabled' : 'card'

    return <>
        <div onClick={handleClick} className={classesNames}>
            <span >Title: {title}</span>
            <span>Genre: {genre}</span>
            <span>Release Date: {release_date}</span>
        </div>
        
    </>
}