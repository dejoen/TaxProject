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

import {useLocation, useNavigate} from 'react-router-dom'


const SideBarLargeScreen = () =>{

    const path = useLocation()
   const pathName = path.pathname.split('/')[1]
   const navigate = useNavigate()
   
    const {dashBoardActiveButton,makeButtonActive} =  useDashboardChangeStateHook(pathName)

    return (
<div className=" hidden md:flex  flex-col w-[250px] min-h-[100vh] gap-5 cursor-default">
    <div className='mt-5 w-full flex flex-col place-items-center  '>
    <img className='h-[130px] w-[120px] ' src={logoIcon} alt='logoImage' />
    </div>

    <div className='flex flex-col gap-2 text-sm font-poppins'>

        <div className={`${(dashBoardActiveButton.dashBoard.isActive) && ' border-navBarActiveColor  text-navBarActiveColor border-s-4  ' }  p-2  flex gap-6   rounded-sm`} onClick={()=>{
     makeButtonActive('dashboard')
     navigate('/dashboard')
        }}>
            <img src={(dashBoardActiveButton.dashBoard.isActive)? activeDashboardIcon :inActiveDashboardIcon}/>
            <p className=' '>Dashboard</p>
        </div>

        <div className={`${(dashBoardActiveButton.propertyList.isActive) && ' border-navBarActiveColor  text-navBarActiveColor  border-s-4 ' }   p-2  flex gap-6   rounded-sm`} onClick={()=>{
      navigate('/property-list')
     makeButtonActive('propertyList')
    
        }}>
            <img src={(dashBoardActiveButton.propertyList.isActive)? activePropertyListIcon:inActivePropertyListIcon}/>
            <p ><span className={ `${(dashBoardActiveButton.propertyList.isActive) && 'text-navBarActiveColor'}`}>Property List</span > <span className= 'bg-primaryColor text-onPrimaryColor w-[32px] h-[32px] p-1 rounded-md'>25</span></p>
            
        </div>

        <div className={`${(dashBoardActiveButton.panchyatWise.isActive) && ' border-navBarActiveColor  text-navBarActiveColor  border-s-4 ' }    p-2  flex gap-6   rounded-sm`} onClick={()=>{
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
    );
}



export default SideBarLargeScreen