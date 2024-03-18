import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts'
import RootLayout from './routes/RootLayout'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import NewPosts, {action as newPostsHandler} from './routes/NewPosts'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, 
    children: [{ 
      path: '/', element: <Posts />,
      loader: postsLoader, 
      children: [{ 
        path: '/create-post', element: <NewPosts />, action: newPostsHandler
      },]},]},]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
