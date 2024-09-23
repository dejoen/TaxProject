import { CardContent } from "../hooks/useDashBoardCardContentState"

const DashBoardCard = ({cardContentImage,
    cardContentHeader,
    cardContentBody}:CardContent) => {
    return (
        <div className="font-poppins bg-white shadow-black shadow-sm rounded-xl w-full md:w-[200px] h-[120px] flex place-items-center justify-center gap-5">
           <div className="bg-backgroundGrayColor w-[40px] h-[40px] rounded-full flex place-items-center justify-center">
           <img src={cardContentImage} />
           </div>
            <div className="text-sm flex flex-col place-items-center gap-2">
               <p className="font-bold">{cardContentHeader}</p>
               <p>{cardContentBody}</p>
            </div>
        </div>
    )
}

export default DashBoardCard