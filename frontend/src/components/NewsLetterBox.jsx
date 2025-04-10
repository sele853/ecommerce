import React from "react";

const NewsLetterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

  return <div className="text-center">
    <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
    <p className="text-gray-400 mt-3">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus hic voluptatibus, eius veniam iure similique esse corporis incidunt, voluptate aperiam, cupiditate et nostrum repellendus voluptas. A accusantium corrupti reprehenderit nesciunt.
    </p>

    <form onSubmit={onSubmitHandler} className="w-full flex items-center sm:w-1/2 mx-auto my-6 pl-3 border border-gray-300">
        <input type="email" className="outline-none w-full sm:flex-1" placeholder="Enter email address"/>
        <button type="submit" className="bg-black text-xs text-white px-10 py-4 cursor-pointer">SUBSCRIBE</button>

    </form>

  </div>;
};

export default NewsLetterBox;
