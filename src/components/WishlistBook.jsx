import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WishlistBookCard from "./WishlistBookCard";


const WishlistBook = ({sortId}) => {
  const [data, setData] = useState();

  
  

  useEffect(() => {
    const book = localStorage.getItem("wishlist");
    const bookArray = JSON.parse(book);
    if (sortId) {
      if (sortId === "page") {
        const sorted = bookArray?.sort((a, b) => a?.totalPages - b?.totalPages);
        setData(sorted);
      }
      if (sortId === "rating") {
        const sorted = bookArray?.sort((a, b) => a?.rating - b?.rating);
        setData(sorted);
      }
      if (sortId === "year") {
        const sorted = bookArray?.sort(
          (a, b) => a?.yearOfPublishing - b?.yearOfPublishing
        );
        setData(sorted);
      }
    } else {
      setData(bookArray);
    }
  }, [ sortId]);
  return (
    <div className="flex flex-col gap-5">{data?.map((items, index) => <WishlistBookCard key={index} items={items} />)}</div>
  )
}

WishlistBook.propTypes = {
  sortId: PropTypes.string,
};
export default WishlistBook