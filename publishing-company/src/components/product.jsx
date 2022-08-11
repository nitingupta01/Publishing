import React from "react";
import ProductCard from "./product-card";
import Details from "./product-details";

function Product(){

    function createCard(item){
        return(
            <ProductCard 
            key={item.id}
            image={item.image} 
            heading={item.heading}
            description={item.description}
            />
        )
    }

    return(
        <div>
            <h1 className="ps-heading">PRODUCTS</h1>
            <div className="product-section">
            {Details.map(createCard)}
            </div>
        </div>
    )
}

export default Product;