// import React from 'react'

import Body from "../components/body/Body"
import Boxes from "../components/body/Boxes"
import Slide from "../components/body/Slide"
import Footer from "../components/footer/Footer"




function Home() {
  return (
    <div>
 <div className='bg-[#faefd0]'>

      <Slide/>
      <Body/>
      <Boxes />
      <Footer/>
    </div>


    </div>
  )
}

export default Home