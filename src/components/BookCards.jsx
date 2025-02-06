import React from 'react'
import {Link} from 'react-router-dom'
import {FaEdit} from 'react-icons/fa'

const BookCards = ({id, ncbd, issues}) => {
 
  return (
    <div className='card'>
      New Comic Book Day:   {ncbd} <Link to={`/edit/${id}`} ><FaEdit className='editIcon' title='Edit Week' /></Link>
      <ul>
      { issues.map((issue)=>(
        <li key={issue.id}>
          <b><span>{issue.title}</span>  # <span>{issue.number}</span></b>   
          <br/>
          {issue.publisher}
          <br/>
        </li>
      ))

      }
      </ul>
    </div>
  )
}

export default BookCards