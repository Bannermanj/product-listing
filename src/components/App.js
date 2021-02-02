import React, { useEffect } from "react";
import "../index.scss";

import ProductContainer from "./Product/ProductContainer";

const App = props => {
  return (
    <div className="app__container">
      <ProductContainer />
    </div>
  );
};

export default App;
