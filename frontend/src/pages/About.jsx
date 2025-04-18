import React from "react";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

function About() {
  return <div>
    <div className="text-2xl border-t border-gray-300 pt-8 text-center">
       <Title text1={'ABOUT'} text2={'US'}/>
    </div>

    <div className="my-10 flex flex-col md:flex-row gap-16">
       <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
       <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae assumenda, recusandae a voluptatem doloremque quas dolore sunt, explicabo ipsum nam sint delectus. Dicta molestiae nostrum, suscipit modi nesciunt aut natus?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quia aliquam in voluptatibus officiis accusantium id molestiae voluptate nihil ratione enim dolore, ipsum aspernatur voluptatem mollitia, hic nisi reiciendis odit?</p>
          <b className="text-gray-800">OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, magni delectus. Quidem at, enim consequuntur corporis facere molestias hic vitae possimus doloremque natus beatae illum ab reprehenderit. Magni, similique dolore.</p>
       </div>
    </div>

    <div className="text-xl py-4">
       <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>

    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className="border border-gray-100 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
        <b>QUALITY ASSURANCE:</b>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores autem enim nisi magni ipsum perspiciatis cum, porro libero voluptas alias, vel qui quo. Quidem vitae deserunt adipisci aut quas.</p>
      </div>
      <div className="border border-gray-100 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
        <b>CONVENIENCE:</b>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores autem enim nisi magni ipsum perspiciatis cum, porro libero voluptas alias, vel qui quo. Quidem vitae deserunt adipisci aut quas.</p>
      </div>
      <div className="border border-gray-100 px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
        <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
        <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est asperiores autem enim nisi magni ipsum perspiciatis cum, porro libero voluptas alias, vel qui quo. Quidem vitae deserunt adipisci aut quas.</p>
      </div>
    </div>
    <NewsLetterBox />
  </div>;
}

export default About;
