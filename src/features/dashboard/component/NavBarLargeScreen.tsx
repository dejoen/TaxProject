 import roundIcon from '../../../assets/dashBoardRoundIcon.svg'
 import settingsIcon from '../../../assets/settingsIconActive.svg'
 import searchIcon from '../../../assets/search.svg'
 import  activeNotificationIcon from '../../../assets/notificationIcon/notificationIconActive.svg'

 import chatNotificationIcon from '../../../assets/notificationIcon/chatNotificationIconDActive.svg'

const NavBarLargeScreen = () =>{
    return (
        <div className=" hidden md:flex font-poppins w-full p-4  bg-white shadow-sm flex-wrap-reverse place-items-center justify-center  gap-8">
         <div className="w-[350px] ms-10 border  border-[#56778] rounded-[4px] p-2 flex">
         <input className="w-[90%] outline-none" type="text" placeholder="search here" />
         <img className="place-self-end justify-self-end " src={searchIcon}/>
         </div>
         <div className="flex gap-3 text-[14px] text-textLightColor ms-6 cursor-default"> 
            <p className='hover:text-primaryColor hover:underline'>About</p>
            <p className='hover:text-primaryColor hover:underline'>Tools</p>
            <p className='hover:text-primaryColor hover:underline'>Help</p>
         </div>
         <div className="flex">
          <div className="relative">
            <p className="absolute bg-primaryColor right-[-9px] bottom-7 w-[22px] h-[22px] rounded-full z-5 flex place-items-center justify-center text-white text-sm">21</p>
         
            <div  className="ms-5 bg-backgroundGrayColor w-[40px] h-[40px] rounded-md flex place-items-center justify-center">
             <img src={activeNotificationIcon} alt='chat'/>
          </div>

          </div>
          <div className="relative">
            <p className="absolute bg-primaryColor right-[-9px] bottom-7 w-[22px] h-[22px] rounded-full z-5 flex place-items-center justify-center text-white text-sm">21</p>
         
            <div  className="ms-5 bg-backgroundGrayColor  w-[40px] h-[40px] rounded-md flex place-items-center justify-center">
             <img src={chatNotificationIcon} alt='chat'/>
          </div>
          </div>

          <div className="relative">
            <p className="absolute bg-darkRed right-[-9px] bottom-7 w-[22px] h-[22px] rounded-full z-5 flex place-items-center justify-center text-white text-sm">21</p>
        
          <div  className="ms-5 bg-lightRed w-[40px] h-[40px] rounded-md flex place-items-center justify-center">
             <img src={settingsIcon} alt='settings'/>
          </div>
          </div>
          </div>
          <div>
            <div className="relative bg-primaryColor text-white p-1 rounded-md ms-20 pe-6 ">
               <img className="absolute right-[-20px] top-[-3px]  w-[40px]" src={roundIcon}/>
                <p className='text-wrap'>Hello, Harikrishna </p>
            </div>
          </div>
        </div>
    )
}

export default NavBarLargeScreen