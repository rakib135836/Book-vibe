import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Listed from './components/Listed/Listed';
import BookDetails from './components/BookDetails/BookDetails';

import ErrorPage from './components/ErrorPage/ErrorPage';
import MustRead from './components/MustRead/MustRead';
import Benefits from './components/Benefits/Benefits';
import FinalChart from './components/FinalChart/FinalChart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listed-books',
        element: <Listed></Listed>,
        loader:()=>fetch('../public/Books.json')
      },
      {
        path:'/book/:book_id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../public/Books.json')
      },
      {
        path:'/pages-to-read',
        element:<FinalChart></FinalChart>
      },
      {
        path:'/must-read',
        element:<MustRead></MustRead>
      },
      {
        path:'//benefits',
        element:<Benefits></Benefits>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
