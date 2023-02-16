import './index.css'
import { Link } from "wouter";

export function Home () {
  return <>
    <div className='left'>
      <button className='menu s1'><Link to='/all'>All</Link></button>
      <button className='menu s2'><Link to='/search/Avatar'>Avatar</Link></button>
      <button className='menu s3'><Link to='/search/The Matrix'>The Matrix</Link></button>
      <button className='menu s4'><Link to='/search/Kung Fu Panda'>Kung Fu Panda</Link></button>
      <button className='menu s4'><Link to='/save'>Upload a Movie</Link></button>
    </div>
  </>
}