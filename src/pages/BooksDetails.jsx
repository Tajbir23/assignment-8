import { useEffect, useState } from "react";
import useFetch from "../components/useFetch";
import { useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const BooksDetails = () => {
  const [dataArray, setDataArray] = useState();
  const { id } = useParams();
  const book = useFetch();

//   console.log(dataArray)

  useEffect(() => {
    if (book) {
      const data = book.filter((item) => item.bookId === parseInt(id));
      setDataArray(data[0]);
    }
  }, [book, id]);

  const error = (text) => {
    toast.error(`book ${text} already added`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
  }

  const success = (text) => {
    toast.success(`book ${text} added successfully`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
  }

  const readBook = () => {
    const datas = localStorage.getItem('readBook')
      if (datas) {
        const data = JSON.parse(datas);
        if (data.find((item) => item.bookId === parseInt(id))) {
            error('read');
        } else {
          data.push(dataArray);
          localStorage.setItem('readBook', JSON.stringify(data));
          success('read');
        }
      } else {
        localStorage.setItem('readBook', JSON.stringify([dataArray]));
        success('read');
      }
    
  }

  const wishlistBook = () => {
    const datas = localStorage.getItem('wishlist');
    const readBookData = localStorage.getItem('readBook');
      
    const data = JSON.parse(readBookData);
    const wishlistData = JSON.parse(datas);

        if (data?.find((item) => item.bookId === parseInt(id))) {
            error('read');
        } else {
          if(datas){
            if(wishlistData.find((item) => item.bookId === parseInt(id))){
                error('wishlist');
            } else{
              wishlistData.push(dataArray);
              localStorage.setItem('wishlist', JSON.stringify(wishlistData));
              success('wishlist');
            }
          }else{
            localStorage.setItem('wishlist', JSON.stringify([dataArray]));
            success('wishlist');
          }
        }

        
  }

  return (
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition= {Bounce}
/>
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
            <button onClick={() => readBook()} className="btn bg-[#50B1C9] hover:bg-transparent">Read</button>
            <button onClick={() => wishlistBook()} className="btn bg-[#50B1C9] hover:bg-transparent">Wishlist</button>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default BooksDetails;
