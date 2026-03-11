// import React from 'react'
import pickup from "../../assets/pickup.png"
import delivery from "../../assets/delivery.png"
// import hot from "../../assets/hot shawarma.jpg"
// import jellof from "../../assets/jellof rice.jpg"
// import pastries from "../../assets/meat.pie.png"
// import wine from "../../assets/wine.jpg"
// import shawarma from "../../assets/sha.jpg"
// import sugar from "../../assets/sugar dognut.jpg"
// import Boxes from './Boxes'



function Body() {
  return (
    <div className='pt-9'>

        {/* working div */}

        <div >
        <p className="text-center text-red-600 font-bold text-3xl md:text-5xl">How would you like to Receive your Order??</p>

{/* pick up */}
<div>
  {/* image pickup mobile */}
<div className='md:hidden grid grid-cols-2 justify-items-center py-20 items-center  space-x-5'>
    <img src={pickup}alt="" className='w-32'/>
    <img src={delivery}alt="" className='w-32'/>
</div>

{/* image pickup desktop*/}
<div className='hidden  md:grid grid-cols-2 justify-items-center py-20 items-center '>
    <img src={pickup}alt="" />
    <img src={delivery}alt="" />
</div>
</div>
 </div>

{/* loyalty point */}
<div className='flex justify-end mr-4 '>
   <button className='bg-orange-500 text-white text-2xl md:text-4xl px-5 py-3 rounded-3xl ml-9 '>Earn Loyalty Point</button>
</div>

{/* discover our menu */}
<div className='mt-16 mb-8'>
  <p className='text-center text-4xl font-bold text-orange-500'>Discover Our Menu</p>
  <div className='flex  justify-center'>
<p className='border-b-6  rounded-2xl  ml-57 items-center border-orange-600 w-25'></p>
  </div>
</div>

{/* menu itself */}
{/* <Boxes/> */}
    </div>
  )
}

export default Body