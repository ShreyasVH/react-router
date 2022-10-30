import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/home";
import Page1 from "./containers/page1";
import Page2 from "./containers/page2";

export default createBrowserRouter([
 {
   path: "/",
   element: <Home />
 },
 {
   path: "/page1",
   element: <Page1 />
 },
 {
   path: "/page2",
   element: <Page2 />
 }
]);