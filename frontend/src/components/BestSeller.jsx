import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>item.bestseller)

        setBestSeller(bestProduct.slice(0,5));

    },[])

  return <div className="my-10">
    <div className="py-8 text-center text-3xl">
        <Title text1={'BEST'} text2={'SELLER'} />
        <p className="text-xs sm:text-sm md:text-base text-gray-600 w-3/4 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid veritatis, magnam optio doloribus quod excepturi eligendi labore ab deserunt qui quia fugit asperiores velit cum totam? Odit, quae officiis.</p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
       {bestSeller.map((item,index)=>(<ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>))}
    </div>

  </div>;
};

export default BestSeller;
