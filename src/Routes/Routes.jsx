import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Profile from "../Components/Profile";
import Home from "../Pages/Home";
import CardDetails from "../Pages/CardDetails";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivetRoute from "../Provider/PrivetRoute";
import Loading from "../Components/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: '/profile',
        element: <Profile></Profile>,

      }
    ]
  },
  {
    path: '/card-details/:id',
    element: <PrivetRoute><CardDetails></CardDetails></PrivetRoute>,
    loader: () => fetch('/card.json'),
    hydrateFallbackElement:<Loading></Loading>
  },
  { path: '/login', element: <Login></Login> },
  { path: '/register', element: <Register></Register> },
  { path: '*', element: <h1>error-404</h1> }
]);
export default router;