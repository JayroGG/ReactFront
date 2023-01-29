import './MovieList.css'
import { SearchResults } from './SearchResults'

const MovieList = ({ params } = {}) => {

    return <SearchResults params={params} />
}
export default MovieList