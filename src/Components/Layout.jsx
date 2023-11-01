import React from 'react';
import image1 from "../Assets/tutorial 2.png";
import image2 from "../Assets/tutorial 3.png";
import image3 from "../Assets/tutorial 2 (1).png";
import image4 from "../Assets/tutorial 3 (1).png";

const Layout = () => {
    return (

        <div className='layout'>

            <div className='reviews'>
                <div>
                    <div>
                        <img src={image1} alt=""  className='reviews-img4' />
                    </div>
                    <div className='reveiews-texts'>
                        <h4>Code Reviews</h4>
                        <p>We don’t just give you assignments, we review your solutions and give you insightful feedbacks on your code to enhance and reinforce your understanding.</p>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={image2} alt=""  className='reviews-img4' />
                    </div>
                    <div className='reveiews-texts'>
                        <h4>Mentorships</h4>
                        <p>Even without being in a physical class, we make it possible for our students to ask questions and get guidance through our qualified mentors.</p>
                    </div>
                </div>
            </div>

            <div className='reviews'>

            <div>
                <div>
                    <img src={image3} alt=""  className='reviews-img4'/>
                </div>
                <div className='reveiews-texts'>
                    <h4>Live Code Editor</h4>
                    <p>Whether at home or on the go, you can still follow your classes and practice with our easy-to-use code editor. It works on both the web and mobile app.</p>
                </div>
            </div>

            <div>
                <div>
                    <img src={image4} alt="" className='reviews-img4'  />
                </div>
                <div className='reveiews-texts'>
                    <h4>Community Forums</h4>
                    <p>Just because you are learning online doesn’t mean you have to be all alone. With our discussion forum, you can share your opinions with other students and even make friends.</p>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Layout