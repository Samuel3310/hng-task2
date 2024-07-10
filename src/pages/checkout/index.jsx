import React from "react";

function Checkout() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-200 rounded py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-200 rounded py-2 px-4"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2" htmlFor="payment-method">
              Payment Method
            </label>
            <div className="flex gap-4">
              <button
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                id="paypal-button"
              >
                PayPal
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
                id="credit-card-button"
              >
                Credit Card
              </button>
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                id="payoneer-button"
              >
                Payoneer
              </button>
            </div>
          </div>
          {/* Payment method specific fields will go here */}
        </div>
      </form>
    </div>
  );
}

export default Checkout;
