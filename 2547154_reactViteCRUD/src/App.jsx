import { useState } from "react"
import BookCreate from "./components/BookCreate.jsx"
import BookList from "./components/BookList.jsx"

export default function App() {
  const[books,setBooks] =useState([])

  const editBookById=(id,newtitle) => {
    const updatedBooks = books.map((book) =>{
      if(book.id === id){
        return {...book, title:newtitle}
      }
      return book

    })
    setBooks(updatedBooks)
  }

  const deleteBookById=(id) =>{
    const updatedBooks = books.filter((book)=>{
      return book.id !== id
    })
    setBooks(updatedBooks)

  }

  const bookCreate = (title) => {
    const updatedBooks=[...books,
      {id:Math.round(Math.random()*9999),title:title}]
    setBooks(updatedBooks)
    //console.log(books);
    
    
  }
  return (
    <div>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={bookCreate} />
      
    </div>
  )
}