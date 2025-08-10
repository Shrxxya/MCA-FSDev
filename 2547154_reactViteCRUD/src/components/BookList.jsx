import BookShow from './BookShow'
export default function BookList({books, onDelete , onEdit})
 {
  const renderedBooks = books.map((book)=>{
   return <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
  })
  return (
    <div className='flex flex-wrap pb-40'>
      {renderedBooks}
      
      
    </div>
  )
}