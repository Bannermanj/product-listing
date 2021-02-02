import React, { useEffect, useState } from "react";
import "./products.scss";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as productActions from "../../actions/index";
import PropTypes from "prop-types";
import BeatLoader from "react-spinners/BeatLoader";

import Product from "./Product";
import ProductSearch from "./ProductSearch";

const spinnerOverride = `
  display: block;
  margin: 0 auto;
`;

const ProductContainer = props => {
  const [searchText, setSearchText] = useState("");
  const [viewType, setViewType] = useState("en");
  useEffect(() => {
    const { actions } = props;
    actions.getProducts();
  }, []);

  const { products, isLoading, actions } = props;
  const filteredProducts = searchText
    ? products.filter(product =>
        product.name.en.toLowerCase().includes(searchText.toLowerCase())
      )
    : products;

  const handleLang = () => {
    if (viewType === "en") setViewType("de");
    if (viewType === "de") setViewType("en");
  };
  return (
    <div className="product__container">
      <ProductSearch searchText={searchText} setSearchText={setSearchText} />
      <button onClick={handleLang}>
        View in {viewType === "en" ? "German" : "English"}
      </button>
      {filteredProducts.map(product => (
        <div key={product.id}>
          <Product
            viewType={viewType}
            getProduct={actions.getProduct}
            productData={product}
          />
        </div>
      ))}
      {filteredProducts.length === 0 && <h1>No Results Found</h1>}
      {isLoading && (
        <BeatLoader
          css={spinnerOverride}
          size={30}
          color={"#324dc7"}
          loading={isLoading}
        />
      )}
    </div>
  );
};

const mapStateToProps = app => {
  return {
    ...app.productsReducer
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...productActions
    },
    dispatch
  )
});

ProductContainer.propTypes = {
  getProducts: PropTypes.func,
  getProduct: PropTypes.func,
  isLoading: PropTypes.bool,
  products: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductContainer);
