import React from 'react'
import {Link} from 'react-router-dom'
import {FaEdit, FaArrowRight, FaArrowLeft} from 'react-icons/fa'

const BookCards = ({id, ncbd, issues, detail}) => {
 
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
      {detail=== undefined ? <Link to={`/view/${id}`} ><FaArrowRight className='detailIcon' title='More Info' /></Link>: <>Additional information shows up here...<Link to={`/allcomics`} ><FaArrowLeft className='detailIcon' title='Back home ' /></Link></>}
    </div>
  )
}

export default BookCards