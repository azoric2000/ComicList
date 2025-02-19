import React from 'react' 
import { useNavigate, useParams } from "react-router-dom";


import ViewComics from '../components/ViewComics'

const HomePage = () => {
    const { id } = useParams("");
  return (
   <> 
   <ViewComics id={id} detail={"more detail"} />
   </>
  )
}

export default HomePage