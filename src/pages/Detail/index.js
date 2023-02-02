import { useContext } from "react"
import MovieContext from "../../context/MovieContext"

function Detail ({params}) {
    const context = useContext(MovieContext)
    //console.log(params.id)
    console.log(context)
    return (<h1>Movie id: {params.id}</h1>)
}

export default Detail