import { toast } from "react-toastify";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { ADD_PRODUCT, LOAD_PRODUCT_LIST } from "../actions/actionType";
import productActions from "../actions/productAction";
import API from "../services/api";

function* loadProductWork({ payload: loadInfo }) {
  try {
    const data = yield call(API.loadProduct, loadInfo);
    yield put(productActions.getProductList(data));
  } catch (err) {
    console.log(err);
  }
}

function* loadProductWatch() {
  yield takeEvery(LOAD_PRODUCT_LIST, loadProductWork);
}

function* addProductWork({ payload: productInfo }) {
  try {
    yield call(API.addProduct, productInfo);
    yield put(productActions.changeProduct());
    toast("Upload Product Success!!");
  } catch (err) {
    console.log(err);
    toast("Upload Product Failed!!");
  }
}

function* addProductWatch() {
  yield takeEvery(ADD_PRODUCT, addProductWork);
}

export default function* productSagas() {
  yield all([loadProductWatch(), addProductWatch()]);
}
