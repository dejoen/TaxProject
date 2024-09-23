import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


import MainPage from './features/dashboard/pages/MainPage.tsx'
import DashBoard from './features/dashboard/pages/Dashboard.tsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<MainPage/>,
    children:[
      {
        path:'dashboard',
        element:<DashBoard/>,
      }
    ]
  },
 
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
    <RouterProvider router={router}/>
  
  
  </StrictMode>,
)
