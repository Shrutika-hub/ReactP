import {React, Suspense}  from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import Cancer from "./routes/Cancer";
import Diabetes from "./routes/Diabetes";
import Team from "./routes/Team";
import Contact from "./routes/Contact";
import Feedback from "./routes/Feedback";
import Profile from "./routes/Profile";
import image2 from '../src/components/assets/image2.gif'

const AppLayout = () => (
  <>
    <Navbar />
    <div  style={{background:image2}} >
    <Suspense >
    <Outlet />
    </Suspense>
    </div>
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "cancer",
        element: <Cancer />,
      },
      {
        path: "diabetes",
        element: <Diabetes />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "feedback",
        element: <Feedback />,
      },

      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
