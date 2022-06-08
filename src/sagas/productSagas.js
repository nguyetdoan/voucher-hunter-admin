import { notification } from "antd";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  LOAD_PRODUCT_LIST,
  UPDATE_PRODUCT,
} from "../actions/actionType";
import productActions from "../actions/productAction";
import API from "../services/api";

notification.config({
  placement: "topLeft",
  top: 50,
  duration: 2,
  rtl: false,
});

function* loadProductWorker({ payload: loadInfo }) {
  try {
    const data = yield call(API.loadProduct, loadInfo);
    yield put(productActions.getProductList(data));
  } catch (err) {
    console.log(err);
  }
}

function* loadProductWatcher() {
  yield takeEvery(LOAD_PRODUCT_LIST, loadProductWorker);
}

function* addProductWorker({ payload: productInfo }) {
  try {
    yield call(API.addProduct, productInfo);
    yield put(productActions.changeProduct());
    notification.success({
      message: "Product uploaded!!!",
    });
  } catch (err) {
    console.log(err);
    notification.error({
      message: "Uploaded failed!!",
    });
  }
}

function* addProductWatcher() {
  yield takeEvery(ADD_PRODUCT, addProductWorker);
}

function* deleteProductWorker({ payload: productId }) {
  try {
    yield call(API.deleteProduct, productId);
    yield put(productActions.changeProduct());
    notification.success({
      message: "Delete Product Success!!",
    });
  } catch (err) {
    console.log(err);
    notification.error({
      message: "Upload Product Failed",
    });
  }
}

function* deleteProductWatcher() {
  yield takeEvery(DELETE_PRODUCT, deleteProductWorker);
}

function* updateProductWorker({ payload: productInfo }) {
  try {
    yield call(API.updateProductDetail, productInfo);
    yield put(productActions.changeProduct());
    notification.success({
      message: "Product updated!!!",
    });
  } catch (err) {
    console.log(err);
    notification.error({
      message: "Update failed!!",
    });
  }
}

function* updateProductWatcher() {
  yield takeEvery(UPDATE_PRODUCT, updateProductWorker);
}

export default function* productSagas() {
  yield all([
    loadProductWatcher(),
    addProductWatcher(),
    deleteProductWatcher(),
    updateProductWatcher(),
  ]);
}
