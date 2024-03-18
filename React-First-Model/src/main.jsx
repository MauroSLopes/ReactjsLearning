import Posts, {loader as postsLoader} from './routes/Posts'
import NewPosts, {action as newPostsHandler} from './routes/NewPosts'
import PostDetails, {loader as postDetailsLoader} from './routes/PostDetails'
import RootLayout from './routes/RootLayout'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, 
    children: [{ 
      path: '/', element: <Posts />,
      loader: postsLoader, 
      children: [{ 
        path: '/create-post', element: <NewPosts />, action: newPostsHandler
      },
        {path: '/:id', element: <PostDetails />, 
        loader: postDetailsLoader
      }
    ]},]},]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
