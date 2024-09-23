import { useState } from 'react';
import  activeInfoIcon from '../../../assets/infoIcon/infoActive.svg'
   import  inActiveInfoIcon from '../../../assets/infoIcon/infoInActive.svg'

import { DashboardButtonState } from '../hooks/useDashboardChangeStateHook';


const MandalInformationContainer = ({dashBoardActiveButton,makeButtonActive}:{dashBoardActiveButton:DashboardButtonState,makeButtonActive:(buttonType:string)=>void}) => {
    const [dropDown,setDrown] = useState<boolean>(false)
    return (
        <div className=''>
        <div className={`${(dashBoardActiveButton.MandalInfo.isActive) && ' border-navBarActiveColor  text-navBarActiveColor ' }  bg-gray-400 bg-opacity-20  p-2  flex gap-6  border-s-4  rounded-sm`}onClick={()=>{
            makeButtonActive('mandalInfo')
        }}>
            <img src={(dashBoardActiveButton.MandalInfo.isActive)? activeInfoIcon :inActiveInfoIcon}/>
           
        <p className={ `${(dashBoardActiveButton.MandalInfo.isActive) && 'text-navBarActiveColor'}`}>Mandal Info</p>
        <p className={`${(dropDown && dashBoardActiveButton.MandalInfo.isActive) ? 'text-navBarActiveColor':'text-black'}  font-bold`} onClick={()=>{
          setDrown(!dropDown)
        }}>{(dropDown && dashBoardActiveButton.MandalInfo.isActive)?'v':'>'}</p>
    </div>
      <div className={`${(dropDown && dashBoardActiveButton.MandalInfo.isActive)? 'block':'hidden'} ms-14 mt-1 text-textLightColor text-[12px]`}>
       <p>Add Mandal</p>
       <p>Mandal List</p>
       
      </div>
    </div>
    );
}

export default MandalInformationContainer