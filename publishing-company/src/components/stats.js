import React from "react";
import Card from "./cards";

function Stat(){
    
    const image1="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX44527540.jpg";
    const image2="https://cdn0.iconfinder.com/data/icons/marketing-and-growth-line/64/product_buy_shop_shopping_marketing_icon-512.png";
    const image3="https://cdn-icons-png.flaticon.com/128/3828/3828258.png";
    return(
        <div>
            <h1 className="ps-heading">STATS</h1>
        <div className="stat-section">
            <Card image={image1} alt="customers" content="1000+ Customers" />
            <Card image={image2} alt="Products" content="500+ Products" />
            <Card image={image3} alt="connectivity" content="55% of market ocupied" />
        </div>
        </div>
    )
}

export default Stat;