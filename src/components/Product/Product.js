import React, { useEffect } from "react";
import "./products.scss";
import PropTypes from "prop-types";
import moment from "moment";

import ProductOverview from "./ProductOverview";

const Product = props => {
  const { productData, getProduct, viewType } = props;
  const openProduct = id => {
    props.getProduct(id);
  };
  const productName =
    viewType === "en" ? productData.name.en : productData.name.de;
  return (
    <div className="product__wrapper">
      <h2>{productName}</h2>
      <img src={productData.masterVariant.images[0].url} />
      <h4>Created At: {moment(productData.createdAt).format("MMM Do YYYY")}</h4>
      <h4>SKU: {productData.masterVariant.sku}</h4>
      <br />
      <button onClick={() => openProduct(productData.id)}>
        View Product Details
      </button>
    </div>
  );
};

Product.propTypes = {
  getProduct: PropTypes.func,
  productData: PropTypes.object,
  viewType: PropTypes.string
};
export default Product;
