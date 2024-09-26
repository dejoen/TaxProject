import useDashBoardCardContentState from "../hooks/useDashBoardCardContentState";
import DashBoardCard from "./DashBoardCard";
import PropertiesDashboardContainer from "./PropertiesDashboardContainer";
import UserAnalytics from "./UserAnalytics";
import filterIcon from '../../../assets/filterIcon.svg'
import calendarIcon from '../../../assets/calendarIcon.svg'


const DashBoardBodyContainer = () => {
     const cardContents = useDashBoardCardContentState()
    return (
     <div className="w-full h-fit flex  md:ms-8 flex-col  md:ps-3 font-poppins  bg-opacity-5 overflow-y-auto overflow-x-hidden ">
         <div className="w-full    flex flex-shrink md:flex-nowrap  md:place-items-center md:justify-center mt-2" >
            <div className="w-1/2">
                <p>Dashboard</p>
                <p className="text-sm text-textLightColor">Welcome Admin!</p>
            </div>
            <div className="w-1/2 flex flex-col place-items-center  md:flex-row flex-shrink  justify-center md:place-items-end md:justify-end gap-8 md:me-20 ">
               <div className="flex flex-shrink md:gap-5 place-items-center bg-[#F4F5F9] p-1 md:p-2 rounded-md" >
                <img src={filterIcon}/>
                <p className="text-sm text-textLightColor">Filter</p>
                <p>{'>'}</p>
               </div>

               <div className="flex gap-8 place-items-center bg-[#F4F5F9] p-1 md:p-2 rounded-md" >
                <img src={calendarIcon} />
                <div>
                <p className="text-[12px] font-bold text-textLightColor">Filter Period</p>
                <p className="text-[12px] text-textLightColor">4 June 2024 - 4 July 2024</p>
                </div>
                <p>{'>'}</p>
               </div>
            </div>
         </div>
         <div className="w-full mt-10    flex flex-wrap   place-items-center justify-center md:justify-start gap-11">
          {
            cardContents.map((cardContent,index)=>(
                <DashBoardCard key={index} cardContentHeader={cardContent.cardContentHeader} cardContentBody={cardContent.cardContentBody} cardContentImage={cardContent.cardContentImage}/>
            ))
          }
         </div>
         <div className="w-full  flex   place-items-center justify-start   h-full mt-8  flex-wrap  gap-8 mb-5 ">
           <PropertiesDashboardContainer/>
          <UserAnalytics/>
         </div>
     </div>
    );
}

export default  DashBoardBodyContainer