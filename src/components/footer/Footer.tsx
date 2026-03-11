import React from 'react'
import call from "../../assets/CALL ICON.png"
import tik from "../../assets/tik.jpg"
import insta from "../../assets/insta.jpg"
import face from "../../assets/facebook.png"
import whas from "../../assets/WHATSAPP ICON.jpg"
import location from "../../assets/location y.png"
import mail from "../../assets/mail.png"


function Footer() {
  return (
   <div>

    {/* mobile */}
    <div className='md:hidden'>
       <div className='bg-red-950 mx-3 rounded-xl text-center text-white items-center'>
    <div className=' mx-3 mt-6 grid  grid-rows-3 text-white font-bold '>
        <a href="https://www.crunchiesonline.com" className='ml-3 mt-3'> Privacy Policy</a>
        <a href="" className='ml-3 mt-3'> Terms and Conditions</a>
        <a href="" className='ml-3 mt-3'> Feedback</a>
       
       <p className='ml-3 mt-8'>Find Us Here</p>
    </div>

{/* icons div */}
<div className='grid grid-cols-5 gap-2 mt-7 items-center mx-12'>
<img src={insta} alt="" className='h-6'/>
<a href="https://www.facebook.com/share/17V549mVwV"><img src={face} alt="" className='h-6'/> </a> 
<img src={tik} alt="" className='h-6'/>
<img src={whas} alt="" className='h-6'/>
<img src={call} alt="" className='h-6'/>
</div>

{/* TELL */}
<p className='mt-6 text-2xl font-bold'>Tell Us How we're doing....</p>

<p className='mt-6 '>Your feedback is valuable to us.</p>

<button className='mt-8 border-2 p-3 rounded-3xl mb-9'>
    Submit feedback
</button>
   </div>
    </div>

    {/* for desktop */}

    <div className='hidden md:block '>
      <div className='pt-20 pl-16 pb-8  mt-20 bg-red-950 text-gray-400 md:grid grid-cols-3'>
        {/* two coloums */}
<div className='md:grid ml-8'>
{/* first one */}
<div className='grid '>
    {/* two inside */}
    <div className='md:grid grid-cols-2'>
        {/* Address  */}
        <div className='space-y-2 leading-loose'>
<p className='font-bold text-2xl text-white'>Address Gold-Light Energy</p>
{/* location icon */}
<div className='flex space-x-2'>
<img src={location} alt="Location Icon" className='h-5 w-5' />
<p>Berlin, Germany (HG) Address: No. Brandenburgische Str. 77,12713 Berlin, Germany.</p>
</div>
<div className='flex space-x-2'>
<img src={mail} alt="Mail Icon" className='h-6 w-5' />
<p>Contact@goldlight.org</p>
</div>

{/* Address */}
{/* <p className='pt-6 font-bold text-2xl text-white'>Address </p> */}
{/* location icon */}
<div className='flex space-x-2'>
<img src={location} alt="Location Icon" className='h-6 w-5' />
<p>Agerakvo 38, 860 Copenhagen, <br />Denmark</p>
</div>

<div className='flex space-x-2'>
    <img src={call} alt="" className='h-6 w-5'/>
    <p>+4592457638</p>
</div>
        </div>
    </div>
</div>
</div>

 {/* Quick */}
        <div>
<ul className="pt-2 sm: space-y-3 ">
  <li className="flex items-center gap-2 text-gray-200">
    <svg  className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">About Us</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">Contact Us</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">Our Services</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg  className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
    <a href="">Terms & Condition</a>
  </li>

  <li className="flex items-center gap-2 text-gray-200">
    <svg  className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
   <a href="">Free Quote</a>
  </li>
</ul>

{/* followed */}
<div className=' mx-3 mt-6 grid  grid-rows-3 text-white font-bold '>
        <a href="https://www.crunchiesonline.com" className='ml-3 mt-3'> Privacy Policy</a>
        <a href="" className='ml-3 mt-3'> Terms and Conditions</a>
        <a href="" className='ml-3 mt-3'> Feedback</a>
       
       <p className='ml-3 mt-4'>Find Us Here</p>
    </div>

        </div>


  {/* News Letter */}
        <div className='text-white'>
<p className='pb-3 sm: text-white font-bold text-2xl'>Newsletter</p>
<p className=' font-bold my-4'>Receive Our Latest News and Updates</p>
{/* input */}
<div className='h-12 w-76 bg-white flex relative rounded-2xl'>
    <input type="email" placeholder='Your Email' className='text-black pl-2' />
    <div className='bg-green-700 h-9 w-16 absolute justify-items-center right-3 items-center rounded-xl top-1.5'>
        <p className='text-white text-center pt-1'>SignUp</p>
    </div>
</div>

<p className='mt-6 text-2xl font-bold'>Tell Us How we're doing....</p>

<p className='mt-6 '>Your feedback is valuable to us.</p>

<button className='mt-12 border-2 p-3 rounded-3xl mb-9 hover:bg-white hover:text-red-900 font-bold'>
    Submit feedback
</button>
        </div>

    </div>   mm
    </div>


   </div> 
  )
}

export default Footer