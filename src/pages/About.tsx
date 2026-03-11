// import React from 'react'
// import { useState } from 'react'
import Food from '../components/body/About/Food';
import Bar from '../components/body/About/Bar';
import Pastries from '../components/body/About/Pastries';

function About() {
  // const [toggle, setToggle] = useState(true);
  // let handleClick = () => {
  //   setToggle(!toggle)
  // }

  return (
    <div>
     

      {/* <div>
        <button onClick={handleClick}> {toggle ?
          <p> About </p> : <p>{<Food />}</p>
        }
        </button>
      </div> */}


<Food/>
<Bar/>
<Pastries/>

    </div>
  )
}

export default About