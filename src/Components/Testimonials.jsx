import React from 'react';
import image1 from "../Assets/review 1.png";

const Testimonials = () => {
    return (

        <div className='testinonials'>

            <h3>What People Are Saying</h3>
            <div className='testimony'>
                <div className='testimony-img'>
                    <img src={image1} alt="" />
                </div>
                <div>
                    <p className='testimony-text'> I took the python course using the mobile app and I found the
                        videos encouraging and helpful.</p>
                    <p className='doe'>- John Doe</p>
                    <div className='borders'>
                        <div className='black'></div>
                        <div className='white'></div>
                        <div className='white'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimonials