import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";

function About() {
  return <div>
    <div className="text-2xl border-t border-gray-300 pt-8 text-center">
       <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-16">
       <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
       <div className="flex flex-col ">

       </div>
    </div>
  </div>;
}

export default About;
