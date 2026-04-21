'use client';

import { useState } from 'react';
import { data } from '../../data/HoodiesData';
import CardsRow1 from '../../components/HomepageComponent/CardRow1/CardsRow1';
import PaymentPopup from '../../components/PaymentComponent';
import ProductDetail from '../../components/ProductDetail';

const HoodyDetail = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(1);

  const handleBuyClick = (product, quantity) => {
    setSelectedProduct(product); // Set the selected product
    setCount(quantity);          // Set the quantity
    setIsPaymentOpen(true);      // Open the payment popup
  };

  return (
    <div>
      <ProductDetail 
        data={data} 
        productType="hoodie" 
        onBuyClick={handleBuyClick} 
      />
      <PaymentPopup
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        product={selectedProduct}
        quantity={count}
      />
      <div className="hidden lg:inline-block md:max-w-4xl p-6">
        <CardsRow1 data={data} productType="hoodies" />
      </div>
    </div>
  );
};

export default HoodyDetail;