import { useContext } from "react"
import MovieCard from "../../components/MovieCard/MovieCard"
import MovieContext from "../../context/MovieContext"

function Detail({ params }) {
    const { movies } = useContext(MovieContext)
    const movie = movies.find(currentMovie => currentMovie.id.toString() === params.id)
    return <MovieCard {...movie} />
}

export default Detail