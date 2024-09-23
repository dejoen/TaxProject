import { useState } from "react";

 export interface DashboardButtonState {
    dashBoard:{
        isActive:boolean
    },
    propertyList:{
        isActive:boolean
    },
    panchyatWise:{
        isActive:boolean
    },
    EmployeeInfo:{
        isActive:boolean
    },
    MandalInfo:{
        isActive:boolean
    },
    panchyatInfo:{
        isActive:boolean
    },
    pushNotification:{
        isActive:boolean
    }
}

 
  const useDashboardChangeStateHook = (path:string) =>{

     
    const  [dashBoardActiveButton,setDashBoardActiveButton] = useState<DashboardButtonState>(()=>{
            switch(path){
                case 'dashboard':
                    return {
                        dashBoard:{
                            isActive:true
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:false
                        }
                }
            
            default: 
                return {
                    dashBoard:{
                        isActive:false
                    },
                    propertyList:{
                        isActive:false
                    },
                    panchyatWise:{
                        isActive:false
                    },
                    EmployeeInfo:{
                        isActive:false
                    },
                    MandalInfo:{
                        isActive:false
                    },
                    panchyatInfo:{
                        isActive:false
                    },
                    pushNotification:{
                        isActive:false
                    }
            }
         }
    })

    const makeButtonActive = (buttonTyped:string) =>{
         if(buttonTyped){
            switch(buttonTyped){
            case 'dashboard':{
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:true
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:false
                        }
                    }
                })
              return   
            }
          
            case 'propertyList':{
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:false
                        },
                        propertyList:{
                            isActive:true
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:false
                        }
                    }
                })
              return   
            }

            case 'panchyatWise':{
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:false
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:true
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:false
                        }
                    }
                })
              return   
            }

            case 'employeeInfo':{
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:false
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:true
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:false
                        }
                    }
                })
              return   
            }

            case 'mandalInfo':{
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:false
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:true
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:false
                        }
                    }
                })
              return   
            }

            case 'panchyatInfo':{
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:false
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:true
                        },
                        pushNotification:{
                            isActive:false
                        }
                    }
                })
              return   
            }

            case 'pushNotification':{
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:false
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:true
                        }
                    }
                })
              return   
            }

            default :  {
                setDashBoardActiveButton((prevState)=>{
                    return {
                        ...prevState,
                        dashBoard:{
                            isActive:false
                        },
                        propertyList:{
                            isActive:false
                        },
                        panchyatWise:{
                            isActive:false
                        },
                        EmployeeInfo:{
                            isActive:false
                        },
                        MandalInfo:{
                            isActive:false
                        },
                        panchyatInfo:{
                            isActive:false
                        },
                        pushNotification:{
                            isActive:false
                        }
                    }
                })
              return   
            }

        }
         }
    }
   
     return  {dashBoardActiveButton,makeButtonActive}
   
 }

 

 export default useDashboardChangeStateHook

  

