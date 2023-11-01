import React from 'react';
import image1 from "../Assets/logo (1).png";
import image2 from "../Assets/Vector (2).png";
import image3 from "../Assets/Vector (3).png";
import image4 from "../Assets/Vector (4).png";
import image5 from '../Assets/youtube.png';
import image6 from "../Assets/junior 1.png";


const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div>
                    <img src={image1} alt="" />
                    <p>Is an ed-tech platform that trains
                        kids and teenagers
                        in programming and other tech skills </p>
                </div>
                <div className='links'>
                    <h5>Quick Links</h5>
                    <div className='faq'>
                        <p>About StackJunior</p>
                        <p>Courses</p>
                        <p>Career</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Send Feedback</p>
                        <p>Patnership</p>
                    </div>
                </div>
                <div className='socials'>
                    <h4>Socials</h4>
                    <div className='social-icons'>
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                        <img src={image5} alt="" />
                    </div>
                    <div className='contact'>
                        <h5>Contact Us</h5>
                        <p>+234 xxx xxx xxxx</p>
                        <p>+234 xxx xxx xxxx</p>
                    </div>
                </div>

            </div>

            <div className='footer-end'>
            <div className='junior'><img src={image6} alt="" />
            <p className='ask'>Ask Junior ?</p>
            </div>
                <p>©2022 - StackJunior. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer