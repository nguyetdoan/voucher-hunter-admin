import { all, call, put, takeEvery } from "redux-saga/effects";
import { ADD_PRODUCT, LOAD_PRODUCT_LIST } from "../actions/actionType";
import productActions from "../actions/productAction";
import API from "../services/api";

function* loadProductWork({ payload: loadInfo }) {
  try {
    const list = yield call(productActions.loadProduct, ...loadInfo);
    yield call(productActions.getProductList(list));
  } catch (err) {
    yield put(productActions.productErr(err.response.data.msg));
    console.log(err.response.data.msg);
  }
}

function* loadProductWatch() {
  yield takeEvery(LOAD_PRODUCT_LIST, loadProductWork);
}

function* addProductWork({ payload: productInfo }) {
  try {
    yield call(API.addProduct, productInfo);
    yield put(productActions.changeProduct());
  } catch (err) {
    // yield put(productActions.productErr(err.response.data.msg));
    console.log(err);
  }
}

function* addProductWatch() {
  yield takeEvery(ADD_PRODUCT, addProductWork);
}

export default function* productSagas() {
  yield all([loadProductWatch(), addProductWatch()]);
}
