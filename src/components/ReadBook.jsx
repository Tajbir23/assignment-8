import { useEffect, useState } from "react";
import ReadBookCard from "./ReadBookCard";
import PropTypes from "prop-types"


const ReadBook = ({ sortId }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const book = localStorage.getItem("readBook");
    const bookArray = JSON.parse(book);
    if (sortId) {
        const sorted = bookArray?.sort((a, b) => a[sortId] - b[sortId]);
        setData(sorted);
    } else {
      setData(bookArray);
    }
  }, [ sortId]);


  return <div className="flex flex-col gap-5">{data?.map((items, index) => <ReadBookCard key={index} items={items} />)}</div>;
};
ReadBook.propTypes = {
  sortId: PropTypes.string,
};

export default ReadBook;
