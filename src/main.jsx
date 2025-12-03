import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogIn from "./pages/logIn/logIn";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Home from "./component/Home/Home";
import Dashboards from "./pages/Dashboards/Dashboards";
import Leads from "./pages/Leads/Leads";
import Proposal from "./pages/Proposal/Proposal";
import Application from "./pages/Application/Application";
import Settings from "./pages/Settings/Settings";
import Offers from "./pages/Offers/Offers";
import Bank from "./pages/Bank/Bank";
import MyDashboard from "./pages/MyDashboard/MyDashboard";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />,
  },
  {
    path: "forgetpassword",
    element: <ForgetPassword />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboards/>,
        children: [
          {
            path:"mydashboard",
            element: <MyDashboard/>
          },{
            path:"admindashboard",
            element:<AdminDashboard/>
          }
        ]
      },
      {
        path: "/leads",
        element: <Leads/>
      },
      {
        path: "/proposal",
        element: <Proposal/>
      },
      {
        path: "/application",
        element: <Application/>
      },
      {
        path: "/bank",
        element: <Bank/>
      },
      {
        path: "/offers",
        element: <Offers/>
      },
      {
        path: "/settings",
        element: <Settings/>
      },

    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
