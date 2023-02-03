import { useContext } from "react"
import MovieContext from "../context/MovieContext"


export const useGlobalMovies = () => {
  const { setMovies } = useContext(MovieContext)
  return setMovies
}