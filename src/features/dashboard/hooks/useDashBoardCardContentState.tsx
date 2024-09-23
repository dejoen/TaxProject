import {  useState } from "react"
 import peopleIcon   from '../../../assets/infoIcon/infoActive.svg'
import habitationIcon from '../../../assets/habitationIcon.svg'

 export interface CardContent {
    cardContentImage:string,
    cardContentHeader:string,
    cardContentBody:string
  }

const useDashBoardCardContentState = () =>{
 

    const [cardContents] = useState<CardContent[]>([
        {
            cardContentImage:habitationIcon,
            cardContentHeader:"25",
            cardContentBody:"Total Panchaytis"
        },
        {
            cardContentImage:habitationIcon,
            cardContentHeader:"29",
            cardContentBody:"Total Habitation"
        },
        {
            cardContentImage:peopleIcon,
            cardContentHeader:"120000",
            cardContentBody:"Total Properties"
        },
        {
            cardContentImage:peopleIcon,
            cardContentHeader:"1,75,458",
            cardContentBody:"Total Taxs"
        }

    ])
    

   

    return  cardContents
}


export default useDashBoardCardContentState