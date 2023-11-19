import watch from "../assets/pngwing.com (1).png";
import { useState } from "react";
import Purpose from "../Purpose/Purpose";

const Hero = () => {
  const [selectLanguage, setSelectLangauge] = useState<string>("English");

  const handlerSelectedLangauge = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectLangauge(event.target.value);
  };

  return (
    <div className="overflow-y-hidden ">
      <div className="relative left-[100rem] max-md:left-[15rem] ">
        {/* <label className="fontt text-white">Select Language</label> */}
        {selectLanguage === "Romana" ? (
          <label className="fontt text-white">Selecteaza Limba</label>
        ):(
          <label className="fontt text-white">Select Language</label>
        )}
        <br />
        <select
          value={selectLanguage}
          onChange={handlerSelectedLangauge}
          className="focus:outline-cyan-500 focus:transition-none focus:duration-500 rounded-sm appearance-none outline-none border-none bg-[#495057] outline-white text-white"
        >
          <option className="bg-transparent text-black" value="English">
            English
          </option>
          <option className="bg-transparent text-black" value="Romana">
            Romana
          </option>
        </select>
      </div>
      <div className='flex justify-between max-md:flex-col max-md:mt-[-5rem] h-[100vh] fontt'>
        {selectLanguage === "Romana" ? (
          <h1 className="fontt underline mt-[10rem] whitespace-nowrap text-transparent text-6xl text-left ml-8 font-bold bg-clip-text bg-gradient-to-bl from-red-500 to-blue-500 animate-gradient max-md:text-[1.3rem] max-md:ml-5">
            Secunde sigure, economii inteligente,<br /> HCS a facut simplu.
          </h1>
        ) : (
          <h1 className="fontt underline mt-[10rem] whitespace-nowrap text-transparent text-6xl text-left ml-8 font-bold bg-clip-text bg-gradient-to-bl from-red-500 to-blue-500 animate-gradient max-md:text-[1.3rem] max-md:ml-5">
            Safe Seconds, Smart Savings,<br /> HCS Made Simple.
          </h1>
        )}
        <img
          src={watch}
          alt="watch"
          className="w-[40rem] h-[40rem] max-md:h-[30rem] max-md:w-[30rem]"
        />
      </div>
      <Purpose selectLanguage={selectLanguage}/>
    </div>
  );
};

export default Hero;
