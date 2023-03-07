import { useDispatch } from 'react-redux'
import { nextPage, prevPage } from "../../services/pageSlice";

export default function PaginationButton({ mode }) {
  const dispatch = useDispatch()
  const next = () => {
    dispatch(nextPage())
  }

  const prev = () => {
    dispatch(prevPage())
  }

  const handleClick = mode === 'prev' ? prev : next
  const label = mode === 'prev' ? 'Prev' : 'Next'

  return <>
    <button type='button' onClick={handleClick}>{label}</button>
  </>
}