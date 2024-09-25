import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { createTheme,ThemeProvider } from '@mui/material';
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
//import React from 'react';
import '../../../index.css'
import tableIconUp from '../../../assets/tableIconUp.svg'
import tableIconDown from '../../../assets/tableIconDown.svg'
import prevIcon from '../../../assets/ic_left_chevron.svg'
import nextIcon from '../../../assets/ic_right_chevron.svg'

const useTable = () => {

  const theme = createTheme({
    typography:{
      fontFamily:'"Poppins",cursive'
    }
  })

    interface Data {
        asssessmentNumber:string,
        date:string,
        fullName:string,
        gramaPanchyatName:string,
        habitationName:string,
        taxAmount:string,
        view:string

    }


  /*  interface TablePaginationActionsProps {
        count: number;
        page: number;
        rowsPerPage: number;
        onPageChange: (
          event: React.MouseEvent<HTMLButtonElement>,
          newPage: number,
        ) => void;
      }*/

      
 

       const createData = (asssessmentNumber:string,
        date:string,
        fullName:string,
        gramaPanchyatName:string,
        habitationName:string,
        taxAmount:string,
        view:string):Data => {

            return {asssessmentNumber,
                date,
                fullName,
                gramaPanchyatName,
                habitationName,
                taxAmount,
                view,
            }

       }

       const rows  = [
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
        createData("#004562",'26 March 2024, 12:42 AM','Harikrishna','Vijayaewada','Vijayaewada','52','...'),
       
        
       
       ] as Data[]



    
      /*  const [page, setPage] = React.useState(2);
        const [rowsPerPage, setRowsPerPage] = React.useState(10);
      
        const handleChangePage = (
          event: React.MouseEvent<HTMLButtonElement> | null,
          newPage: number,
        ) => {
            alert('called...')
          setPage(newPage);
        };
      
        const handleChangeRowsPerPage = (
          event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        ) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }*/

    return (
      
      <div className='font-poppins'>
        <ThemeProvider theme={theme}>
        <TableContainer component={Paper} sx={{fontFamily:'poppins'}} >
    <Table stickyHeader={true} sx={{ minWidth: 650,  [`& .${tableCellClasses.root}`]: {
      borderBottom: "none"
    } ,  }}   aria-label="simple table" >
    <TableHead  >
        <TableRow sx={{ borderBottom:1,borderBottomColor:'#969BA0'}}>
            <TableCell   align="center">
                <div className='flex place-items-center gap-1'>
                    <p>Assessment Number</p>
                    <div className='flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell >
            <TableCell  align="center" >
                <div className='flex place-items-center justify-center gap-1'>
                    <p>Date</p>
                    <div className='flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            <TableCell align="center" >
                <div className='flex place-items-center gap-1'>
                    <p>Full Name</p>
                    <div className='flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            
            <TableCell align="center" >
                <div className='flex place-items-center gap-1'>
                    <p>GramaPanchyat Name</p>
                    <div className='flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            <TableCell align="center" >
                <div className='flex place-items-center gap-1'>
                    <p>Habitation Name</p>
                    <div className='flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            <TableCell align="center" >
                <div className='flex place-items-center gap-1'>
                    <p>Task Amount</p>
                    <div className='flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            <TableCell align="center">
                <div>
                    <p>View</p>
                   
                </div>
            </TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
     {
        rows.map((row)=>(

          

          
                <TableRow
                  key={row.asssessmentNumber}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, ':nth-child(9)':{backgroundColor:'#F5F7FF'} }}
                >
                  <TableCell component="th" scope="row" align="center" sx={{color:'#3E4954',fontSize:'12px'}} >
                    {row.asssessmentNumber}
                  </TableCell>
                  <TableCell align="center" sx={{color:'#3E4954',  fontSize:'12px'}}>{row.date}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.fullName}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.gramaPanchyatName}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.habitationName}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.taxAmount}</TableCell>
                  
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'14px',fontWeight:'bold'}}>{row.view}</TableCell>
                
                  
                </TableRow>

              
             
        ))
     }

    </TableBody>
    
    </Table>
    
   

  </TableContainer>
        </ThemeProvider>



 <div className='w-full m-4 text-sm text-textLightColor flex place-items-center justify-center' >
   <div className='w-1/3'>
   <p>Showing 10 from 46 data</p>
   </div>
    <div className=' flex justify-end w-[68%] pe-5'>
     <div className='w-full flex justify-end gap-2 '>
      <div className=' flex bg-primaryColor rounded-md p-2 text-white justify-center place-items-center md:gap-2'>
        <img src={prevIcon}/>
        <p>Previous</p>
      </div >
      <div className='bg-[#E3E4EB] w-1/4 flex place-content-evenly p-1 rounded-md'>
       <div className='flex w-[40px] h-[35px] place-items-center justify-center '>
       <p className=' text-lg text-primaryColor'>1</p>
       </div>
       <div className='flex w-[40px] h-[35px] place-items-center justify-center  '>
       <p className=' text-lg text-primaryColor'>2</p>
       </div>
       <div className='flex w-[40px] h-[35px] place-items-center justify-center bg-white rounded-md '>
       <p className=' text-lg text-primaryColor'>3</p>
       </div>
       <div className='flex w-[40px] h-[35px] place-items-center justify-center  '>
       <p className=' text-lg text-primaryColor'>4</p>
       </div>
      </div>
      <div className=' flex bg-primaryColor rounded-md p-2 text-white justify-center place-items-center gap-2'>
       
        <p>Next</p>
        <img src={nextIcon}/>
      </div >

     </div>
    </div>
 </div>
      </div>
    
 
    );
}


export default useTable