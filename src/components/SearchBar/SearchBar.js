import './SearchBar.css'
import { useState } from 'react';
import { useLocation } from 'wouter';

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [path, pushLocation] = useLocation() 
    //Submit form handlerer
    const handleSubmit = evt => {
        evt.preventDefault()
        //Navegar a otra ruta
        pushLocation(`/search/${search}`)
    }
    //Change input handleler
    const handleChange = evt => {
        setSearch(evt.target.value)
    }
    return <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={search} placeholder='Search your movie...' className='search'/>
    </form>
}

export default SearchBar