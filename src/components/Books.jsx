// import { useEffect } from "react"
import Book from "./Book"
import useFetch from "./useFetch"



const Books = () => {

    const data = useFetch();

  return (
    <div className="my-10">
    <h1 className="text-3xl font-bold text-gray-900 text-center">Books</h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {data?.map((book) => <Book key={book.bookId} book={book} />)}
        </div>
        
    </div>
  )
}

export default Books