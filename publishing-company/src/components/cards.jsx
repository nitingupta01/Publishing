import React from "react";

function Card(props){
    return(
        <div className="card-box">
            <div className="card-image"><img src={props.image} alt={props.alt}></img></div>
            <div className="content">{props.content}</div>
        </div>
    );
}

export default Card;