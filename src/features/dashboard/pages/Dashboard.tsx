import DashBoardBodyContainer from "../component/DashBoardBodyContainer";
import DashBoardDrawerSmallScreen from "../component/DashBoardDrawerSmallScreen";
import NavBarLargeScreen from "../component/NavBarLargeScreen";
import NavBarSmallScreen from "../component/NavBarSmallScreen";

const DashBoard =  () => {
    
    return (
     <div className=" bg-[#F9F9F9]">
    <NavBarSmallScreen/>
    <NavBarLargeScreen/>
    <DashBoardDrawerSmallScreen/>
    <DashBoardBodyContainer/>
     </div>
    );
}

export default DashBoard