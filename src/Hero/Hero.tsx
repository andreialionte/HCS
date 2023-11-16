import watch from "../assets/pngwing.com (1).png"

const Hero = () => {

  return (
    <div className='flex justify-between max-md:flex-col max-md:mt-[-5rem] h-[100vh] '>
    <h1 className="fontt underline mt-[10rem] whitespace-nowrap text-transparent text-6xl text-left ml-8 font-bold bg-clip-text bg-gradient-to-bl from-red-500 to-blue-500 animate-gradient max-md:text-[1.5rem] max-md:ml-5 font">Safe Seconds, Smart Savings,<br /> HCS Made Simple.</h1>
    <img src={watch} alt="watch"  className="w-[40rem] h-[40rem] max-md:h-[30rem] max-md:w-[30rem]"/>
    </div>
  );
};

export default Hero;
