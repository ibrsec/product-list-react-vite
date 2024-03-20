import { useState } from 'react'
import './App.css'
import './scss/main.scss'
import Header from './components/header.jsx';
import Navbar from './components/navbar.jsx';
import { products } from "./data.jsx";
import Content from './components/content.jsx';



function App() {

  console.log(products);

  const categoriesWithProducts = getDatas(products);
  

  console.log(categoriesWithProducts);
   
  return (
    <>
      <Header />
      <Navbar categories={categoriesWithProducts}/>
      <Content categoriesWithProducts={categoriesWithProducts}/>
    </>
  )
}

export default App




const getDatas = (products) => {
  const categoriesWithProducts = {
    ALL: products,
    ...products.reduce((categories, current) => {
      const { category } = current;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(current);
      return categories;
    }, {}),
  };
  return categoriesWithProducts;
}