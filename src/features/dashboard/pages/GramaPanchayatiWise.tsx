import DashBoardDrawerSmallScreen from "../component/DashBoardDrawerSmallScreen";
import GramaPanchayatiWiseContainer from "../component/GramaPanchayatiWiseContainer";
import NavBarLargeScreen from "../component/NavBarLargeScreen";
import NavBarSmallScreen from "../component/NavBarSmallScreen";


const GramaPanchayatiWise = () => {

    return  <div className="bg-[#F9F9F9]">
    <NavBarSmallScreen/>
    <NavBarLargeScreen/>
    <DashBoardDrawerSmallScreen/>
    <GramaPanchayatiWiseContainer/>
    
    </div>
}

export default GramaPanchayatiWise