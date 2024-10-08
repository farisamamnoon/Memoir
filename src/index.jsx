import { createBrowserRouter } from "react-router-dom";
import Dash from "./pages/Dash";
import Places from "./pages/Places";
// import { getTemp } from "./pages/FullScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dash />,
  },
  {
    path: "/place/:id",
    element: <Places />,
    // loader: getTemp,
  },
]);
