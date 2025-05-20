import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CreateMainContext } from "../../MainContext";
import { Heart } from "lucide-react";
import { Image } from "../..";

const BookCard = ({ book }) => {
  const { HandleCartItemOnAdd, HandleWishlistOnAdd } =
    useContext(CreateMainContext);

  return (
    <div className="max-w-sm bg-gray-700 border border-gray-200 rounded-lg shadow-sm">
      <div className="relative">
        <NavLink to={`/book/${book.title}`} state={{ book }}>
          <img
            className="rounded-t-lg w-full h-auto"
            // src={`https://picsum.photos/400/250?random=${parseInt(
            //   Math.floor(Math.random() * 100)
            // )}`}
            src={Image}
            alt={book.title || "Book cover"}
          />
        </NavLink>

        {/* Heart icon */}
        <button
          title="Add to Favorites"
          className="absolute top-2 right-2 p-2 bg-white rounded-full hover:bg-gray-100 shadow"
          onClick={() => {
            HandleWishlistOnAdd(book);
          }}
        >
          <Heart className="text-red-500 w-5 h-5" />
        </button>
      </div>

      <div className="p-5">
        <NavLink to={`/book/${book.title}`} state={{ book }}>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-violet-300">
            {book.title || "Book Title"}
          </h5>
        </NavLink>
        <p className="mb-2 font-semibold text-gray-300">
          Author: {book.author || "Unknown Author"}
        </p>
        <div className="flex items-center gap-4 mb-4">
          <span className=" text-gray-300">Rs. {book.price}</span>
        </div>

        <div className="flex gap-3">
          <NavLink
            to={`/book/${book.title}`}
            state={{ book }}
            className="flex-1 text-center px-4 py-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold"
          >
            Buy Now
          </NavLink>

          {/* in production replace || with && */}

          <button
            onClick={() => HandleCartItemOnAdd(book)}
            className="flex-1 px-4 py-2 text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-400 font-semibold cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
