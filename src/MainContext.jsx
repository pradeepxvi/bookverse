import { createContext, useEffect, useState, useReducer } from "react";
import { toast } from "react-toastify";

import Books from "../src/Data/books.json";

export const CreateMainContext = createContext({});

const newArrivalsBooks = Books.filter(
  (book, index) => book.isNewArrival == true
);
console.log(newArrivalsBooks);
const bestSellingBooks = Books.filter(
  (book, index) => book.isBestSelling == true
);
console.log(bestSellingBooks);

const MainContext = ({ children }) => {
  const genres = [
    "Social Fiction",
    "Mystery",
    "Biography & Memoirs",
    "Business & Economics",
    "Children",
    "Fiction",
    "Graphic Novel",
    "Health & Fitness",
    "History",
  ];

  const languages = ["English", "Nepali", "Others"];
  const forms = ["Paperback", "Hardcover", "E-Book", "Audiobook"];

  const [filtersToApply, setFiltersToApply] = useState([]);

  const HandleFilterOnAdd = (filter) => {
    setFiltersToApply((prev) => [...prev, filter]);
  };

  const HandleFilterOnRemove = (filter) => {
    setFiltersToApply((prev) => prev.filter((item) => item !== filter));
  };

  const CartReducer = (currentItems, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [action.payload, ...currentItems];
      case "DELETE_ITEM":
        return currentItems.filter(
          (item, index) => index !== action.payload.index
        );
      case "DELETE_ALL_ITEM":
        return [];
      default:
        return currentItems;
    }
  };

  const [cartItems, dispatchCartItems] = useReducer(CartReducer, []);

  const HandleCartItemOnAdd = (book) => {
    dispatchCartItems({ type: "ADD_ITEM", payload: book });
    toast.success("Item added to cart.");
  };

  const HandleCartItemOnDelete = (index) => {
    dispatchCartItems({ type: "DELETE_ITEM", payload: { index } });
    toast.success("Item deleted from cart.");
  };

  const HandleCartItemOnDeleteALL = () => {
    dispatchCartItems({ type: "DELETE_ALL_ITEM" });
    toast.info("All cart items deleted.");
  };

  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce(
      (acc, item) => acc + (item.discountedPrice || item.price),
      0
    );
    const newShippingCost = newSubtotal > 0 ? 50 : 0;
    setSubtotal(newSubtotal);
    setShipping(newShippingCost);
    setTotal(newSubtotal + newShippingCost);
  }, [cartItems]);

  const wishlistReducer = (currentItems, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [action.payload, ...currentItems];
      case "DELETE_ITEM":
        return currentItems.filter(
          (item, index) => index !== action.payload.index
        );
      case "DELETE_ALL":
        return [];
      default:
        return currentItems;
    }
  };

  const [wishlist, dispatchWishlist] = useReducer(wishlistReducer, []);

  const HandleWishlistOnAdd = (item) => {
    dispatchWishlist({ type: "ADD_ITEM", payload: item });
    toast.info("Item added to wishlist!");
  };

  const HandleWishlistOnDelete = (index) => {
    dispatchWishlist({ type: "DELETE_ITEM", payload: { index } });
    toast.info("Item removed from wishlist.");
  };

  const HandleWishlistOnDeleteAll = () => {
    dispatchWishlist({ type: "DELETE_ALL" });
    toast.info("Wishlist cleared.");
  };

  const addAllWishlistToCart = () => {
    wishlist.forEach((item) => {
      HandleCartItemOnAdd(item);
    });
    HandleWishlistOnDeleteAll();
    toast.info("All wishlist items added to cart.");
  };

  const orderReducer = (currentItems, action) => {
    switch (action.type) {
      case "NEW_ITEM":
        return [action.payload, ...currentItems];
      case "DELETE_ITEM":
        return currentItems.filter((item) => item.id !== action.payload.id);
      case "DELETE_ALL":
        return [];
      default:
        return currentItems;
    }
  };

  const [order, dispatchOrder] = useReducer(orderReducer, []);

  const handleOrderOnAdd = (orderItem) => {
    dispatchOrder({ type: "NEW_ITEM", payload: orderItem });
  };

  const handleOrderOnDelete = (id) => {
    dispatchOrder({ type: "DELETE_ITEM", payload: { id } });
  };

  const handleOrderOnDeleteAll = () => {
    dispatchOrder({ type: "DELETE_ALL" });
  };

  return (
    <CreateMainContext.Provider
      value={{
        // books
        Books,
        newArrivalsBooks,
        bestSellingBooks,

        // filters
        genres,
        languages,
        forms,
        HandleFilterOnAdd,
        HandleFilterOnRemove,
        filtersToApply,

        // cart
        cartItems,
        HandleCartItemOnAdd,
        HandleCartItemOnDelete,
        HandleCartItemOnDeleteALL,
        subtotal,
        shipping,
        total,

        // wishlist
        wishlist,
        HandleWishlistOnAdd,
        HandleWishlistOnDelete,
        HandleWishlistOnDeleteAll,
        addAllWishlistToCart,

        // order
        order,
        handleOrderOnAdd,
        handleOrderOnDelete,
        handleOrderOnDeleteAll,
      }}
    >
      {children}
    </CreateMainContext.Provider>
  );
};

export default MainContext;
