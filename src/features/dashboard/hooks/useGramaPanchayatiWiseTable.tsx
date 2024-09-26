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

const useGramaPanchayatiWiseTable = () => {

  const theme = createTheme({
    typography:{
      fontFamily:'Poppins'
    }
  })

    interface Data {
        panchayatName:string,
        totalProperties:string,
        employeeName:string,
        numberOfHabitations:string,
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

      
 

       const createData = ( panchayatName:string,
        totalProperties:string,
        employeeName:string,
        numberOfHabitations:string,
        taxAmount:string,
        view:string
):Data => {

            return {
                panchayatName,
                totalProperties,
                employeeName,
                numberOfHabitations,
                taxAmount,
                view
        
            }

       }

       const rows  = [
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
        createData("#004562",'850','Vijayaewada','04','107580','...'),
       
       
        
       
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
      
      <div className='font-poppins ms-6 me-10'>
        
       
        <TableContainer component={Paper} sx={{fontFamily:'poppins'}} >
    <Table stickyHeader={true} sx={{ minWidth: 650,  [`& .${tableCellClasses.root}`]: {
      borderBottom: "none",
     
    } ,  }}   aria-label="simple table" >
       <ThemeProvider theme={theme}>
       <TableHead  sx={{  backgroundColor:'green'}}>
        <TableRow sx={{ [`& .${tableCellClasses.root}`]: {
      borderBottom: 1,
      borderBottomColor:'#E9ECFF'


     
    } , }}>
         <TableCell   align="center">
                <div className=' flex place-items-center justify-center gap-1 text-black'>
                    <p>NO</p>
                    <div className=' w-[18px] md:w-fit flex flex-col gap-[1px] '>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                    
                </div>
            </TableCell >
            <TableCell   align="center">
                <div className=' flex place-items-center justify-center gap-1 text-black'>
                    <p>Assessment Number</p>
                    <div className=' w-[18px] md:w-fit flex flex-col gap-[1px] '>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                    
                </div>
            </TableCell >

            <TableCell align="center" >
                <div className='flex place-items-center gap-1 text-black'>
                    <p>Full Name</p>
                    <div className='w-[18px] md:w-fit flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            
            <TableCell align="center" >
                <div className='flex place-items-center gap-1 text-black'>
                    <p>GramaPanchyat Name</p>
                    <div className=' w-[18px] md:w-fit flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            <TableCell align="center" >
                <div className='flex place-items-center gap-1 text-black'>
                    <p>Habitation Name</p>
                    <div className=' w-[18px] md:w-fit flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            <TableCell align="center" >
                <div className='flex place-items-center gap-1 text-black'>
                    <p>Task Amount</p>
                    <div className=' w-[18px] md:w-fit flex flex-col gap-[1px]'>
                      <img src={tableIconUp}/>
                      <img src={tableIconDown}/>
                    </div>
                </div>
            </TableCell>

            <TableCell align="center" >
                <div className='text-black'>
                    <p>View</p>
                   
                </div>
            </TableCell>
        </TableRow>
    </TableHead>
       </ThemeProvider>
    <TableBody>
     {
        rows.map((row,index)=>(

          

          
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, ':nth-child(9)':{backgroundColor:'#F5F7FF'} }}
                >
                  <TableCell component="th" scope="row" align="center" sx={{color:'#3E4954',fontSize:'12px'}} >
                    {index+1}
                  </TableCell>
                  <TableCell align="center" sx={{color:'#3E4954',  fontSize:'12px'}}>{row.panchayatName}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.totalProperties}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.employeeName}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.numberOfHabitations}</TableCell>
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'12px'}}>{row.taxAmount}</TableCell>
                  
                  <TableCell align="center" sx={{color:'#3E4954', fontSize:'14px',fontWeight:'bold'}}>{row.view}</TableCell>
                
                  
                </TableRow>

              
             
        ))
     }

    </TableBody>
    
    </Table>
    
   

  </TableContainer>
    



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


export default useGramaPanchayatiWiseTable











