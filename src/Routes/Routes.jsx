import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Profile from "../Components/Profile";
import Home from "../Pages/Home";
import CardDetails from "../Pages/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {index:true,element:<Home></Home>},
        {
            path:'/profile',
            element: <Profile></Profile>,
           
        }
    ]
  },
  {path:'/card-details/:id',
    element:<CardDetails></CardDetails>,
   loader:()=>fetch('/card.json')
  },
  {path:'*',element: <h1>error-404</h1>}
]);
export default router;