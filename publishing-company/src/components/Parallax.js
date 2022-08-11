import React from "react";
import { Parallax } from "react-parallax";

function Paral(){
    const image="https://as1.ftcdn.net/v2/jpg/01/69/73/44/1000_F_169734444_RqoX780hdKhE2Us8bT9TPD5pgbotnTQ5.jpg";
    const image1="https://images2.alphacoders.com/261/26102.jpg";

    return(
        <Parallax bgImage={image1} strength={500}>
            <div style={{height:600}}>
                <div className="para-content">
                    <h1>Your Book, Your Way</h1>
                    <p>Our Company offers custom books with over 3,000 possible format, color, and size combinations.</p>
                </div>
            </div>
        </Parallax>
    );
}

export default Paral;