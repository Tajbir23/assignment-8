import { useState } from "react";
import ReadBook from "../components/ReadBook";
import WishlistBook from "../components/WishlistBook";

const listedBooks = () => {
  const [sortId, setSortId] = useState("");
  const [tab, setTab] = useState('read')
  console.log(sortId);
  return (
    <div className="mx-6">
      <h1 className="p-5  rounded-xl bg-[#1313130D] font-bold text-3xl text-center">
        Books
      </h1>
      <div className=" my-10 flex items-center justify-center">
        <select className="bg-[#23BE0A] p-3 rounded-xl outline-none hover:bg-transparent" onChange={(e) => setSortId(e.target.value)}>
          <option value='' >Sort</option>
          <option value="page">Total page</option>
          <option value="rating">Rating</option>
          <option value="year">Publishing year</option>
        </select>
      </div>


      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" checked={tab === 'read'} onChange={() => setTab('read')} />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <ReadBook sortId={sortId} />
        </div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" checked={tab === 'wishlist' } onChange={() => setTab('wishlist')} />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <WishlistBook sortId={sortId} />
        </div>

      </div>
    </div>
  );
};

export default listedBooks;
