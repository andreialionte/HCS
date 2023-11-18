// import React from 'react';
import info from "../assets/info.png"
import photo2 from "../assets/wwathc-removebg-preview.png"
import connect from "../assets/images-removebg-preview.png"
import phone from "../assets/difference-between-push-notifications-and-sms-notifications-768x432-removebg-preview.png";
import unnamed from "../assets/unnamed-removebg-preview.png"
import design from "../assets/istockphoto-1060565612-612x612-removebg-preview.png";

function Purpose() {
  return (
    <div className="fontt ml-8 flex flex-col text-left mt-[-20rem] mb-[10rem] items-start ">
      <img src={info} alt="info" className="h-[30rem] w-[30rem] relative left-[82rem] top-[35rem]"/>
      <img src={photo2} alt="photo2" className="relative h-[10rem] w-[10rem] max-md:left-[14rem] max-md:top-[85rem] md:hidden" />
      <img src={unnamed} alt="photo2" className="relative h-[19rem] w-[10rem] max-md:left-[14rem] max-md:top-[92rem] md:hidden" />
      <img src={phone} alt="phone2" className="relative h-[8rem] w-[12rem] max-md:left-[12rem] max-md:top-[105.5rem] md:hidden" />
      <img src={connect} alt="phone2" className="relative h-[9rem] w-[8rem] max-md:left-[14.2rem] max-md:top-[116.5rem] md:hidden" />
      <img src={design} alt="phone2" className="relative h-[9rem] w-[8rem] max-md:left-[14.7rem] max-md:top-[131rem] md:hidden" />
      <h1 className="text-5xl font-medium text-white">Caring<span className="text-gradient from-purple-500 to-blue-500 bg-gradient-to-bl bg-clip-text text-transparent animate-gradient">Zen</span></h1>
      <p className="text-red-600 text-2xl uppercase">Purpose</p>
      <p className="mr-[50vw] text-white font-meidum text-left text-[1.2rem] mb-3 max-md:mr-[30vw]">CaringZen Watch is more than a watch, it's a dedicated companion designed with a singular focus - enhancing the safety and well-being of the elderly in foster care, kids, and those under hospital care. <br /> Our mission is to bridge the gap between caregivers, hospital assistants, and their loved ones, fostering a sense of security and connectedness.</p>
      <p className="text-red-600 text-2xl uppercase">Features</p>
      <p className="mr-[50vw] text-white font-meidum text-left text-[1.2rem] max-md:mr-[30vw]">
       <span className="text-red-400 text-xl">1. Safety-Centric Design:</span><br/>
CaringZen prioritizes safety above all. With advanced fall detection technology, GPS tracking, and a dedicated SOS button, the watch ensures immediate response in emergencies. It's not just a timekeeping device; it's a guardian that keeps your loved ones secure. <br/>

 <span className="text-red-400 text-xl"> 2. Real-Time Health Monitoring: </span><br/>
For individuals in foster care and kids, CaringZen offers real-time health monitoring features. From heart rate tracking to sleep analysis, caregivers and hospital assistants can access vital health data instantly. This information is not just confined to the watch but can be seamlessly connected to phones or laptops for comprehensive analysis. <br/>

 <span className="text-red-400 text-xl">3. Personalized Notifications: </span><br/>
Receive instant notifications about your favorite person's well-being. CaringZen keeps you informed about their activities, health updates, and medication reminders, ensuring that you stay connected even when physically apart. <br/>

 <span className="text-red-400 text-xl">4. Seamless Connectivity: </span><br/>
CaringZen seamlessly connects to smartphones and PCs, providing hospital assistants with real-time values and updates. The watch acts as a reliable link, allowing caregivers and hospital staff to monitor the wearer's condition, ensuring a prompt response to changing needs. <br/>

 <span className="text-red-400 text-xl">5. User-Friendly Interface:</span><br/>
Designed with simplicity in mind, CaringZen features an intuitive interface. Hospital assistants can effortlessly access real-time information, making it a valuable tool in caregiving environments. The watch prioritizes ease of use to focus on what truly matters – the well-being of the wearer.</p>
    </div>
  );
}

export default Purpose;
