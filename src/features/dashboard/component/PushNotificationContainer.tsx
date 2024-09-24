import  activeNotificationIcon from '../../../assets/notificationIcon/notificationIconActive.svg'
import  inActiveNotificationIcon from '../../../assets/notificationIcon/notificationInActive.svg'
import { DashboardButtonState } from '../hooks/useDashboardChangeStateHook';

const PushNotificationContainer = ({dashBoardActiveButton,makeButtonActive}:{dashBoardActiveButton:DashboardButtonState,makeButtonActive:(buttonType:string)=>void}) => {
    return (
        <div className={`${(dashBoardActiveButton.pushNotification.isActive) && ' border-navBarActiveColor  text-navBarActiveColor ' }  bg-gray-400 bg-opacity-20  p-3 md:p-2   flex gap-6  border-s-4  rounded-sm`} onClick={()=>{
            makeButtonActive('pushNotification')
        }}>
        <img src={(dashBoardActiveButton.pushNotification.isActive)? activeNotificationIcon :inActiveNotificationIcon}/>
       
        <p className={ `${(dashBoardActiveButton.pushNotification.isActive) && 'text-navBarActiveColor'}`}>Push Notification</p>
    </div> 
    )
}

export default PushNotificationContainer 