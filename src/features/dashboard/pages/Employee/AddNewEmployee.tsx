import DashBoardDrawerSmallScreen from "../../component/DashBoardDrawerSmallScreen";
import AddEmployeeContainer from "../../component/Employee/AddEmployeeContainer";
import NavBarLargeScreen from "../../component/NavBarLargeScreen";
import NavBarSmallScreen from "../../component/NavBarSmallScreen";

const AddMewEmployee = () => {

    return (
 <div className="overflow-hidden">
     <NavBarSmallScreen/>
    <NavBarLargeScreen/>
    <DashBoardDrawerSmallScreen/>
    <AddEmployeeContainer/>
  </div>
    )
}


export default  AddMewEmployee