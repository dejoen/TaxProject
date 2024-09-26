import DashBoardDrawerSmallScreen from "../component/DashBoardDrawerSmallScreen";
import NavBarLargeScreen from "../component/NavBarLargeScreen";
import NavBarSmallScreen from "../component/NavBarSmallScreen";
import PropertyListBodyContainer from "../component/PropertyListBodyContainer";



const PropertyList = () =>  {

    return (
  <div className="overflow-hidden  bg-[#F9F9F9]">
     <NavBarSmallScreen/>
    <NavBarLargeScreen/>
    <DashBoardDrawerSmallScreen/>
    <PropertyListBodyContainer/>
  </div>
    );
}


export default PropertyList

