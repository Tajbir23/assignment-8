

const ReadBookCard = ({items}) => {
  return (
    <div className="flex">
        <div className="bg-[#1313130D] p-5 rounded-xl">
            <img className="h-40 w-32" src={items.image} alt="book" />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default ReadBookCard