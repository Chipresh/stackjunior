import React from 'react';
import image1 from "../Assets/search (1).png";
import image2 from "../Assets/kid 2.png";

const Section = () => {
  return (

    <div className='section'>

      <div>
        <h2>Learn on your schedule</h2>
        <div className='learn'>
          <input type="text" placeholder='Search for your desired courses' />
          <div className='search-icon'><img src={image1} alt="" /></div>
        </div>
      </div>

      <div>
        <img src={image2} alt="" className='kid-img' />
      </div>

    </div>
  )
}

export default Section