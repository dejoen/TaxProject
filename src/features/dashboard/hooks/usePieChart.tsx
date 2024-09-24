    
     import {PieChart}  from '@mui/x-charts'


 const usePieChart = () => {

    return (
        <div>
           <PieChart

series={[
    {
      data: [
        { id: 0, value: 20,  color:'#000091'  },
        { id: 1, value: 15, color:'#DA0003' },
        { id: 2, value: 7,  color:'#027402' },
        
      ],
      innerRadius:20,
      color:''
    },
  ]}
  width={200}
  height={100}
  
           
           />
        </div>
    )
 }

 export default usePieChart