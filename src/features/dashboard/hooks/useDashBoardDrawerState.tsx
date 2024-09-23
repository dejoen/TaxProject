import {  RefObject, useState } from "react"



const useDashBoardDrawerState = () =>{

    const [isDrawerDrawerOpen,setDrawerDrawerOpen] = useState<boolean>(false)

    const openDrawer = (ref:{ref:RefObject<HTMLElement>}) =>{
     
    }

    
    const closeDrawer = (ref:RefObject<HTMLElement>) =>{
    
    if(ref){
        
    }
    }

    return {openDrawer,setDrawerDrawerOpen,closeDrawer}

}


export default useDashBoardDrawerState