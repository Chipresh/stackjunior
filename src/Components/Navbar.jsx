import React from 'react';
import image1 from "../Assets/logo (1).png"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>

      <div>
        <img src={image1} alt="" />
      </div>
      <div>Courses</div>
      <div>About StackJunior</div>
      <div>Quick Tutorials</div>
      <div>My Account</div>
      <div>
        <button className='nav-btn'>
          Start Learning
        </button>
      </div>
    </div>

    <div className='mob-nav'>

    </div>

    </>
  )
}

export default Navbar