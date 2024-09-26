import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'


import MainPage from './features/dashboard/pages/MainPage.tsx'
import DashBoard from './features/dashboard/pages/Dashboard.tsx'
import PropertyList from './features/dashboard/pages/PropertyList.tsx'
import GramaPanchayatiWise from './features/dashboard/pages/GramaPanchayatiWise.tsx'
import AddMewEmployee from './features/dashboard/pages/Employee/AddNewEmployee.tsx'



const router = createBrowserRouter([
  { index: true, element: <Navigate to="/dashboard" replace /> },
  {
    path:'/',
    element:<MainPage/>,
    children:[
      {
        path:'dashboard',
        element:<DashBoard/>,
      },
      {
        path:'property-list',
        element:<PropertyList/>,
      },
      {
        path:'grama-panchayati',
        element:<GramaPanchayatiWise/>,
      },
      {
        path:'add-new-employee',
        element:<AddMewEmployee/>,
      }
    ]
  },
 
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
  
    <RouterProvider router={router}/>
  
  
  </StrictMode>,
)
