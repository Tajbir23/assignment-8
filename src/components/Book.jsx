import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
const Book = ({ book }) => {
  
  return (
    <NavLink to={`/bookdetails/${book.bookId}`} className="p-5 border rounded-xl hover:shadow-2xl duration-500 ease-in-out">
      <div className="bg-[#F3F3F3] rounded-xl flex items-center justify-center py-10">
        <img src={book.image} className="w-28 h-52" alt={book.bookName} />
      </div>
      <div>
        <div className="mt-5">
            {book.tags.map((tag, index) => (
              <span key={index} className="inline-block text-[#23BE0A] bg-[#23BE0A0D] text-sm px-2 py-1 rounded-full mr-2 mb-2 font-medium">{tag}</span>
            ))}
        </div>
        <div className="flex flex-col gap-2">
            <h1 className=" text-2xl font-bold">{book.bookName}</h1>
            <p className="font-medium">By : {book.author}</p>
        </div>
        <hr className="border-b border-dashed my-5 flex" />
        <div className="flex flex-col flex-grow">
            <div className="flex justify-between">
            <p>{book.category}</p>
            <div className="flex items-center gap-2">
                {book.rating}
                <CiStar />
            </div>
            </div>
        </div>
      </div>
    </NavLink>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    bookName: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
};

export default Book;
