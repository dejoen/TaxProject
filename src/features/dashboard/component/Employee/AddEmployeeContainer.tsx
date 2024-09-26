

const AddEmployeeContainer = () => {

    return (

   <div className="w-full font-poppins ">
     <p className="underline mt-12 ms-5 md:ms-0">Add New Employee</p>
     <div className="  h-fit m-5 border-black border p-3 flex flex-col gap-3 rounded-2xl ">
        <div className="w-full flex flex-col">
            <label>fullname</label>
            <input type="text" className="w-full p-4 outline-none bg-[#F2F4F7] " placeholder="Enter Full Name"/>

        </div>

        <div className="w-full flex flex-col">
            <label>fullname</label>
            <input type="text" className="w-full p-4 outline-none bg-[#F2F4F7] " placeholder="Enter Full Name"/>

        </div>

        <div className="w-full flex  gap-4 m-2">
        <div className="p-2">
            <p>Gender</p>
            <select className="md:w-[150px] p-1 bg-[#F2F4F7]">
                <option >select</option>
                <option >Male</option>
                <option >Female</option>
            </select>
        </div>
        <div className="p-2">
        <p>Age</p>
        <input type="text" className="w-[50%] md:w-[80%] outline-none bg-[#F2F4F7]  p-1" placeholder="Enter Full Name"/>

        </div>
       
        </div>
     

        <div className="w-full flex flex-col">
            <label>fullname</label>
            <input type="text" className="w-full p-4 outline-none bg-[#F2F4F7] " placeholder="Enter Full Name"/>

        </div>


        <div className="w-full flex flex-col">
            <label>fullname</label>
            <input type="text" className="w-full p-4 outline-none bg-[#F2F4F7] " placeholder="Enter Full Name"/>

        </div>
   

     
        <div className="w-full flex flex-col">
            <label>fullname</label>
            <input type="text" className="w-full p-4 outline-none bg-[#F2F4F7] " placeholder="Enter Full Name"/>

        </div>
       

       <div className="w-full mt-4">
        <div className="bg-[#007AFF] w-fit text-white p-2 rounded-xl ms-auto me-auto mb-5">
            Add Employee
        </div>
       </div>
       

     </div>

     
  
  
   </div>
    );
}

export default  AddEmployeeContainer