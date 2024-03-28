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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/listed-books',
        element: <Listed></Listed>
      },
      {
        path:'/book/:book_id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../public/Books.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
