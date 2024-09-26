import { useEffect } from "react";
import MainBodyContainer from "../component/MainBodyContainer";
import SideBarLargeScreen from "../component/SideBarLargeScreen";
import useDashBoardDrawerState from "../hooks/useDashBoardDrawerState";



const MainPage = () => {
      const {drawerRef} = useDashBoardDrawerState()
    useEffect(()=>{
      window.addEventListener('resize',()=>{
        if( drawerRef!= null && drawerRef.style.display === 'flex' ){
         
            drawerRef.style.display ="none"
            
        }
       })

       return () =>{
        window.removeEventListener('resize',()=>{})
       }
    },[drawerRef])
    return (
        <div className="w-full min-h-[100vh] overflow-y-hidden flex">
          <SideBarLargeScreen/>
           <MainBodyContainer/>
           
           
        </div>

    );
}

export default MainPage