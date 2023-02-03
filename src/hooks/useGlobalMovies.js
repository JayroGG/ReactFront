import { useContext } from "react"
import MovieContext from "../context/MovieContext"


export const useGlobalMovies = () => {
  const { movies } = useContext(MovieContext)
  return movies
}