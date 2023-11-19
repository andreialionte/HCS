// import React from 'react';
import info from "../assets/info.png"
import photo2 from "../assets/wwathc-removebg-preview.png"
import connect from "../assets/images-removebg-preview.png"
import phone from "../assets/difference-between-push-notifications-and-sms-notifications-768x432-removebg-preview.png";
import unnamed from "../assets/unnamed-removebg-preview.png"
import design from "../assets/istockphoto-1060565612-612x612-removebg-preview.png";

interface PurposeProps {
  selectLanguage: string;
}

function Purpose(props: PurposeProps) {
  return (
    <div className="fontt ml-8 flex flex-col text-left mt-[-20rem] max-md:mt-[-70rem] mb-[10rem] items-start">
      <img src={info} alt="info" className="h-[30rem] w-[30rem] relative left-[82rem] top-[35rem]"/>
      <img src={photo2} alt="photo2" className="relative h-[10rem] w-[10rem] max-md:left-[14rem] max-md:top-[83rem] md:hidden" />
      <img src={unnamed} alt="unnamed" className="relative h-[19rem] w-[10rem] max-md:left-[14rem] max-md:top-[90rem] md:hidden" />
      <img src={phone} alt="phone" className="relative h-[8rem] w-[12rem] max-md:left-[12rem] max-md:top-[103.5rem] md:hidden" />
      <img src={connect} alt="connect" className="relative h-[9rem] w-[8rem] max-md:left-[14.5rem] max-md:top-[114.5rem] md:hidden" />
      <img src={design} alt="design" className="relative h-[9rem] w-[8rem] max-md:left-[14.7rem] max-md:top-[131rem] md:hidden" />
      <h1 className="text-5xl font-medium text-white">Caring<span className="text-gradient from-purple-500 to-blue-500 bg-gradient-to-bl bg-clip-text text-transparent animate-gradient">Zen</span></h1>
      <p className="text-red-600 text-2xl uppercase">{props.selectLanguage === "Romana" ? "Scop" : "Purpose"}</p>
      <p className="mr-[50vw] text-white font-meidum text-left text-[1.2rem] mb-3 max-md:mr-[30vw] ">{props.selectLanguage === "Romana" ? "CaringZen Watch nu este doar un ceas, este un companion dedicat proiectat cu o singură preocupare - îmbunătățirea siguranței și bunăstării persoanelor în vârstă din centrele de îngrijire, copiilor și celor aflați sub îngrijirea spitalului. Misiunea noastră este să acoperim decalajul dintre îngrijitori, asistenții de la spital și cei dragi, promovând un sentiment de siguranță și conectivitate." : "CaringZen Watch is more than a watch, it's a dedicated companion designed with a singular focus - enhancing the safety and well-being of the elderly in foster care, kids, and those under hospital care. Our mission is to bridge the gap between caregivers, hospital assistants, and their loved ones, fostering a sense of security and connectedness."}</p>
      <p className="text-red-600 text-2xl uppercase">{props.selectLanguage ==="Romana" ? "Caracteristici" : "Features"}</p>
      <p className="mr-[50vw] text-white font-meidum text-left text-[1.2rem] max-md:mr-[30vw]">
    <span className="text-red-400 text-xl">{props.selectLanguage === "Romana" ? "1. Design Orientat către Siguranță:" : "1. Safety-Centric Design:"}</span><br/>
{props.selectLanguage === "Romana" ? "CaringZen acordă prioritate siguranței mai presus de toate. Cu tehnologie avansată de detecție a căderilor, urmărire GPS și un buton dedicat SOS, ceasul asigură o răspuns imediat în situații de urgență. Nu este doar un dispozitiv de păstrare a timpului, este un paznic care menține în siguranță pe cei dragi." : "CaringZen prioritizes safety above all. With advanced fall detection technology, GPS tracking, and a dedicated SOS button, the watch ensures immediate response in emergencies. It's not just a timekeeping device, it's a guardian that keeps your loved ones secure. "}<br/>

<span className="text-red-400 text-xl"> {props.selectLanguage === "Romana" ? "2. Monitorizare a Sănătății în Timp Real:" : "2. Real-Time Health Monitoring:"} </span><br/>
{props.selectLanguage === "Romana" ? "Pentru persoanele în îngrijire temporară și copii, CaringZen oferă funcționalități de monitorizare a sănătății în timp real. De la urmărirea ritmului cardiac la analiza somnului, îngrijitorii și asistenții de la spital pot accesa instantaneu date vitale de sănătate. Această informație nu este limitată doar la ceas, ci poate fi conectată fără probleme la telefoane sau laptopuri pentru o analiză cuprinzătoare." : "For individuals in foster care and kids, CaringZen offers real-time health monitoring features. From heart rate tracking to sleep analysis, caregivers and hospital assistants can access vital health data instantly. This information is not just confined to the watch but can be seamlessly connected to phones or laptops for comprehensive analysis."} <br/>

 <span className="text-red-400 text-xl">{props.selectLanguage === "Romana" ? "3. Notificări Personalizate:" : "3. Personalized Notifications:"} </span><br/>  
 {props.selectLanguage ==="Romana" ? "Primești notificări instantanee despre starea de bine a persoanei tale preferate. CaringZen te ține la curent cu activitățile lor, actualizările privind sănătatea și mementourile pentru medicamente, asigurându-se că rămâi conectat chiar și atunci când sunteți fizic despărțiți." : "Receive instant notifications about your favorite person's well-being. CaringZen keeps you informed about their activities, health updates, and medication reminders, ensuring that you stay connected even when physically apart. "}
<br/>

 <span className="text-red-400 text-xl">{props.selectLanguage === "Romana" ? "4. Conectivitate Fără Probleme:" : "4. Seamless Connectivity:"} </span><br/>
{props.selectLanguage === "Romana" ? "CaringZen se conectează fără probleme la smartphone-uri și PC-uri, furnizând asistenților de la spital valori și actualizări în timp real. Ceasul acționează ca un link fiabil, permițând îngrijitorilor și personalului spitalicesc să monitorizeze starea purtătorului, asigurându-se o reacție promptă la schimbările necesităților" :"CaringZen seamlessly connects to smartphones and PCs, providing hospital assistants with real-time values and updates. The watch acts as a reliable link, allowing caregivers and hospital staff to monitor the wearer's condition, ensuring a prompt response to changing needs."} <br/>

 <span className="text-red-400 text-xl">{props.selectLanguage === "Romana" ? "5. Interfață Ușor de Utilizat:" : "5. User-Friendly Interface:"}</span><br/>
{props.selectLanguage ==="Romana" ? "Proiectat cu simplitate în minte, CaringZen dispune de o interfață intuitivă. Asistenții de la spital pot accesa fără efort informații în timp real, făcându-l un instrument valoros în mediile de îngrijire. Ceasul prioritiează ușurința de utilizare pentru a se concentra asupra a ceea ce contează cu adevărat – bunăstarea purtătorului." : "Designed with simplicity in mind, CaringZen features an intuitive interface. Hospital assistants can effortlessly access real-time information, making it a valuable tool in caregiving environments. The watch prioritizes ease of use to focus on what truly matters – the well-being of the wearer."}</p>
    </div>
  );
}

export default Purpose;
