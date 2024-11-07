import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddElement from './Components/AddElement/AddElement';
import UpdateElement from './Components/UpdateElement/UpdateElement';
import Root from './Layout/Root/Root';
import ShowElement from './Components/ShowElement/ShowElement';
import App from './App';
import Home from './Components/Home/Home';

const router = createBrowserRouter([

  {
  path:"/",
  element: <Root></Root>,
  children: [
    {
      path:"/",
      element: <Home></Home>,
      loader: ()=> fetch('http://localhost:5001/coffee'),
    },
    
    {
      path: "/addelement",
      element:<AddElement></AddElement>
    },
   
    {
      path:'/showelement',
      element: <App></App>,
      loader: ()=> fetch('http://localhost:5001/coffee'),
      
    },
    {
      path: "/showelement/updateelement/:id",
      element: <UpdateElement></UpdateElement>,
      loader: ({params}) => fetch(`http://localhost:5001/coffee/${params.id}`)
      
    },

  ]
  
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
