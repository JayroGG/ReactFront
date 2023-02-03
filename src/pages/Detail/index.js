import MovieCard from "../../components/MovieCard/MovieCard"
import { useGlobalMovies } from "../../hooks/useGlobalMovies"

function Detail({ params }) {
    const movies = useGlobalMovies()
    const movie = movies.find(currentMovie => currentMovie.id.toString() === params.id)
    return <MovieCard {...movie} />
}

export default Detail