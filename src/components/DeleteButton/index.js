import { useState } from 'react'
import { useLocation } from 'wouter'
import './DeleteButton.css'

const DeleteButton = ({ id }) => {
  const [path, pushLocation] = useLocation()
  const [deleteError, setDeleteError] = useState(null)

  const handleClick = () => {
    alert('deleting')
    fetch(`http://localhost:4000/movies/${id}`, {
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