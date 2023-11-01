import React from 'react';
import image1 from "../Assets/tutorial 1.png";
import image2 from "../Assets/Group 1.png";

const Svgbanner = () => {
    return (

        <div className='svgbanner'>

            <div className='tutorial'>
                <div className='tutorial-header'>
                    <h3>QUICK TUTORIALS</h3>
                </div>
                <div className='tutorial-texts'>
                    <p>At StackJunior, acquire industry-relevant tech skills such as programming, software development, data science, cloud computing and more to become a world-class IT professional.</p>
                </div>
                <div className='svg-div'>
                    <img src={image1} alt="" />
                </div>
            
            </div>


        </div>

    )
}

export default Svgbanner