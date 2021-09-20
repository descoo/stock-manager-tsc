import React from "react";

import "./App.css";
import StockLevels from "./components/StockLevels";
import AddStocks from "./components/AddStocks";
import RemoveStocks from "./components/RemoveStocks";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="left">
          <AddStocks />
          <RemoveStocks />
        </div>
        <div className="right">
          <StockLevels />
        </div>
      </div>
    </div>
  );
};

export default App;
