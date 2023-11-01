import React from 'react';
import image1 from "../Assets/app 1.png";
import image2 from "../Assets/app 2.png";
import image3 from "../Assets/google-play-badge 1.png";

const App = () => {
    return (

        <div className='app'>

            <div>
                <img src={image1} alt="" className='app-img'/>
            </div>
            <div className='app-div'>
                <h2>Download StackJunior App</h2>
                <p>Whether at home or on the go, StackJunior wants you to keep learning. Hence, the StackJunior app.</p>
                <img src={image3} alt="" />
            </div>
            <div>
                <img src={image2} alt="" className='app-img' />
            </div>

        </div>
    )
}

export default App