import SearchResults from '../SearchResults'
import store from '../../services/pageStore'
import { Provider } from 'react-redux'

const MovieList = ({ params } = {}) => {

    return <Provider store={store}>
        <SearchResults params={params} />
    </Provider>
}
export default MovieList