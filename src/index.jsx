import { createBrowserRouter } from "react-router-dom";
import Dash, { dashLoader } from "./pages/Dash";
import Places, { placeLoader } from "./pages/Places";
// import { getTemp } from "./pages/FullScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dash />,
    loader: dashLoader,
  },
  {
    path: "/:id",
    element: <Places />,
    loader: placeLoader,
  },
]);
