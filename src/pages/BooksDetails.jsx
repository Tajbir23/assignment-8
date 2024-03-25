import { useEffect, useState } from "react";
import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";

const BooksDetails = () => {
  const [dataArray, setDataArray] = useState();
  const { id } = useParams();
  const book = useFetch();

  useEffect(() => {
    if (book) {
      const data = book.filter((item) => item.bookId === parseInt(id));
      setDataArray(data[0]);
    }
  }, [book, id]);

  const readBook = () => {
    
  }

  return (
    <div className="my-10 mx-6 flex sm:flex-row flex-col gap-8">
      <div className="sm:w-1/5 flex items-center justify-center p-10 bg-[#F3F3F3] rounded-xl">
      <img src={dataArray?.image}  alt={dataArray?.bookName} />
      </div>
      <div>
        <div>
          <h1 className="font-bold sm:text-4xl text-3xl">
            {dataArray?.bookName}
          </h1>
          <p className="text-gray-600 text-xl font-medium mt-5">
            By : {dataArray?.author}
          </p>
        </div>
        <hr className="border-b border-dashed my-5 w-full" />
        <h1 className="text-xl font-medium">{dataArray?.category}</h1>
        <hr className="border-b border-dashed my-5 w-full" />
        <p>
          <span className="font-semibold">Review : </span>
          {dataArray?.review}
        </p>
        <div className="mt-5">
        <span className="font-bold">tag </span>{dataArray?.tags?.map((tag, index) => (
            <span key={index} className="inline-block text-[#23BE0A] bg-[#23BE0A0D] text-sm px-2 py-1 rounded-full mr-2 mb-2 font-medium">#{tag}</span>
        ))}
        </div>
        <hr className="border-b border-dashed my-5 w-full" />

        <table className="table-auto  w-full">
         <tbody>
         <tr>
            <td>Number of pages</td>
            <td className="font-semibold">{dataArray?.totalPages}</td>
         </tr>
         <tr>
            <td>Publisher</td>
            <td className="font-semibold">{dataArray?.publisher}</td>
         </tr>
         <tr>
            <td>Year of Publishing</td>
            <td className="font-semibold">{dataArray?.yearOfPublishing}</td>
         </tr>
         <tr>
            <td>Rating</td>
            <td className="font-semibold">{dataArray?.rating}</td>
         </tr>
         </tbody>
        </table>
        <div className="mt-5 flex gap-2">
            <button onClick={() => } className="btn bg-[#50B1C9] hover:bg-transparent">Read</button>
            <button className="btn bg-[#50B1C9] hover:bg-transparent">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
