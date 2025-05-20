import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ---------------------- React Router Tools ----------------------
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// ---------------------- Auth Pages ----------------------
import { Signup, Signin } from "./";

// ---------------------- Public Pages ----------------------
import {
  About,
  Products,
  Membership,
  Home,
  BestSellingBooks,
  BookDetails,
  MyWishList,
  Cart,
  CheckOut,
  TopRelatedBooks,
  Profile,
  NewArrivals,
} from "./";

// ---------------------- Admin Pages ----------------------
import {
  AdminLayout,
  AdminNav,
  AdminProfile,
  AdminBooks,
  Orders,
  Dashboard,
  AddNewBook,
} from "./";

// ---------------------- Protected Routes ----------------------
import { ProtectedRoute, AdminProtectedRoute } from "./";

// Create the application routes
const router = createBrowserRouter([
  // Default redirect to /home
  {
    path: "/",
    element: <Navigate to="home" />,
  },

  // public routes Signin & Signup
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/logout",
    element: <Signin />,
  },

  //  protected routes (requires authentication)
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <App />, // main  layout
        children: [
          { path: "home", element: <Home /> },
          { path: "products", element: <Products /> },
          { path: "about", element: <About /> },
          { path: "membership", element: <Membership /> },
          { path: "bestsellingbooks", element: <BestSellingBooks /> },
          { path: "newarrivals", element: <NewArrivals /> },
          { path: "toprelatedboooks", element: <TopRelatedBooks /> },
          { path: "book/:bookName", element: <BookDetails /> },
          { path: "mywishlist", element: <MyWishList /> },
          { path: "cart", element: <Cart /> },
          { path: "checkout", element: <CheckOut /> },
          { path: "profile", element: <Profile /> },
        ],
      },
    ],
  },

  // Admin Routes (also protected)
  {
    path: "/admin",
    element: <AdminProtectedRoute />, // Protect admin layout and child routes
    children: [
      {
        path: "",
        element: <AdminLayout />, // Admin layout
        children: [
          { path: "order", element: <AdminNav /> },
          { path: "profile", element: <AdminProfile /> },
          { path: "books", element: <AdminBooks /> },
          { path: "addnewbook", element: <AddNewBook /> },
          { path: "orders", element: <Orders /> },
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
