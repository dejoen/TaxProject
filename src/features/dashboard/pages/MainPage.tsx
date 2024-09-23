import MainBodyContainer from "../component/MainBodyContainer";
import SideBarLargeScreen from "../component/SideBarLargeScreen";


const MainPage = () => {
    return (
        <div className="w-full min-h-[100vh] overflow-y-hidden flex">
          <SideBarLargeScreen/>
           <MainBodyContainer/>
           
           
        </div>

    );
}

export default MainPage