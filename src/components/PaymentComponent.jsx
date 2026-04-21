'use client';
import React, { useState, useRef, useEffect } from "react";
import Creditcard from '../assets/PaymentImage/Creditcard.png'
import Paypal from '../assets/PaymentImage/Paypal.png'
const PaymentPopup = ({ isOpen, onClose, product, quantity }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const popupRef = useRef(null);

  // Handle click outside to close popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setCardNumber("");
        setExpiryDate("");
        setCvv("");
        setName("");
        setAddress("");
      }, 2000);
    }, 1500);
  };

  const formatPrice = (price, qty) => {
    return (parseFloat(price) * qty).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-10">
      <div ref={popupRef} className="bg-white shadow-xl max-w-md w-full max-h-screen overflow-y-auto p-8">
        {isSuccess ? (
          <div className="p-6 text-center">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Payment Successful!</h3>
            <p className="text-gray-600">Your order has been placed successfully.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center border-b p-4">
              <h2 className="text-xl font-semibold">Checkout</h2>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 border-b">
              <div className="flex justify-between mb-2">
                <span className="font-medium">{product.name}</span>
                <span>${product.price}</span>
              </div>
              <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>Quantity</span>
                <span>{quantity}</span>
              </div>
              <div className="flex justify-between font-bold mt-4">
                <span>Total</span>
                <span>${formatPrice(product.price, quantity)}</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4">
              <div className="mb-4">
                <h3 className="text-lg font-medium mb-2">Payment Method</h3>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={paymentMethod === "credit"}
                      onChange={() => setPaymentMethod("credit")}
                      className="mr-2"
                    />
                    Credit Card
                    <img src={Creditcard} alt="" className="w-20"/>
                   
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === "paypal"}
                      onChange={() => setPaymentMethod("paypal")}
                      className="mr-2"
                    />
                    PayPal
                    <img src={Paypal} alt="" className="w-10"/>
                 
                  </label>
                </div>
              </div>
              
              {paymentMethod === "credit" && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      placeholder="1234 5678 9012 3456"
                      className="w-full border p-2 outline-none focus:border-black"
                      required
                    />
                  </div>
                  
                  <div className="flex space-x-4 mb-4">
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">Expiry Date</label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full border p-2 outline-none focus:border-black"
                        required
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium mb-1">CVV</label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        className="w-full border p-2 outline-none focus:border-black"
                        required
                      />
                    </div>
                  </div>
                </>
              )}
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Juk Ma"
                  className="w-full border p-2 outline-none focus:border-black"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Shipping Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border p-2 outline-none focus:border-black"
                  rows="3"
                  required
                ></textarea>
              </div>
              
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 font-medium hover:bg-gray-300 transition duration-300"
                >
                  Cancel
                </button>
                
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-1 bg-black text-white py-2 font-medium hover:bg-gray-800 transition duration-300"
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentPopup;