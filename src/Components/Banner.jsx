import React from 'react';
import image1 from "../Assets/1 1.png";
import image2 from "../Assets/2 1.png";
import image3 from "../Assets/image 1.png";


const Banner = () => {
  return (

    <div className='banner'>

      <div>
        <h1>Why Choose Us ?</h1>
      </div>

      <div className='texts'>
        <div>
          <img src={image1} alt="" className='ban-imgs' />
        </div>

        <div>
          <h3 className='header'>Detailed Syllabus with Localized Content</h3>

          <p>We’ve got a comprehensive syllabus that leaves nothing untouched and with our localized contents and examples, you are sure to grasp programming concepts easier and faster even without prior experience (i.e. as a beginner).</p>
        </div>
      </div>

      <div className='texts'>
        <div>
          <h3 className='header'>An Interactive Personalized Learning Experience</h3>
          <p>With StackJunior’s flexible learning options and 1-on-1 code review with seasoned tutors, your learning is suited just for you. </p>
        </div>

        <div>
          <img src={image2} alt="" className='ban-imgs' />
        </div>
      </div>

      <div className='texts'>
        <div>
          <img src={image3} alt="" className='ban-img' />
        </div>

        <div>
          <h3 className='header'>World-Class Learning
            with World-Class Jobs</h3>

          <p>At StackJunior, we impact students with industry-standard skills and trainings. We also support them in getting jobs that are available from around the globe. How cool is that?</p>
        </div>
      </div>

    </div>
  )
}

export default Banner