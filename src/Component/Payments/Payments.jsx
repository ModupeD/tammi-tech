import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PaymentOption = ({ title, description, icon: Icon, selected, onClick }) => (
  <motion.div
    className={`p-6 rounded-[30px] cursor-pointer transition-all duration-300 ${
      selected ? 'bg-[#c35661] text-white' : 'bg-white hover:shadow-lg'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-full ${selected ? 'bg-white/10' : 'bg-[#c35661]/10'}`}>
        <Icon className={selected ? 'text-white' : 'text-[#c35661]'} size={24} />
      </div>
      <div>
        <h3 className={`font-bold ${selected ? 'text-white' : 'text-[#171717]'}`}>{title}</h3>
        <p className={`text-sm ${selected ? 'text-white/80' : 'text-[#606060]'}`}>{description}</p>
      </div>
    </div>
  </motion.div>
);

const BankDetails = () => (
  <div className="bg-white p-6 rounded-[30px] mt-6">
    <h3 className="text-xl font-bold text-[#171717] mb-4">Bank Transfer Details</h3>
    <div className="space-y-4">
      <div>
        <p className="text-[#606060]">Bank Name</p>
        <p className="font-bold text-[#171717]">First Bank Nigeria</p>
      </div>
      <div>
        <p className="text-[#606060]">Account Name</p>
        <p className="font-bold text-[#171717]">Tammi Tech Limited</p>
      </div>
      <div>
        <p className="text-[#606060]">Account Number</p>
        <p className="font-bold text-[#171717]">0123456789</p>
      </div>
    </div>
  </div>
);

const StripePayment = () => (
  <div className="bg-white p-6 rounded-[30px] mt-6">
    <h3 className="text-xl font-bold text-[#171717] mb-4">Card Payment</h3>
    {/* Stripe Elements will be integrated here */}
    <form className="space-y-4">
      <div>
        <label className="block text-[#606060] mb-2">Card Number</label>
        <div id="card-number" className="p-3 border rounded-lg" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[#606060] mb-2">Expiry Date</label>
          <div id="card-expiry" className="p-3 border rounded-lg" />
        </div>
        <div>
          <label className="block text-[#606060] mb-2">CVC</label>
          <div id="card-cvc" className="p-3 border rounded-lg" />
        </div>
      </div>
      <button 
        className="w-full bg-[#c35661] text-white py-3 rounded-full font-bold hover:bg-[#c35661]/90 transition-colors"
      >
        Pay Now
      </button>
    </form>
  </div>
);

function Payments() {
  const [paymentMethod, setPaymentMethod] = useState('bank');

  return (
    <div className="bg-[#eddbd2] pt-20">
      <Helmet>
        <title>Make Payment - Tammi Tech Bootcamp</title>
        <meta name="description" content="Secure payment portal for Tammi Tech Bootcamp courses" />
      </Helmet>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#171717] mb-4">Make Payment</h1>
          <p className="text-[#606060] max-w-2xl mx-auto">
            Choose your preferred payment method to complete your enrollment
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PaymentOption
              title="Bank Transfer"
              description="Pay directly to our Nigerian bank account"
              icon={() => <svg>...</svg>}
              selected={paymentMethod === 'bank'}
              onClick={() => setPaymentMethod('bank')}
            />
            <PaymentOption
              title="Card Payment"
              description="Pay securely with your credit/debit card"
              icon={() => <svg>...</svg>}
              selected={paymentMethod === 'stripe'}
              onClick={() => setPaymentMethod('stripe')}
            />
          </div>

          {paymentMethod === 'bank' ? <BankDetails /> : <StripePayment />}
        </div>
      </div>
    </div>
  );
}

export default Payments; 