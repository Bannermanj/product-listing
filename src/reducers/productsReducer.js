import {
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR
} from "../actions/index";

const initialState = {
  products: [],
  isLoading: false,
  error: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCTS_START":
      return {
        ...state,
        isLoading: true
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        products: action.payload
      };
    case "GET_PRODUCTS_ERROR":
      return {
        ...state,
        isLoading: false,
        error: "Error retrieving products, please try again."
      };
    default:
      return state;
  }
}
