import React, { useState } from 'react';



const Content = (props) => {
    console.log('form content props',props);
    const[chosen,setChosen] = useState(props.categoriesWithProducts["ALL"]); 

    document.querySelector("body").addEventListener("click", function (e) {
        if(e.target.tagName == "BUTTON"){
            const category = e.target.getAttribute("datacategory")
            const choosenProducts = props.categoriesWithProducts[category]
            setChosen(choosenProducts);
        }
    })
    console.log(chosen);


    return(
        <section id="content" >
        {
            chosen.map((item,index) => (
            <div key={index} className='card'  >
                <div className='img-container'>
                <img src={item.image} alt="" />

                </div>
                <span className="price">{item.price} $</span>
                <p className='description'>{item.title}</p>
            </div>

            ))
        }
        </section>
    )
}

export default Content;