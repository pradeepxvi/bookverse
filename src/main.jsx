// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";

// // ---------------------- React Router Tools ----------------------
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Navigate,
// } from "react-router-dom";

// // ---------------------- Auth Pages ----------------------
// import { Signup, Signin } from "./";

// // ---------------------- Public Pages ----------------------
// import {
//   About,
//   Products,
//   Membership,
//   Home,
//   BestSellingBooks,
//   BookDetails,
//   MyWishList,
//   Cart,
//   CheckOut,
//   TopRelatedBooks,
//   Profile,
//   NewArrivals,
// } from "./";

// // ---------------------- Admin Pages ----------------------
// import {
//   AdminLayout,
//   AdminNav,
//   AdminProfile,
//   AdminBooks,
//   Orders,
//   Dashboard,
//   AddNewBook,
// } from "./";

// // ---------------------- Protected Routes ----------------------
// import { ProtectedRoute, AdminProtectedRoute } from "./";

// // Create the application routes
// const router = createBrowserRouter([
//   // Default redirect to /home
//   {
//     path: "/",
//     element: <Navigate to="home" />,
//   },

//   // public routes Signin & Signup
//   {
//     path: "/signin",
//     element: <Signin />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/logout",
//     element: <Signin />,
//   },

//   //  protected routes (requires authentication)
//   {
//     path: "/",
//     element: <ProtectedRoute />,
//     children: [
//       {
//         path: "/",
//         element: <App />, // main  layout
//         children: [
//           { path: "home", element: <Home /> },
//           { path: "products", element: <Products /> },
//           { path: "about", element: <About /> },
//           { path: "membership", element: <Membership /> },
//           { path: "bestsellingbooks", element: <BestSellingBooks /> },
//           { path: "newarrivals", element: <NewArrivals /> },
//           { path: "toprelatedbooks", element: <TopRelatedBooks /> },
//           { path: "book/:bookName", element: <BookDetails /> },
//           { path: "mywishlist", element: <MyWishList /> },
//           { path: "cart", element: <Cart /> },
//           { path: "checkout", element: <CheckOut /> },
//           { path: "profile", element: <Profile /> },
//         ],
//       },
//     ],
//   },

//   // Admin Routes (also protected)
//   {
//     path: "/admin",
//     element: <AdminProtectedRoute />, // Protect admin layout and child routes
//     children: [
//       {
//         path: "",
//         element: <AdminLayout />, // Admin layout
//         children: [
//           { path: "order", element: <AdminNav /> },
//           { path: "profile", element: <AdminProfile /> },
//           { path: "books", element: <AdminBooks /> },
//           { path: "addnewbook", element: <AddNewBook /> },
//           { path: "orders", element: <Orders /> },
//           { path: "dashboard", element: <Dashboard /> },
//         ],
//       },
//     ],
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// React Router
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages and Layouts
import App from "./App.jsx";
import { Signup, Signin } from "./";
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
import {
  AdminLayout,
  AdminNav,
  AdminProfile,
  AdminBooks,
  Orders,
  Dashboard,
  AddNewBook,
} from "./";
import { ProtectedRoute, AdminProtectedRoute } from "./";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Signin />} />

        {/* Protected routes */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
            <Route path="membership" element={<Membership />} />
            <Route path="bestsellingbooks" element={<BestSellingBooks />} />
            <Route path="newarrivals" element={<NewArrivals />} />
            <Route path="toprelatedbooks" element={<TopRelatedBooks />} />
            <Route path="book/:bookName" element={<BookDetails />} />
            <Route path="mywishlist" element={<MyWishList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminProtectedRoute />}>
          <Route path="" element={<AdminLayout />}>
            <Route path="order" element={<AdminNav />} />
            <Route path="profile" element={<AdminProfile />} />
            <Route path="books" element={<AdminBooks />} />
            <Route path="addnewbook" element={<AddNewBook />} />
            <Route path="orders" element={<Orders />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
