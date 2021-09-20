import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { remove, setId } from "../features/products/productsSlice";

const RemoveStocks: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  const [selectedProduct, setSelectedProduct] = useState(0);
  const [email, setEmail] = useState("");
  const [numItems, setNumItems] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let numberOfItems = parseInt(e.target.value);
    if (numberOfItems > 0) {
      setNumItems(numberOfItems);
    } else return;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (email) {
      if (email.includes("@") && email.includes(".")) {
        dispatch(setId({ id: selectedProduct }));
        dispatch(remove({ amount: numItems, email }));
      } else {
        alert("Please enter a valid email address");
      }
    } else {
      alert("Please enter your email address");
    }
  };

  return (
    <div className="card">
      <h1 className="title">REMOVE STOCK</h1>
      <form className="form">
        <p className="label">Select a Product Code</p>
        <select
          name="product"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setSelectedProduct(parseInt(e.target.value))
          }
        >
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.title}
            </option>
          ))}
        </select>

        <p className="label">Buyer Email Address</p>
        <input
          className="input"
          type="text"
          placeholder="test@test.com"
          required={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p className="label">Items Received</p>
        <input
          className="input"
          type="number"
          value={numItems}
          onChange={handleChange}
        />

        <button className="btn btn-remove" type="submit" onClick={handleSubmit}>
          Items Shipped
        </button>
      </form>
    </div>
  );
};

export default RemoveStocks;
