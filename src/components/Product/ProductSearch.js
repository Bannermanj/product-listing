import React, { useEffect } from "react";
import "./products.scss";
import PropTypes from "prop-types";

const ProductSearch = props => {
  const { setSearchText, searchText } = props;
  return (
    <div className="product-search__wrapper">
      <h2>Search Products</h2>
      <input
        placeholder={"Search..."}
        onChange={event => setSearchText(event.target.value)}
      />
    </div>
  );
};

ProductSearch.propTypes = {
  searchText: PropTypes.string,
  setSearchText: PropTypes.func
};
export default ProductSearch;
