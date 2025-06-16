import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import RootLayout from "../RootLayout/RootLayout";
import Home from "../Page/Home/Home";

import Register from "../Page/Register/Register";
import Login from "../Page/Login/Login";
import CreateEvent from "../Page/CreateEvent/CreateEvent";
import ComingEvent from "../Page/ComingEvent/ComingEvent";
import PageError from "../Share/PageError";
import Protect from "../Context/Protect";
import ComingDetails from "../Page/ComingDetails/ComingDetails";
import axios from "axios";
import JoinEvent from "../Page/JoinEvent/JoinEvent";
import ManageEvent from "../Page/ManageEvent/ManageEvent";
import Spinner from "../Share/Spinner";
import ManageEventUpdate from "../Page/ManageEventUpData/ManageEventUpdate";
import About from "../Page/About/About";

export  const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {index:true ,Component:Home},
      {path:"login",Component:Login},
      {path:"register",Component:Register},
      {path:"comingEvent",Component:ComingEvent},
      {path:"about",Component:About},
      {path:"createEvent",
        element:<Protect> <CreateEvent></CreateEvent></Protect>  },
        {path:"/details/:id",
          loader:({params})=>axios.get(`https://social-event-server-side.vercel.app/event-one/${params.id}`),
          element:<Protect>  <ComingDetails></ComingDetails>  </Protect>,
           hydrateFallbackElement:<Spinner></Spinner>
        },
        {path:"joinEvent",element:<Protect> <JoinEvent></JoinEvent> </Protect> },
        {path:"/update/:id",
         loader:({params})=>axios.get(`https://social-event-server-side.vercel.app/event-manage-one/${params.id}`),
          hydrateFallbackElement:<Spinner></Spinner>,
          Component:ManageEventUpdate},
        {path:"manageEvent",  element:<Protect><ManageEvent></ManageEvent></Protect>},
      {path:"/*",Component:PageError,
      
      }
    ]
  },
]);





