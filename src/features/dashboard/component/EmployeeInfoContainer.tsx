import  { useState } from 'react';
import  activeEmployeeIcon from '../../../assets/employeeIcon/EmployeeActive.svg'
import  inActiveEmployeeIcon from '../../../assets/employeeIcon/EmployeeInActive.svg'

import { DashboardButtonState } from '../hooks/useDashboardChangeStateHook';


const EmployeeinfoContainer = ({dashBoardActiveButton,makeButtonActive}:{dashBoardActiveButton:DashboardButtonState,makeButtonActive:(buttonType:string)=>void}) =>{
    
    const [dropDown,setDrown] = useState<boolean>(false)
    return (
        <div className=''>
        <div className={`${(dashBoardActiveButton.EmployeeInfo.isActive) && ' border-navBarActiveColor  text-navBarActiveColor   border-s-4 ' }    p-3 md:p-2  flex gap-6  rounded-sm`} onClick={()=>{
          makeButtonActive('employeeInfo')
        }}>
            <img src={(dashBoardActiveButton.EmployeeInfo.isActive)? activeEmployeeIcon :inActiveEmployeeIcon}/>
           
        <p className={ `${(dashBoardActiveButton.EmployeeInfo.isActive) && 'text-navBarActiveColor'}`}>Employee Info</p>
        <p className={`${(dropDown && dashBoardActiveButton.EmployeeInfo.isActive) ? 'text-navBarActiveColor':'text-black'} hover:cursor-default font-bold`} onClick={()=>{
          setDrown(!dropDown)
        }}>{(dropDown && dashBoardActiveButton.EmployeeInfo.isActive)?'v':'>'}</p>
    </div>
      <div className={`${(dropDown&& dashBoardActiveButton.EmployeeInfo.isActive)? 'block':'hidden'} ms-14 mt-1 text-textLightColor text-[12px]`}>
       <p>Add New</p>
       <p>Employee List</p>
       <p>Remove Employee</p>
      </div>
    </div>
    );
}


export default EmployeeinfoContainer