import { useContext, useState } from "react";
import { CreateMainContext } from "../../../MainContext";
import BookCard from "../../sub_components/BookCard";
import { Filters, EmptyBooks } from "../../../";

const NewArrivals = () => {
  const { newArrivalsBooks } = useContext(CreateMainContext);

  // ====================page navigation logic====================
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPage = Math.ceil(newArrivalsBooks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageBooks = newArrivalsBooks.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const HandleOnNext = (currentPage) => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const HandleOnBack = (currentPage) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // ====================page navigation logic====================

  if (newArrivalsBooks.length == 0) return <EmptyBooks />;

  return (
    <>
      {/* main div */}
      <div className="">
        <h1 className="text-3xl">New Arrivals</h1>

        <div className="px-4 py-5 flex lg:flex-row flex-col ">
          {/* filter */}
          <Filters className="" />
          <div className="books flex flex-wrap justify-center gap-5 ">
            {currentPageBooks.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
      {/* ====================page navigation ==================== */}
      <div className="flex gap-2 w-full justify-end items-center">
        <button
          className="bg-blue-400 py-2 px-5 rounded cursor-pointer"
          onClick={() => HandleOnBack(currentPage)}
        >
          Back
        </button>
        <p>
          {currentPage} of {totalPage}
        </p>
        <button
          className="bg-blue-400 py-2 px-5 rounded cursor-pointer"
          onClick={() => HandleOnNext(currentPage)}
        >
          Next
        </button>
      </div>
      {/* ====================page navigation ==================== */}
    </>
  );
};

export default NewArrivals;
