'use client';

import { useState } from 'react';
import { data } from '../../data/BagsData';
import CardsRow1 from '../../components/HomepageComponent/CardRow1/CardsRow1';
import PaymentPopup from '../../components/PaymentComponent';
import ProductDetail from '../../components/ProductDetail';

const BagDetail = () => {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [count, setCount] = useState(1);

  const handleBuyClick = (product, quantity) => {
    setSelectedProduct(product);
    setCount(quantity);
    setIsPaymentOpen(true);
  };

  return (
    <div>
      <ProductDetail 
        data={data} 
        productType="bags" 
        onBuyClick={handleBuyClick} 
      />
      <PaymentPopup
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        product={selectedProduct}
        quantity={count}
      />
      <div className="hidden lg:inline-block md:max-w-4xl p-6">
        <CardsRow1 data={data} productType="bags" /> {/* Updated */}
      </div>
    </div>
  );
};

export default BagDetail;