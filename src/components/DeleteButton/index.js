import { useState } from 'react'
import { useLocation } from 'wouter'
import './DeleteButton.css'

const DeleteButton = ({ id }) => {
  const BASE_URL = process.env.REACT_APP_API_URL
  const [path, pushLocation] = useLocation()
  const [deleteError, setDeleteError] = useState(null)

  const handleClick = () => {
    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      pushLocation('/all')
    }).catch( err => setDeleteError(err))
  }
  return <>
    { deleteError && <p>Error deleting item: {deleteError.message}</p>}
    <button onClick={handleClick} className='delete'>Delete</button>
  </>
}

export default DeleteButton