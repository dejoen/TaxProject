import useDashBoardCardContentState from "../hooks/useDashBoardCardContentState";
import DashBoardCard from "./DashBoardCard";
import PropertiesDashboardContainer from "./PropertiesDashboardContainer";
import UserAnalytics from "./UserAnalytics";


const DashBoardBodyContainer = () => {
     const cardContents = useDashBoardCardContentState()
    return (
     <div className="w-full h-fit flex  flex-col  p-3 font-poppins bg-white overflow-y-auto">
         <div className="w-full flex flex-shrink md:flex-nowrap  md:place-items-center md:justify-center" >
            <div className="w-1/2">
                <p>Dashboard</p>
                <p className="text-sm text-textLightColor">Welcome Admin!</p>
            </div>
            <div className="w-1/2 flex flex-col place-items-center  md:flex-row flex-shrink  justify-center md:place-items-end md:justify-end gap-8 md:me-20 ">
               <div className="flex flex-shrink md:gap-5 place-items-center" >
                <img src="/" />
                <p className="text-sm text-textLightColor">Filter</p>
                <p>{'>'}</p>
               </div>

               <div className="flex gap-8 place-items-center" >
                <img src="/" />
                <div>
                <p className="text-[12px] font-bold text-textLightColor">Filter Period</p>
                <p className="text-[12px] text-textLightColor">4 June 2024 - 4 July 2024</p>
                </div>
                <p>{'>'}</p>
               </div>
            </div>
         </div>
         <div className="m-10 flex place-items-center justify-center flex-wrap gap-10">
          {
            cardContents.map((cardContent,index)=>(
                <DashBoardCard key={index} cardContentHeader={cardContent.cardContentHeader} cardContentBody={cardContent.cardContentBody} cardContentImage={cardContent.cardContentImage}/>
            ))
          }
         </div>
         <div className="w-full md:m-3 flex gap-5 h-full  justify-center flex-wrap ">
           <PropertiesDashboardContainer/>
          <UserAnalytics/>
         </div>
     </div>
    );
}

export default  DashBoardBodyContainer