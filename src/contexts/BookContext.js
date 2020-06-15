import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
const [ books, setBooks ] = useState([
        { title: 'The Compound Effect ', author: "Tonny Ribins", id: 1}
    ])

   const addBooks = ( title, author ) => {
      setBooks([...books, { title, author, id: 2 }]);
    }

   const delBooks = (id) => {
       setBooks(books.filter( book => book.id !== id))
   }

    return(
      <BookContext.Provider value={{books, addBooks, delBooks}}>
          {props.children}
      </BookContext.Provider>
    )
}

export default BookContextProvider;