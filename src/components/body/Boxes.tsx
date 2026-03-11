// import React from 'react'
import catfish from "../../assets/catfish.jpg"
import pepersoup from "../../assets/beef pepper soup.png"
import okro from "../../assets/okro.jpg"
import jellof from "../../assets/jellof rice.jpg"
import rice from "../../assets/white rice.jpg"
import pasta from "../../assets/pasta.jpg"
import nkwobi from "../../assets/nkwobi.jpg"
import soup from "../../assets/vegies soup.png"
import chinchin from "../../assets/chinchin.jpg"
import crips from "../../assets/crips.jpg"
import Cupcake from "../../assets/cupcake.jpg"
import Eggroll from "../../assets/eggroll.jpg"
import meatp from "../../assets/mp.jpg"
import smallchop from "../../assets/smallshops.jpg"
import sha from "../../assets/creamy sha.jpg"
import cake1 from "../../assets/cake7.jpg"
import cake from "../../assets/cake6.jpg"
import Bread from "../../assets/bread.png"
import Paf from "../../assets/pafiart.jpg"
import donut from "../../assets/sugar dognut.jpg"
import wine from "../../assets/wine.jpg"
import drinks from "../../assets/soft drink.jpg"
import beer from "../../assets/beer.jpg"
import ice from "../../assets/ice.png"



// food items
function Boxes() {

  const imageAndName = [
    { photo: rice, name: "Rice n' stew" },
    { photo: pasta, name: "Pasta" },
    { photo: soup, name: "Vegetable Soup" },
    { photo: jellof, name: "Jellof Rice" },
    { photo: okro, name: "Okro" },
    { photo: nkwobi, name: "Nkwobi" },
    { photo: catfish, name: "Cat Fish" },
    { photo: pepersoup, name: "Peper-Soup" }
  ]

  // bakery items
  const pastriesItems = [
    { photo: chinchin, name: "Chinchin" },
    { photo: crips, name: "Crips" },
    { photo: Cupcake, name: "Cupcake" },
    { photo: Eggroll, name: "Eggroll" },
    { photo: meatp, name: "meat Pie" },
    { photo: smallchop, name: "Smallchop" },
    { photo: sha, name: "Shawarma" },
    { photo: cake1, name: "cake" },
    { photo: cake, name: "cake" },
    { photo: Bread, name: "Bread" },
    { photo: Paf, name: "pafairt" },
    { photo: donut, name: "Dough-Nut" },
  ]

  // bar items
  const barItems = [
    { photo: wine, name: "Wines" },
    { photo: ice, name: "Ice-Cream" },
    { photo: drinks, name: "Soft-drinks" },
    { photo: beer, name: "Beer" }
  ]

  return (
    <div>
      {/* food items */}
      <div>
        <p className='text-2xl md:text-5xl text-center font-bold text-red-600 my-12'>Food</p>

        {/* images */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8  justify-items-center p-4 md:p-10'>
          {imageAndName.map((photos) => (
            <div className="w-full">
              <img src={photos.photo} alt="" className='bg-orange-200 h-48 md:h-96 w-full  rounded-2xl shadow-xl shadow-orange-300 border-4 border-red-700 hover:scale-102 transition-all duration-300 ease-in-out' />

              <p className='font-bold text-xl  text-red-700 ml-2 '>{photos.name}</p>
            </div>

            //  absolute top-26
          )
          )
          }

        </div>
      </div>

      {/* pastries items */}

      <div>
        <p className='text-2xl md:text-5xl text-center font-bold text-red-600 my-12'>Pastries</p>

        {/* images */}
        <div className='grid grid-cols-2 md:grid-cols-4  space-y-8 justify-items-center'>
          {pastriesItems.map((photos) => (
            <div className='relative '>
              <img src={photos.photo} alt="" className='bg-orange-200 w-36 h-36 rounded-2xl shadow-xl shadow-orange-300 border-4 border-red-700   ' />

              <p className='font-bold text-xl  text-red-700 ml-2'>{photos.name}</p>
            </div>


          )
          )
          }

        </div>
      </div>

      {/* bar items */}

      <div>
        <p className='text-2xl md:text-5xl text-center font-bold text-red-600 my-12'>Bar</p>

        {/* images */}
        <div className='grid grid-cols-2 md:grid-cols-4  space-y-8 justify-items-center'>
          {barItems.map((photos) => (
            <div className='relative '>
              <img src={photos.photo} alt="" className='bg-orange-200 w-36 h-36 rounded-2xl shadow-xl shadow-orange-300 border-4 border-red-700   ' />

              <p className='font-bold text-xl  text-red-700 ml-2'>{photos.name}</p>
            </div>


          )
          )
          }

        </div>
      </div>

    </div>
  )
}

export default Boxes