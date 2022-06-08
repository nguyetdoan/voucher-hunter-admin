import { Pagination } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../actions/productAction";
import ProductTable from "../components/Products/ProductTable";

const ProductPage = () => {
  const { totalPages, page, size, changed } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.loadProductList({ page: 1, size: 10 }));
  }, [dispatch]);

  useEffect(() => {
    if (changed) {
      dispatch(productActions.loadProductList({ page, size }));
    }
  }, [changed, dispatch, page, size]);

  const onChange = (page, pageSize) => {
    console.log(page, pageSize);
  };

  return (
    <div className="product-table py-4">
      <div className="d-flex justify-content-end mb-3">
        <Pagination
          showSizeChanger
          onChange={onChange}
          pageSize={size}
          current={page}
          total={totalPages}
        />
      </div>
      <ProductTable />
      <div className="d-flex justify-content-end mt-3">
        <Pagination
          showSizeChanger
          onChange={onChange}
          pageSize={size}
          current={page}
          total={totalPages}
        />
      </div>
    </div>
  );
};

export default ProductPage;
