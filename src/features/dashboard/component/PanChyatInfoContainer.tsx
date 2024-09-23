
import { useState } from 'react';
import  activeInfoIcon from '../../../assets/infoIcon/infoActive.svg'
   import  inActiveInfoIcon from '../../../assets/infoIcon/infoInActive.svg'
import { DashboardButtonState } from '../hooks/useDashboardChangeStateHook';


const PanChyatInfo  = ({dashBoardActiveButton,makeButtonActive}:{dashBoardActiveButton:DashboardButtonState,makeButtonActive:(buttonType:string)=>void}) => {

    const [dropDown,setDrown] = useState<boolean>(false)
    return (
        <div className=''>
        <div  className={`${(dashBoardActiveButton.panchyatInfo.isActive) && ' border-navBarActiveColor  text-navBarActiveColor ' }  bg-gray-400 bg-opacity-20  p-2  flex gap-6  border-s-4  rounded-sm`} onClick={()=>{
            makeButtonActive('panchyatInfo')
        }}>
            <img src={(dashBoardActiveButton.panchyatInfo.isActive)? activeInfoIcon:inActiveInfoIcon}/>
           
        <p className={ `${(dashBoardActiveButton.panchyatInfo.isActive) && 'text-navBarActiveColor'}`}>Panchyat Info</p>
        <p className={`${(dropDown && dashBoardActiveButton.panchyatInfo.isActive) ? 'text-navBarActiveColor':'text-black'}  font-bold `} onClick={()=>{
          setDrown(!dropDown)
        }}>{(dropDown && dashBoardActiveButton.panchyatInfo.isActive)?'v':'>'}</p>
    </div>
      <div className={`${(dropDown && dashBoardActiveButton.panchyatInfo.isActive)? 'block':'hidden'} ms-14 mt-1 text-textLightColor text-[12px]`}>
       <p>Add  Grama Panchayati </p>
       <p>Add Habitation  </p>
       <p>Habitation List </p>
       
      </div>
    </div>
    );
}

export default PanChyatInfo