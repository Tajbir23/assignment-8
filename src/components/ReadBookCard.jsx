import { CiLocationOn } from "react-icons/ci";
import PropTypes from "prop-types";
import { MdOutlineGroup, MdOutlineFindInPage } from "react-icons/md";
import { NavLink } from "react-router-dom";
const ReadBookCard = ({items}) => {
  return (
    <div className="flex sm:flex-row flex-col p-5 gap-5 border rounded-xl hover:bg-gray-100 hover:shadow-2xl duration-500 cursor-pointer">
        <div className="bg-[#1313130D] flex items-center justify-center p-5 rounded-xl">
            <img className="h-full w-32" src={items.image} alt="book" />
        </div>
        <div>
            <div>
                <h1 className="text-2xl font-bold">{items.bookName}</h1>
                <p className="text-gray-600 text-xl font-medium mt-5">
                    By : {items.author}
                </p>
            </div>
            <div className="flex sm:flex-row flex-col justify-center gap-2 mt-5">
                <span>tag</span>
                {items.tags.map((tag, index) => (
                    <span key={index} className="inline-block text-[#23BE0A] bg-[#23BE0A0D] text-sm px-2 py-1 rounded-full mr-2 mb-2 font-medium">#{tag}</span>
                ))}
                <div className="flex gap-2">
                    <CiLocationOn  />
                    <span className="font-normal">Year of publishing: {items.yearOfPublishing}</span>
                </div>
            </div>

            <div className="flex mt-5 sm:mt-0 sm:flex-row flex-col gap-2 sm:gap-5">
                    <div className="flex gap-2 items-center">
                        <MdOutlineGroup />
                        <span>Publisher : {items.publisher}</span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <MdOutlineFindInPage />
                        <span>Number of pages : {items.totalPages}</span>
                    </div>
            </div>

            <hr className="border-b border-dashed border-gray-300 my-5" />

            <div className="flex sm:flex-row flex-col gap-5">
                <span className="px-3 py-1 rounded-xl bg-[#328EFF26] text-[#328EFF]">Category : {items.category}</span>
                <span className="px-3 py-1 rounded-xl bg-[#FFAC3326] text-[#FFAC33]">Rating : {items.rating}</span>
                <NavLink to={`/bookdetails/${items.bookId}`} className="px-3 py-1 rounded-xl bg-[#23BE0A] hover:bg-white hover:text-black text-white font-medium">View details</NavLink>
            </div>
        </div>
    </div>
  )
}

ReadBookCard.propTypes = {
    items: PropTypes.shape({
      bookName: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      yearOfPublishing: PropTypes.number.isRequired,
      publisher: PropTypes.string.isRequired,
      totalPages: PropTypes.number.isRequired,
      bookId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    }),
  };

export default ReadBookCard