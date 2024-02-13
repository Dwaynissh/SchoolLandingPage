import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/LayoutHolder/Layout";
import HomeScreen from "../LandingPage1/Homescreen/HomeScreen";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
