import { Link, NavLink } from "react-router-dom"
import './style.css'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to='/' className='btn bg-transparent'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/listedbooks' className='btn bg-transparent'>Listed Books</NavLink>
              </li>
              <li>
                <NavLink to='/pagetoread' className='btn bg-transparent'>Pages to Read</NavLink>
              </li>
              <li>
                <NavLink to='/about' className='btn bg-transparent'>About us</NavLink>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl font-bold border-none bg-transparent">Book Vibe</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavLink to='/' className='btn bg-transparent'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/listedbooks' className='btn bg-transparent'>Listed Books</NavLink>
            </li>
            <li>
              <NavLink to='/pagetoread' className='btn bg-transparent'>Pages to Read</NavLink>
            </li>
            <li>
                <NavLink to='/about' className='btn bg-transparent'>About us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="btn bg-[#23BE0A] hover:bg-transparent">Sign In</a>
          <a className="btn bg-[#59C6D2] hover:bg-transparent">Sign Up</a>
        </div>
      </div>
  )
}

export default Navbar