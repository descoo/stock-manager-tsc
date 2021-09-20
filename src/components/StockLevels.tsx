import React from "react";
import { useAppSelector } from "../app/hooks";
import "./StockLevels.css";

const StockLevels: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);

  return (
    <div className="card">
      <h1 className="title">STOCK LEVELS</h1>
      <div className="outer">
        {products.map((product) => (
          <div key={product.id} className="inner">
            <div className="product">
              <h4 className="name">{product.title}</h4>
              <p className="text">{product.avgPrice.toFixed(2)}</p>
            </div>
            <p className="text">{product.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockLevels;
