import { useState } from 'react'
import { useLocation } from 'wouter'
import './Form.css'

const Form = () => {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [uploadError, setUploadError] = useState(null)
  const BASE_URL = process.env.REACT_APP_API_URL

  const [path, pushLocation] = useLocation()

  const handleTitle = evt => {
    setTitle(evt.target.value)
  }

  const handleGenre = evt => {
    setGenre(evt.target.value)
  }

  const handleReleaseDate = evt => {
    setReleaseDate(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const movie = {
      title: title,
      genre: genre,
      release_date: releaseDate
    }
    //data => pushLocation(`/detail/${data.body.movie.id}`)
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    }).then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      pushLocation('/all')
    }).catch(err => setUploadError(err))
  }
  return <form onSubmit={handleSubmit} className='wrapper'>
    {uploadError && <p>Error uploading item: {uploadError.message}</p>}
    <label className='label'>Title</label>
    <input type="text" value={title} onChange={handleTitle} className='form' />
    <label className='label'>Genre</label>
    <input type="text" value={genre} onChange={handleGenre} className='form' />
    <label className='label'>Release Date</label>
    <input type="text" value={releaseDate} onChange={handleReleaseDate} className='form' />
    <button className='submit'>Submit</button>
  </form>
}

export default Form