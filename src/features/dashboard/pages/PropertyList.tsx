import DashBoardDrawerSmallScreen from "../component/DashBoardDrawerSmallScreen";
import NavBarLargeScreen from "../component/NavBarLargeScreen";
import NavBarSmallScreen from "../component/NavBarSmallScreen";
import PropertyListBodyContainer from "../component/PropertyListBodyContainer";



const PropertyList = () =>  {

    return (
  <div className="overflow-hidden">
     <NavBarSmallScreen/>
    <NavBarLargeScreen/>
    <DashBoardDrawerSmallScreen/>
    <PropertyListBodyContainer/>
  </div>
    );
}


export default PropertyList

