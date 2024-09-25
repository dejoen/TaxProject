
import useDashBoardDrawerState from "../hooks/useDashBoardDrawerState";
import logoIcon from '../../../assets/logoIcon.svg'
import  activeDashboardIcon from '../../../assets/dashboardIcon/dashboardIcon.svg'
import  inActiveDashboardIcon from '../../../assets/dashboardIcon/dashboardIconInActive.svg'
import  activepanChyantIcon from '../../../assets/panchyantIcon/panchyantWiceActive.svg'
import  inActivepanChyantIcon from '../../../assets/panchyantIcon/panchyatWiseIconInActive.svg'
import  activePropertyListIcon from '../../../assets/propertyListIcon/propertyListIconActive.svg'
import  inActivePropertyListIcon from '../../../assets/propertyListIcon/propertyListIconInActive.svg'

import EmployeeinfoContainer from './EmployeeInfoContainer';
import MandalInformationContainer from './MandalInformationContainer';
import PanChyatInfoContainer from './PanChyatInfoContainer';
import PushNotificationContainer from './PushNotificationContainer';
import useDashboardChangeStateHook from '../hooks/useDashboardChangeStateHook';
import { useLocation, useNavigate } from "react-router-dom";


const DashBoardDrawerSmallScreen = () => {
    
  
    const {closeDrawer} = useDashBoardDrawerState()
    const path = useLocation()
    const pathName = path.pathname.split('/')[1]
   
    const {dashBoardActiveButton,makeButtonActive} =  useDashboardChangeStateHook(pathName)

    const navigate = useNavigate()


 
    return (
<div className={`DashBoardScreen bg-white hidden flex-col md:hidden absolute w-[280px] h-dvh  shadow-black shadow-lg  top-0 right-0 bottom-0 z-50`} >
       
    <p className="m-3 font-bold text-2xl" onClick={()=>{
      
       closeDrawer()
    }}>{'X'}</p>
  
    <div className="w-full flex flex-col gap-5">
    <div className='mt-5 w-full flex flex-col place-items-center  '>
    <img className='h-[130px] w-[120px] ' src={logoIcon} alt='logoImage' />
    </div>


    <div className=' w-full  flex-col  text-sm font-poppins  gap-2'>

        <div className={`${(dashBoardActiveButton.dashBoard.isActive) && ' border-navBarActiveColor  text-navBarActiveColor ' }    p-3  flex gap-6  border-s-4  rounded-sm`} onClick={()=>{
     makeButtonActive('dashboard')
     navigate('/dashboard')

        }}>
            <img src={(dashBoardActiveButton.dashBoard.isActive)? activeDashboardIcon :inActiveDashboardIcon}/>
            <p className=' '>Dashboard</p>
        </div>

        <div className={`${(dashBoardActiveButton.propertyList.isActive) && ' border-navBarActiveColor  text-navBarActiveColor ' }    p-3  flex gap-6  border-s-4  rounded-sm`} onClick={()=>{
     makeButtonActive('propertyList')
     navigate('/property-list')
        }}>
            <img src={(dashBoardActiveButton.propertyList.isActive)? activePropertyListIcon:inActivePropertyListIcon}/>
            <p ><span className={ `${(dashBoardActiveButton.propertyList.isActive) && 'text-navBarActiveColor'}`}>Property List</span > <span className= 'bg-primaryColor text-onPrimaryColor w-[32px] h-[32px] p-1 rounded-md'>25</span></p>
            
        </div>

        <div className={`${(dashBoardActiveButton.panchyatWise.isActive) && ' border-navBarActiveColor  text-navBarActiveColor ' }   p-3 flex gap-6  border-s-4  rounded-sm`} onClick={()=>{
     makeButtonActive('panchyatWise')
     navigate('/grama-panchayati')
        }}>
        <img src={(dashBoardActiveButton.panchyatWise.isActive)? activepanChyantIcon :inActivepanChyantIcon}/>
            <p className={ `${(dashBoardActiveButton.panchyatWise.isActive) && 'text-navBarActiveColor'}`}>Panchyat Wise</p>
        </div>

        <EmployeeinfoContainer makeButtonActive={makeButtonActive} dashBoardActiveButton={dashBoardActiveButton}/>
        <MandalInformationContainer makeButtonActive={makeButtonActive} dashBoardActiveButton={dashBoardActiveButton}/>
        <PanChyatInfoContainer  makeButtonActive={makeButtonActive} dashBoardActiveButton={dashBoardActiveButton}/>
        <PushNotificationContainer makeButtonActive={makeButtonActive} dashBoardActiveButton={dashBoardActiveButton}/>
    </div>
    </div>
</div>

    );
}

 


export default  DashBoardDrawerSmallScreen