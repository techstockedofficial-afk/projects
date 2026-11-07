import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotMatchingGreetingCall,{GetAllMobileNamesAndIphoneData} from './mobilesList.jsx'
import ChildComponent1 from './Childcomponents/ChildComponent1.jsx'
import ChildComponent2 from './Childcomponents/ChildComponent2.jsx'
import ChildComponentCss from './Childcomponents/ChildComonentCss.jsx'
import ChildComponentUIVerse from './Childcomponents/ChildComponentUIVerse.jsx'
import Card from '../card_components/Card.jsx'
import Leopard from '../src/assets/leopard.png'
import Jaguar from '../src/assets/jaguar.png'
import Lion from '../src/assets/lion.png'
import ProfileCard from '../projects/ProfileCard.jsx'
import DariusVeyron from '../src/assets/project1Assets/DariusVeyron.png'
import KaizenRourke from '../src/assets/project1Assets/KaizenRourke.png'
import CassianDrayke from '../src/assets/project1Assets/CassianDrayke.png'
import { CiUser } from "react-icons/ci";
import { CiTrophy } from "react-icons/ci";


//imp - import shortcut

// import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <div className='flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
    <ProfileCard driverImg={DariusVeyron} driverHeading="Darius Veyron" driverPara="Calm but ruthless, he'll use his experience to outsmart opponents, exploit their mistakes and defend his position at all costs. He knows exactly when to strike." driverTag1="Calculated" driverTag2="Ruthless" driverTag3="Consistent" driverChampionships=<CiTrophy/> driverChampionshipsNum="6" driverFollowing=<CiUser/> driverFollowingNum="22.3M"  followCurrentJourney="Follow His Journey"/>
     <ProfileCard driverImg={CassianDrayke} driverHeading="CassianDrayke" driverPara="A retired racing legend from a previous era, known for his unmatched experience and race intelligence. Even years after retirement, he can outsmart younger drivers with tricks only a veteran would know." driverTag1="Veteran" driverTag2="Legendary" driverTag3="Tactical "  driverChampionships=<CiTrophy/> driverChampionshipsNum="12" driverFollowing=<CiUser/> driverFollowingNum="43.1M" followCurrentJourney="Follow His Journey" />
      <ProfileCard driverImg={KaizenRourke} driverHeading="KaizenRourke" driverPara="Fearless and aggressive, he'll take every gap, attack every corner and push his car beyond its limits to win. He's willing to take risks others wouldn't dare." driverTag1="Aggressive" driverTag2="Fearless" driverTag3="Risk-Taker" driverChampionships=<CiTrophy/> driverChampionshipsNum="3" driverFollowing=<CiUser/> driverFollowingNum="19.7M" followCurrentJourney="Follow His Journey" />
  
</div>
 

{/* 
       <div className="grid grid-cols-1 sm:grid-cols-3">
    <Card img={Leopard} name="Leopard" age={18} email="Leopards don't have emails" />
    <Card img={Jaguar} name="Jaguar" age={12} email="Jaguars don't have emails" />
    <Card img={Lion} name="Lion" age={11} email="Lions don't have emails" />
  </div>
       */}
      

      
  </StrictMode>,
)






// export default App || or use this method

//import { App } from './App.jsx'

// If you use export default function App() → import without { }.
// import App from './App.jsx'