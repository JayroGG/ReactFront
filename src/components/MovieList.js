import './MovieList.css'
import { SearchResults } from './SearchResults'

const MovieList = ({ search } = {}) => {

    return <SearchResults search={search} />
}
export default MovieList