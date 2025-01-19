import Hero from "../../Components/Hero/Hero";
import Explore from "../../Components/Explore/Explore";
import Frequently from "../../Components/Frequently/Frequently";
import CardsShow from "../../Components/Reviews/CardsShow/CardsShow";
import Cards from "../../Components/StreamingDevices/Cards/Cards";
import Plans from "../../Components/Plans/Plans";

export default function Home() {
  return (
    <>
   
      <Hero />

      <Explore/>
      
      <Cards />
      <Frequently />

      <Plans /> 
    </>
  )
}
