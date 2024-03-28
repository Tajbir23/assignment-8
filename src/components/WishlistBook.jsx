import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WishlistBookCard from "./WishlistBookCard";


const WishlistBook = ({sortId}) => {
  const [data, setData] = useState();

  useEffect(() => {
    const book = localStorage.getItem("wishlist");
    const bookArray = JSON.parse(book);
    if (sortId) {
      const stored = bookArray?.sort((a, b) => b[sortId] - a[sortId]);
      setData(stored);
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