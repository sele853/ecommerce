import React, { useContext, useEffect,useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "./Title";
import ProductItem from "./ProductItem";

export const LatestCollection = () => {
    const {products} =useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[products])
  return <div className="my-10">
    <div className="text-center py-8 text-3xl">
       <Title text1={"LATEST"} text2={"COLLECTION"}/>
       <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia placeat nisi asperiores amet dignissimos repellendus? Rerum odit dolorum repellendus est quam, explicabo modi incidunt architecto aspernatur! Hic animi laudantium placeat.</p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.images} price={item.price} name={item.name}/>
            ))
        }

    </div>
  </div>;
};
