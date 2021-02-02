import axios from "axios";
import SdkAuth from "@commercetools/sdk-auth";
import fetch from "node-fetch";
import { createClient } from "@commercetools/sdk-client";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";
import { createRequestBuilder } from "@commercetools/api-request-builder";

export const GET_PRODUCTS_START = "GET_PRODUCTS_START";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

export const getProduct = id => {
  return async dispatch => {
    const authClient = new SdkAuth({
      host: "https://auth.us-central1.gcp.commercetools.com",
      projectKey: "frontend-interview-exercise",
      disableRefreshToken: false,
      credentials: {
        clientId: "jYAqMLOnGLYQdsBfBzvkm9Hx",
        clientSecret: "TJWzIhKtf71xhACAX7eIs5BZsA2WBrFp"
      },
      scopes: ["view_products:frontend-interview-exercise"],
      fetch
    });

    const token = await authClient.clientCredentialsFlow();

    const config = {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    };

    axios
      .get(
        `https://api.us-central1.gcp.commercetools.com/frontend-interview-exercise/product-projections${id}`,
        config
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        dispatch({ type: GET_PRODUCTS_ERROR });
        console.log(error);
      });
  };
};

export const getProducts = () => {
  return async dispatch => {
    const authClient = new SdkAuth({
      host: "https://auth.us-central1.gcp.commercetools.com",
      projectKey: "frontend-interview-exercise",
      disableRefreshToken: false,
      credentials: {
        clientId: "jYAqMLOnGLYQdsBfBzvkm9Hx",
        clientSecret: "TJWzIhKtf71xhACAX7eIs5BZsA2WBrFp"
      },
      scopes: ["view_products:frontend-interview-exercise"],
      fetch
    });

    const token = await authClient.clientCredentialsFlow();
    const config = {
      headers: {
        Authorization: `Bearer ${token.access_token}`
      }
    };

    dispatch({ type: GET_PRODUCTS_START });
    axios
      .get(
        "https://api.us-central1.gcp.commercetools.com/frontend-interview-exercise/product-projections",
        config
      )
      .then(response => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => {
        dispatch({ type: GET_PRODUCTS_ERROR });
        console.log(error);
      });
  };
};
