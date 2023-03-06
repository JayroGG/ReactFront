export const getMovies = async ({ search }) => {
    const URL = `http://localhost:4000/movies/${search}`
    const response = await fetch(URL)
    const { data } = await response.json()
    return data
}
