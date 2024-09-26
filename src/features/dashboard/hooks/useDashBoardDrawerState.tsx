import {  useEffect,  useState } from "react"



const useDashBoardDrawerState = () =>{


   useEffect(()=>{
    const navBar = document.querySelector('.DashBoardScreen') as HTMLElement
    if(navBar !=null){
     setDrawerRef(navBar)
    }
   },[])
  

    
    const [drawerRef,setDrawerRef] = useState<HTMLElement |null>(null)
   
   
    const openDrawer = () =>{
       
        if(drawerRef!=null){
            drawerRef.style.display ='flex'
            drawerRef.style.transform="translateX(0%)"
          }
        if(drawerRef!=null   ){
            drawerRef.animate([
                {
                    transform:"translateX(100%)"
                },
                {
                    transform:"translateX(0%)",
                    
                }
            ],{
                duration:500
            })
          
     
    }
}

    
    const closeDrawer = () =>{
    
    if(drawerRef!=null  ){
        drawerRef.animate([
            {
                transform:"translateX(0%)"
            },
            {
                transform:"translateX(100%)",
                
            }
        ],{
            duration:500
        }).onfinish=()=>{
           if(drawerRef!=null ){
             drawerRef.style.display ='none'
           }
        }
      
   
    }else{
        alert('null')
    }
    
    }

    return {openDrawer,closeDrawer,drawerRef,setDrawerRef}

}


export default useDashBoardDrawerState