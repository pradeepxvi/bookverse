// ---------------------- Auth Components ----------------------
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

// ---------------------- Sub Components ----------------------
import Logo from "./components/sub_components/Logo";
import NavBar from "./components/sub_components/NavBar";
import Footer from "./components/sub_components/Footer";
import BookCard from "./components/sub_components/BookCard";
import EmptyBooks from "./components/sub_components/EmptyBooks";

// ---------------------- Pages ----------------------
import About from "./components/pages/About";
import Membership from "./components/pages/Membership";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home/Home";
import BestSellingBooks from "./components/pages/BestSelling/BestSellingBooks";
import BookDetails from "./components/pages/BooksDetails/BookDetails";
import MyWishList from "./components/pages/MyWishList/MyWishList";
import Cart from "./components/pages/Cart/Cart";
import CheckOut from "./components/pages/CheckOut/CheckOut";
import TopRelatedBooks from "./components/pages/TopRelatedBooks/TopRelatedBooks";
import Filters from "./components/pages/Filters.jsx/Filters";
import Profile from "./components/pages/Profile/Profile";
import NewArrivals from "./components/pages/NewArrivals/NewArrivals";

// ---------------------- Admin Pages ----------------------
import AdminNav from "./components/pages/Admin/AdminNav";
import AdminLayout from "./components/pages/Admin/AdminLayout";
import AdminProfile from "./components/pages/Admin/AdminProfile";
import AdminBooks from "./components/pages/Admin/AdminBooks";
import Orders from "./components/pages/Admin/Orders";
import Dashboard from "./components/pages/Admin/Dashboard";
import AddNewBook from "./components/pages/Admin/AddNewBook";

// ---------------------- Protected Routes ----------------------
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import AdminProtectedRoute from "./components/ProtectedRoutes/AdminProtectedRoute";

// ---------------------- Context ----------------------
import MainContext, { CreateMainContext } from "./MainContext";

// ---------------------- Assets ----------------------
import Image from "./assets/rr.jpg";

// ---------------------- Exporting All ----------------------
export {
  // Auth
  Signin,
  Signup,

  // Sub Components
  Logo,
  NavBar,
  Footer,
  BookCard,
  EmptyBooks,

  // Pages
  About,
  Membership,
  Products,
  Home,
  BestSellingBooks,
  BookDetails,
  MyWishList,
  Cart,
  CheckOut,
  TopRelatedBooks,
  Filters,
  Profile,
  NewArrivals,

  // Admin Pages
  AdminNav,
  AdminLayout,
  AdminProfile,
  AdminBooks,
  Orders,
  Dashboard,
  AddNewBook,

  // Protected Routes
  ProtectedRoute,
  AdminProtectedRoute,

  // Context
  MainContext,
  CreateMainContext,

  // Assets
  Image,
};
