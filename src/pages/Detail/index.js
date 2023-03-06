import DeleteButton from "../../components/DeleteButton"
import MovieCard from "../../components/MovieCard/MovieCard"
import { useGlobalMovies } from "../../hooks/useGlobalMovies"

export default function Detail({ params }) {
    const movies = useGlobalMovies()
    const movie = movies.find(currentMovie => currentMovie.id.toString() === params.id)
    return <>
        <MovieCard {...movie} />
        <DeleteButton id={params.id}/>
    </>
}