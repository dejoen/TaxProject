 import {LinearProgress} from '@mui/material'
 import { createTheme, ThemeProvider  } from '@mui/material/styles';
 import { styled } from '@mui/material/styles'

  

  

const useProgressBar = ({color,value}:{color:string,value:number}) => {

    const themeL = createTheme({
        palette: {
           secondary: {
               main: color,
               light: '#000091',
               dark: '#000091',
               contrastText: '#F3F3F3'
           }
        }
      })
  const CustomLinearProgress = styled(LinearProgress)(()=>({
     height:5,
     borderRadius: 5,
     width:170,
    
   }))
   
    return (
       <>
       
       <ThemeProvider theme={themeL}>
       <CustomLinearProgress variant='determinate' value={value}     color='secondary' />
       </ThemeProvider>
     
    </>
    )
}


export default useProgressBar