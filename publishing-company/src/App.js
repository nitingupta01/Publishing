import React from "react";
import Navbar from "./components/navbar";
import Paral from "./components/Parallax";
import Stat from "./components/stats";
import Product from "./components/product";
import Research from "./components/research";
import Upcoming from "./components/Upcoming";
import Developers from "./components/developers";

function App(){
    return(
        <div>
        <Navbar />
        <Paral />
        <Stat />
        <Product />
        <Research />
        <Upcoming />
        <Developers />
        </div>
    );
}

export default App;