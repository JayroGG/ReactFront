export const getMovies = async({page}) =>{
    const response = await fetch(`http://localhost:4000/movies/${page}`)
    const {data} = await response.json()
    return data

}