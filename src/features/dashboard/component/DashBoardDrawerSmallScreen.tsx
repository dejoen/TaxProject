import  { useRef }  from "react";
import useDashBoardDrawerState from "../hooks/useDashBoardDrawerState";


const DashBoardDrawerSmallScreen = () => {
    const dashBoardRef = useRef<HTMLDivElement > (null)

 const {openDrawer,setOpenDrawer,closeDrawer} = useDashBoardDrawerState()
    return (
<div className={`hidden absolute w-[280px] h-dvh bg-orange-700 top-0 right-0 bottom-0 z-50`} ref={dashBoardRef}>
    <p className="m-3 font-bold text-2xl" onClick={()=>{
      
       closeDrawer(dashBoardRef)
    }}>{'X'}</p>
</div>

    );
}

 


export default  DashBoardDrawerSmallScreen