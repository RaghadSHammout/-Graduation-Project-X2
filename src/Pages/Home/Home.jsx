import Hero from "../../Components/Hero/Hero";
import Explore from "../../Components/Explore/Explore";
import Frequently from "../../Components/Frequently/Frequently";
import Plans from "../../Components/Plans/Plans";
import StreamingDevices from "../../Components/StreamingDevices/StreamingDevices";
export default function Home() {
  return (
    <>
      <Hero />
       <Explore /> 
      <StreamingDevices />
      <Frequently /> 
      <Plans  addPlans= {true}/>
     
    </>
  );
}
