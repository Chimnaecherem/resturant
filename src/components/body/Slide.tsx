// import React from "react";
import {Autoplay} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import pics from "../../assets/replace.jpg"
import bar from "../../assets/bar.jpg"
import hot from "../../assets/hot shawarma.jpg"
// import Food from "./About/Food";
// import Bar from "./About/Bar";
// import Pastries from "./About/Pastries";
// import barr from "./../../assets/barr.jpg";
import bigg from "./../../assets/web pics.png";
import handfood from "./../../assets/handrice2.png";
import tomato from "./../../assets/tomato.png";
// import onion from "./../../assets/onion.png";

function Slide() {
  return (
    <div className="mt-2 mx-2 ">

 {/* big text ON MOBILE */}
<div className='md:hidden pt-24'>
   <p className='  mt-20 text-orange-500 font-extrabold text-center  text-3xl animate-bounce hover:text-green-400'> WELCOME TO <br /> <br /> CROWN CUISINE <br /> KITCHEN & BAR</p>
   <p className="text-center text-red-600 font-bold text-3xl">....Taste the difference...</p>
</div>

 {/* big text ON desktop */}
<div className=' hidden md:block relative h-screen'>
  {/* rice */}
<div className="flex justify-end  my-16 ">
  <img src={handfood} alt="rice" className="mt-20"/>
</div>

{/* spices */}
<div className="">
<img src={tomato} alt="" className="animate-pulse h-125 ml-20 absolute top-20"/>

</div>
{/*  welcometext  */}
<div className="absolute inset-0 top-20 z-10 right-20 text-center">
  <p className=' mt-26 text-orange-500 font-extrabold text-center  text-9xl animate-bounce hover:text-green-400'> WELCOME TO <br /> <br /> CROWN CUISINE <br /> KITCHEN & BAR</p>
   <p className="text-center text-red-600 font-bold text-5xl">....Taste the difference....</p>
</div>
</div>



{/* sliding FOR MOBILE */}
<div className="md:hidden :">
  <Swiper
modules = {[Autoplay]}
spaceBetween = {30}
slidesPerView = {1}
loop = {true}
autoplay = {{delay:2000}} 
>

{/* the slides */}

<SwiperSlide className="" >
<div>
<img src={pics} alt="pics"  className='h-125 w-full rounded-4xl relative x-3 border-3 border-[#faefd0] p-4'/>

</div>
</SwiperSlide>

<SwiperSlide >
<div>
   <img src={bar} alt=""  className='h-125 w-full rounded-4xl  border-3 border-[#faefd0] p-4'/>
</div>
</SwiperSlide>


<SwiperSlide>
<div>
  <img src={hot} alt="" className='h-125 w-full rounded-4xl border-3 border-[#faefd0] p-4' />
</div>
</SwiperSlide>
</Swiper>
</div>

{/* ill link here */}

{/* sliding FOR desktop */}
<div className="hidden md:block">
  {/* images */}
 <div className="flex justify-center items-center">
<img src={bigg} alt="" className=" w-300 items-center"  />

 </div>


</div>


{/* ill link here also. */}
</div>

  )
}





export default Slide
