import { useState, useEffect } from "react";

import BookCards from "./BookCards";
const ViewComics = ({ showLatest = true, id, detail }) => {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchbooks = async () => {
      
      try {
        const res = await fetch(`http://localhost:3369/comics/${id}`);
        const data = await res.json();
        setbooks(data);
        console.log("error fetching data, " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchbooks();
  }, []);

 

  return ( 
      <div>
        <h2>{showLatest ? "Latest Comic List" : "All books"}</h2>
        <div className={`comicGrid  singlebook`}>
          {loading ? (
            <h2>Now Loading...</h2>
          ) : (
            <> 
                <BookCards
                  
                  id={books.id}
                  ncbd={books.NCBD}
                  issues={books.issues}
                  detail={detail}
                /> 
            </>
          )}
        </div> 
      </div> 
  );
};

export default ViewComics;
