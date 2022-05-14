import React from "react";
import Layout from "../components/layout";
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
