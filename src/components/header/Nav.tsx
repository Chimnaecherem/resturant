// import React from 'react'
import logo from "../../assets/logo.png"
import icon from "../../assets/hamburger.png"
// import About from '../../pages/About'
import { Link } from 'react-router-dom'
// import Home from '../../pages/Home'
// import Menu from '../../pages/Menu'
// import Contact from '../../pages/Contact'
// import Support from '../../pages/Support'

function Nav() {
  return (
    <div className='bg-[#ff9100] fixed top-0 left-0 w-full z-50 mb-'>
      {/* image logo */}
      <div className='flex justify-between'>


        <div>
           <Link to="/">
          <img src={logo} alt="logo" className='h-12 m-4' />
           </Link>
        </div>
        {/* hamboger for mobile */}

        {/* <p>sjsj</p> */}
        <details className="dropdown md:hidden">
          <summary className="btn m-1 bg-transparent border-0 shadow-none"><img src={icon} alt="" className='m-4 h-6 mt-8  ' /></summary>
          <ul className="menu dropdown-content  bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm ">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </details>


        {/* <div>

          <details className="dropdown">
            <summary className="btn m-1"><img src={icon} alt="" className='m-4 h-6 mt-8 md:hidden ' /></summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><a><About /></a></li>
              <li><a><Menu /></a></li>
              <li><a><Contact /></a></li>
              <li><a><Support /></a></li>
            </ul>
          </details>

        </div> */}
        {/* <img src={icon} alt="" className='m-4 h-6 mt-5 md:hidden ml-68' /> */}



        {/* for desktop */}
        <div className=' gap-x-20 hidden sm: md:flex items-center ml-80'>
          <button className='bg-white text-black rounded-2xl p-2  hover:bg-yellow-200'>
            <Link to="/">Home</Link>
          </button>
          <button className='bg-white text-black rounded-2xl p-2  hover:bg-yellow-200'>
            <Link to="/about">About</Link>
          </button>

          <button className='bg-white text-black rounded-2xl p-2  hover:bg-yellow-200'>
            <Link to="/menu">Menu</Link>
          </button>

          <button className='bg-white text-black rounded-2xl p-2  hover:bg-yellow-200'>
            <Link to="/contact">Contact</Link>
          </button>

          <button className='bg-white text-black rounded-2xl p-2  hover:bg-yellow-200'>
            <Link to="/support">Support</Link>
          </button>

        </div>
        <p className='text-white text-xl font-bold mt-4 ml-60 mr-4 hover:text-yellow-200 hidden md:block'>You need a diet Plan?</p>
      </div>




    </div>
  )
}

export default Nav