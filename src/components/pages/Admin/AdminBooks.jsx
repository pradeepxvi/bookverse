import { SquarePlus } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CreateMainContext, Image } from "../../../index";
import axios from "axios";

const AdminBooks = () => {
  // const [Books, setBooks] = useState([]);

  // const GETDATA = async () => {
  //   const book_url = "http://localhost:5104/api/Admin/books";
  //   try {
  //     const response = await axios.get(book_url);
  //     setBooks(response.data.items);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   GETDATA();
  // }, []);

  const { Books } = useContext(CreateMainContext);

  return (
    <div className="p-4 md:p-8">
      {/* Top buttons */}
      <div className="flex items-center justify-end mb-6">
        <NavLink
          to="/admin/addnewbook"
          className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition flex gap-1 items-center"
        >
          <SquarePlus />
          Add New Book
        </NavLink>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 font-semibold">Title</th>
              <th className="py-2 px-4 font-semibold">Author</th>
              <th className="py-2 px-4 font-semibold">Publisher</th>
              <th className="py-2 px-4 font-semibold">Publication Date</th>
              <th className="py-2 px-4 font-semibold">ISBN</th>
              <th className="py-2 px-4 font-semibold">Barcode</th>
              <th className="py-2 px-4 font-semibold">Availability</th>
            </tr>
          </thead>
          <tbody>
            {Books.slice(0, 7).map((book, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="flex items-center py-4 px-4 gap-3 min-w-[220px]">
                  <img
                    src={Image}
                    alt="Book Cover"
                    className="w-16 h-24 object-cover rounded"
                  />
                  <span className="font-medium">{book.title}</span>
                </td>
                <td className="py-2 px-4">{book.author || "Author"}</td>
                <td className="py-2 px-4">{book.publisher || "publisher"}</td>
                <td className="py-2 px-4">{book.publicationDate}</td>
                <td className="py-2 px-4">{book.isbn}</td>
                <td className="py-2 px-4">{book.barcode || "barcode"}</td>
                <td className="py-2 px-4">
                  {book.isAvailable ? "Available" : "Out of Stock"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBooks;
