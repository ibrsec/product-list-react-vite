import React from "react";
import { products } from "../data.jsx";

const Navbar = (props) => {
//   console.log(props);
    const {categories:categoriesWithProducts} = props
    // console.log(categoriesWithProducts);

  return (
    <nav className="navbar">
      {Object.keys(categoriesWithProducts).map((item,index)=>(
        <button className="category-btn" key={item+'-'+index} datacategory={item}>{item}</button>
      ))
    }
    </nav>
    // <></>
  );
};

export default Navbar;
