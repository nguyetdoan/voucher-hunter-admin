import { Layout } from "antd";
import React from "react";
import ProductForm from "../components/Products/ProductForm";

const CreatProductPage = () => {
  return (
    <Layout>
      <div className="m-5">
        <h1 className="fs-5 fw-bold text-center">Create new voucher</h1>
        <ProductForm />
      </div>
    </Layout>
  );
};

export default CreatProductPage;
