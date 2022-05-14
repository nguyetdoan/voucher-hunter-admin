import { Layout } from "antd";
import React from "react";
import ProductTable from "../components/Products/ProductTable";

const ProductPage = () => {
  return (
    <Layout>
      <div className="product-table">
        <ProductTable />
      </div>
    </Layout>
  );
};

export default ProductPage;
