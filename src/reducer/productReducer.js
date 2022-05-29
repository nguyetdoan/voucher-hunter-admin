import {
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_LIST,
  PRODUCT_CHANGE,
  PRODUCT_ERROR,
} from "../actions/actionType";

const initialState = {
  list: [],
  page: 1,
  totalPage: 0,
  size: 10,
  search: "",
  sort: undefined,
  order: null,
  productDetail: null,
  changed: false,
  loading: true,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST:
      const { list, totalPage } = action.payload;
      return {
        ...state,
        changed: false,
        loading: false,
        list,
        totalPage,
      };

    case GET_PRODUCT_DETAIL:
      const productDetail = action.payload;
      return {
        ...state,
        productDetail,
      };

    case PRODUCT_CHANGE:
      return {
        ...state,
        changed: true,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default productReducer;
