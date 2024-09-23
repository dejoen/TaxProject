import ProgressBar from "../hooks/useProgressBar";

const UserAnalytics = () => {

    return (
        <div className="font-poppins   bg-white w-full md:w-[500px] rounded-md p-3 shadow-black shadow-md ">
        <div className=" w-full flex place-items-center justify-evenly p-3">
            <p className="md:w-1/2 font-bold">User Analytics</p>
            <div className="md:w-1/2 flex text-sm gap-4 bg-backgroundGrayColor rounded-lg p-1">
            <p className=" p-1">Weekly</p>
            <p className=" p-1">Monthly</p>
                <p className="bg-white rounded-md p-1">Today</p>
            </div>

        </div>
        <div className="flex place-items-center gap-4 p-3 justify-evenly mt-5">
          <div className="flex flex-col ">
            <p>1,739,4646</p>
            <p className="text-textLightColor text-sm ">Total owners</p>
          </div>
          <div className="flex flex-col ">
            <p>7,39,4646</p>
            <p className="text-textLightColor text-sm ">Active</p>
          </div>
          <div className="flex flex-col ">
            <p>7</p>
            <p className="text-textLightColor text-sm ">In Active</p>
          </div>

         </div>
         <div className="w-full flex flex-col   gap-5 mt-5">

         <div  className="w-full flex gap-3 justify-center place-items-center">
                <p className="text-textLightColor text-xs w-[80px]">Total Owners</p>
               <ProgressBar value={65} color="#DA0003"/>
             <p className="text-textLightColor text-xs  w-[40px] ">1,75,458</p>
            </div>

            <div  className="w-full flex gap-3 justify-center place-items-center">
                <p className="text-textLightColor text-xs w-[80px]">Active</p>
               <ProgressBar value={45} color="#000091"/>
                 <p className="text-textLightColor text-xs  w-[40px]">1,75,451</p>

            </div>

            

            <div  className="w-full flex gap-3 justify-center place-items-center">
                <p className="text-textLightColor text-xs w-[80px]">In Active</p>
               <ProgressBar  value={7} color="#027402"/>
            <p className="text-textLightColor text-xs   w-[40px]">7%</p>
            </div>
          
           </div>
            

        </div>
    );
}

export default UserAnalytics