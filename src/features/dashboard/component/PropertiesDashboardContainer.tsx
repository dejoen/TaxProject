import PieChart from "../hooks/usePieChart";
import ProgressBar from "../hooks/useProgressBar";
import dotIcon from '../../../assets/dot.svg'

const PropertiesDashboardContainer = ()  => {
   
    return (
        <div className="font-poppins  bg-white w-full md:w-[500px] rounded-md p-3 shadow-black shadow-md ">
        <div className=" w-full flex gap-3 place-items-center justify-evenly p-3">
            <p className="md:w-1/2 font-bold">Properties</p>
            <div className="md:w-1/2 flex text-sm gap-4 bg-backgroundGrayColor rounded-lg p-1">
            <p className=" p-1">Weekly</p>
            <p className=" p-1">Monthly</p>
                <p className="bg-white rounded-md p-1">Today</p>
            </div>

        </div>
        <div className="w-full p-3 bg-lightGreen flex">
            <div className="flex place-items-center gap-4 w-1/2">
            <p className="bg-darkGreen rounded-md w-fit text-white p-2">25</p>
            <div className="flex justify-center items-center gap-2">
            <p>New <span className="w-[11px] h-[11px] bg-[url(`${}`)]"></span></p>
            <img src={dotIcon}/>
            </div>
            </div>
            <div className="w-1/2 flex place-items-center justify-end">
             <p className="text-primaryColor">Manage<span className="text-center">{' >'}</span></p>
            </div>
        </div>

        
        <div className="flex place-items-center  gap-4 p-3 justify-evenly mt-2">
          <div className="flex flex-col ">
            <p>25</p>
            <p className="text-textLightColor text-sm ">Totat properties</p>
          </div>
          <div className="flex flex-col ">
            <p>25</p>
            <p className="text-textLightColor text-sm ">paid</p>
          </div>
          <div className="flex flex-col ">
            <p>25</p>
            <p className="text-textLightColor text-sm ">pending</p>
          </div>
         
        </div>
        <div className="p-3 mt-4 flex   w-full flex-wrap place-items-center justify-center">
           <div className=" ms-10 md:w-[10%]  w-full flex justify-center place-content-center ">
            <PieChart/>
           </div>
           <div className="w-fit flex flex-col justify-center place-items-center gap-5">
            <div  className="w-full flex gap-3 justify-center place-items-center">
                <p className="text-textLightColor text-xs w-[80px]">Total Task</p>
               <ProgressBar value={25} color="#000091"/>
                 <p className="text-textLightColor text-xs ">25%</p>

            </div>

            <div  className="w-full flex gap-3 justify-center place-items-center">
                <p className="text-textLightColor text-xs w-[80px]">Paid Task</p>
               <ProgressBar value={15} color="#DA0003"/>
             <p className="text-textLightColor text-xs ">15%</p>
            </div>

            <div  className="w-full flex gap-3 justify-center place-items-center">
                <p className="text-textLightColor text-xs w-[80px]">Pending Task</p>
               <ProgressBar  value={7} color="#027402"/>
            <p className="text-textLightColor text-xs ">7%</p>
            </div>
          
           </div>
            
          </div>
    </div>
    );
}

export default PropertiesDashboardContainer