import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  LOAD_PRODUCT_DETAIL,
  LOAD_PRODUCT_LIST,
  PRODUCT_CHANGE,
  PRODUCT_ERROR,
  UPDATE_PRODUCT,
} from "./actionType";

const productActions = {
  loadProductList(info) {
    return {
      type: LOAD_PRODUCT_LIST,
      payload: info,
    };
  },
  getProductList(list) {
    return {
      type: GET_PRODUCT_LIST,
      payload: list,
    };
  },
  loadProductDetail(id) {
    return {
      type: LOAD_PRODUCT_DETAIL,
      payload: id,
    };
  },
  getProductDetail(detail) {
    return {
      type: GET_PRODUCT_DETAIL,
      payload: detail,
    };
  },
  addProduct(productInfo) {
    return {
      type: ADD_PRODUCT,
      payload: productInfo,
    };
  },
  updateProduct(info) {
    return {
      type: UPDATE_PRODUCT,
      payload: info,
    };
  },
  deleteProduct(id) {
    return {
      type: DELETE_PRODUCT,
      payload: id,
    };
  },
  changeProduct() {
    return {
      type: PRODUCT_CHANGE,
    };
  },
  productError(err) {
    return {
      type: PRODUCT_ERROR,
      payload: err,
    };
  },
};

export default productActions;
