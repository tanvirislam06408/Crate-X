import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes.jsx'
import AuthProvier, { AuthContext } from './Provider/AuthProvier.jsx'
import { Bounce, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvier>
      <RouterProvider router={router}></RouterProvider>
       <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
     </AuthProvier>
  </StrictMode>,
)
