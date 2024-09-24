import { RefObject, useState } from "react";


const useNavBarRef = () =>{
    const [navBarRef,setNavRef] =useState<RefObject<HTMLElement>>()
    return   {navBarRef,setNavRef}
}


export default useNavBarRef