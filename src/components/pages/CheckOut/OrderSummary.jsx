import React, { useContext } from "react";
import { CreateMainContext } from "../../../MainContext";

const OrderSummary = () => {
  const { total, cartItems } = useContext(CreateMainContext);

  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <ul className="divide-y divide-gray-200 mb-4">
        {cartItems.map((book) => (
          <li key={book.id} className="py-2 flex justify-between">
            <span>{book.title}</span>
            <span> ₹ {book.discountedPrice ?? book.price}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-bold text-lg">
        <span>Total</span>
        <span>₹ {total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
