import { NavLink } from "react-router-dom"


const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 rounded-xl">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <img src="https://bodleianshop.co.uk/cdn/shop/products/SpeakingVolumes.jpg?v=1646308052" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
      <NavLink to='/listedbooks' className="btn bg-[#23BE0A] text-white hover:text-black font-bold">View The List</NavLink>
    </div>
  </div>
</div>
  )
}

export default Hero