import { useContext } from "react";
import { CreateMainContext } from "../../../";
import { CodeSquare } from "lucide-react";

const Dashboard = () => {
  const { Books } = useContext(CreateMainContext);

  return (
    <div className="p-4 sm:p-6 space-y-6 flex flex-col gap-4">
      {/* Stats Cards */}

      <div className="flex flex-col lg:flex-row gap-3 w-full  ">
        {/* total book */}
        <div className="totalBooks flex flex-col gap-2 shadow bg-gradient-to-r from-red-900 to-indigo-600 text-white shadow-black rounded-lg text-center py-5 flex-1 ">
          <p className="lg:text-4xl text-2xl font-bold">Total Books </p>
          <p className="lg:text-4xl text-2xl font-bold">{Books.length}</p>
        </div>

        {/* total order */}
        <div className="totalBooks flex flex-col gap-2 shadow bg-gradient-to-r from-red-900 to-indigo-600 text-white shadow-black rounded-lg text-center py-5  flex-1">
          <p className="lg:text-4xl text-2xl font-bold">Total Orders </p>
          <p className="lg:text-4xl text-2xl font-bold"> {Books.length}</p>
        </div>
      </div>

      {/* Sales Details */}
      <div className="bg-black p-4 sm:p-6 rounded-2xl shadow h-[250px] sm:h-[300px]"></div>

      {/* Book Orders Table */}
      <div className="table">
        <BookOrderInfo />
      </div>
    </div>
  );
};

const BookOrderInfo = () => {
  const { Books } = useContext(CreateMainContext);

  return (
    <>
      <h1 className="text-3xl font-bold py-3">Book Order Info</h1>
      <div className="w-full overflow-x-auto bg-gray-100 rounded-lg shadow">
        <table className="min-w-[800px] w-full text-sm lg:text-base">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="text-left p-3">Book Name</th>
              <th className="text-left p-3">Location</th>
              <th className="text-left p-3">Date-Time</th>
              <th className="text-left p-3">Piece</th>
              <th className="text-left p-3">Amount</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {Books.map((book, index) => (
              <tr key={index}>
                <td className="p-3">{book.title || "Unknown"}</td>
                <td className="p-3">{book.location || "Unknown"}</td>
                <td className="p-3">{book.publicationDate}</td>

                <td className="p-3">10</td>
                <td className="p-3">{book.price}</td>
                <td className="p-3">
                  <span className="text-sm font-medium text-orange-500">
                    {"Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Dashboard;
