import filterIcon from '../../../assets/filterIcon.svg'
import Table from '../hooks/usePropertyListTable'

const PropertyListBodyContainer = ()  => {

    
    return (

        <div className="w-full h-dvh flex  flex-col  p-3 font-poppins  bg-opacity-5 overflow-y-auto overflow-x-hidden bf">
         <div className="w-full flex flex-shrink md:flex-nowrap  md:place-items-center md:justify-center m-3 p-4 " >
            <div className="w-1/2 mt-1 md:mt-0">
                <p>Property List</p>
            </div>
            <div className=" w-full md:w-1/2 flex flex-col place-items-center  md:flex-row flex-shrink  justify-center md:place-items-end md:justify-end gap-8 md:me-20 ">
               <div className=" w-full md:w-fit   flex flex-shrink md:gap-5  justify-evenly  place-items-center bg-[#F4F5F9] p-1 md:p-2 rounded-md" >
                <img src={filterIcon}/>
                <p className="text-sm text-textLightColor ">Filter</p>
                <p className='ms-3'>{'>'}</p>
               </div>
              </div>
              </div> 
              <Table/>
        </div>
    )
}


export default PropertyListBodyContainer