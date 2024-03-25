import { useEffect, useState } from "react"
import useFetch from "../components/useFetch"
import { useParams } from "react-router-dom"




const BooksDetails = () => {
    const [dataArray, setDataArray] = useState()
    const {id} = useParams()
    const book = useFetch()

    useEffect(() => {
        if(book){
            const data = book.filter(item => item.bookId === parseInt(id))
            setDataArray(data[0])
        }
    },[book,id])

    
  return (
    <div className="my-10 mx-6">
        <img src={dataArray.image} alt={dataArray.bookName} />
        <div>
            
        </div>
    </div>
  )
}

export default BooksDetails