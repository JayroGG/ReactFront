export const getMovies = async ({ page }) => {
    const response = await fetch(`http://192.168.0.26:4000/movies/${page}`)
    const { data } = await response.json()
    return data

}