import { createBrowserRouter } from "react-router-dom";
import Dash from "./pages/Dash";
import Places from "./pages/Places";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dash />,
  },
  {
    path: "/:id",
    element: <Places />,
  },
]);
