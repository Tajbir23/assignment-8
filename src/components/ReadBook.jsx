import { useEffect, useState } from "react";
import ReadBookCard from "./ReadBookCard";
import PropTypes from "prop-types"


const ReadBook = ({ sortId }) => {
  const [data, setData] = useState();

  
  

  useEffect(() => {
    const book = localStorage.getItem("readBook");
    const bookArray = JSON.parse(book);
    if (sortId) {
      if (sortId === "page") {
        const sorted = bookArray?.sort((a, b) => a.totalPages - b.totalPages);
        setData(sorted);
      }
      if (sortId === "rating") {
        const sorted = bookArray?.sort((a, b) => a.rating - b.rating);
        setData(sorted);
      }
      if (sortId === "year") {
        const sorted = bookArray?.sort(
          (a, b) => a.yearOfPublishing - b.yearOfPublishing
        );
        setData(sorted);
      }
    } else {
      setData(bookArray);
    }
  }, [ sortId]);

  // console.log(data)

  // useEffect(() => {
  //     if(sortId === "page"){
  //         bookArray.sort((a, b) => a.totalPages - b.totalPages)
  //     }
  // },[sortId, bookArray])
  return <div className="flex flex-col gap-5">{data?.map((items, index) => <ReadBookCard key={index} items={items} />)}</div>;
};
ReadBook.propTypes = {
  sortId: PropTypes.string,
};

export default ReadBook;
