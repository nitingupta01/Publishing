import React from "react";

function ProductCard(props)
{
    return(
        <div className="product-box">
            <div className="product-img"><img src={props.image}></img></div>
            <div className="product-body">
                <div className="product-heading">{props.heading}</div>
                <div className="product-description">{props.description}</div>
                <div className="product-button"><button>Learn More</button> <button>Buy Now</button></div>
            </div>
        </div>
    );
}

export default ProductCard;