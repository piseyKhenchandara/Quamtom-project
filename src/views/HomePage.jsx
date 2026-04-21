
import AutoCarousel from '../components/HomepageComponent/HomeAutoCarousel'

import MenuIcon from "../components/HomepageComponent/MenuIcon"
import CardsRow1 from "../components/HomepageComponent/CardRow1/CardsRow1";
import HomepageCard from "../components/HomepageComponent/HomepageCard";
import {data} from '../data/LuxaryProuducts'// Assuming you have data in this file
import BackgroundImage from '../components/BackgroundImage';
const HomePage = () => {
    return (
        <>
      
      
      <div className="flex flex-col  items-center w-full ">

        <AutoCarousel/>
        <BackgroundImage />
        <MenuIcon/>
        <CardsRow1 data={data}/>
        <HomepageCard />
        <div className="bg-black w-full">
 
        </div>
      
        
        

    
      </div>



        </>
    )
}
export default HomePage;