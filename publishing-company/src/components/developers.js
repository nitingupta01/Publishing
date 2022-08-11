import React from "react";

function Developers(){
    const image1="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80";
    const image2="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg";
    const image3="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc="
    return(
        <div>
            <h1 className="ps-heading">DEVELOPERS TEAM</h1>
            <div className="developers-box">
                <div className="developers-item">
                    <div><img className="developer-image" src={image1}></img></div>
                    <div><p>Angela</p><p>Senior Developer</p></div>
                </div>
                <div className="developers-item">
                    <div><img className="developer-image" src={image2}></img></div>
                    <div><p>Harry</p><p>FrontEnd Developer</p></div>
                </div>
                <div className="developers-item">
                    <div><img className="developer-image" src={image3}></img></div>
                    <div><p>Jack</p><p>BackEnd Developer</p></div>
                </div>
            </div>
        </div>
    )
}

export default Developers;