import { useState } from "react"


export default function BookCreate({onCreate}) {
   const [title,setTitle] = useState('')
    const formOnSubmit=(event) => {
        event.preventDefault()
        onCreate(title)
        setTitle("")
    }
    const changeHandle =(event) => {
        setTitle(event.target.value)
        
    }

  return (
    <div className="fixed bottom-0 w-full bg-green-200 shadow-md p-4 border-t-2 border-green-300 bg-green-100">
        <form onSubmit={formOnSubmit}>
     <p className="text-lg font-sans"> Add a Book </p>
     <p className="mx-2 p-2">Title</p>
     <input onChange={changeHandle} 
     id="booktitle" 
     className="border-2 border-black border-solid mx-2 my-2 p-4 rounded-lg"
     value={title} />
     <br />
     <button type="submit"
     className="font-bold border-2 bg-gray-100 border-black border-solid mx-2 my-2 p-4 rounded-lg">Add a Book</button>
     </form>
    </div>
  )
}