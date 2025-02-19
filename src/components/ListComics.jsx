import { useState, useEffect } from "react";

import BookCards from "./BookCards";
const ListComics = ({ showLatest = false }) => {
  const [books, setbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchbooks = async () => {
      const apiURL = "http://localhost:3369/comics/";
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setbooks(data);
        console.log("error fetching data, " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchbooks();
  }, []);

  let singleBook = '';
  let start = 0;
  let max = books.length - 1;
  let i;
  if (showLatest) {
    start = max;
    singleBook='singlebook'
  }

  let bookList = books;
  if (showLatest) {
    bookList = [books[max]];
  }

  return ( 
      <div>
        <h2>{showLatest ? "Latest Comic List" : "All books"}</h2>
        <div className={`comicGrid ${singleBook}`}>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              {bookList.map((book, index) => (
                <BookCards
                  key={index}
                  id={book.id}
                  ncbd={book.NCBD}
                  issues={book.issues}
                />
              ))}
            </>
          )}
        </div>
      </div> 
  );
};

export default ListComics;
