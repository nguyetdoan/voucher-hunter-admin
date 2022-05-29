import { DatePicker, Form, Input, InputNumber, Upload } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import productActions from "../../actions/productAction";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const ProductForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const productInfo = {
      ...values,
      images: values.upload.map((item) => item.thumbUrl),
    };
    delete productInfo.upload;

    dispatch(productActions.addProduct(productInfo));
  };

  return (
    <Form
      onFinish={handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      autoComplete="off"
      className="product-form"
    >
      <Form.Item
        name="name"
        label="Product name"
        rules={[
          {
            required: true,
            message: "Please input product name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Please input description",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>
      <Form.Item
        name="price"
        label="Product price"
        rules={[
          {
            required: true,
            message: "Please input product price!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="discount"
        label="Discount"
        rules={[
          {
            required: true,
            message: "Please input discount!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="upload"
        label="Upload image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Please upload an image!",
          },
        ]}
      >
        <Upload action="/upload.do" listType="picture-card">
          + Upload
        </Upload>
      </Form.Item>
      <Form.Item
        label="Stock"
        name="stock"
        rules={[
          {
            required: true,
            message: "Please input the amount!",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Start"
        name="dateStart"
        rules={[
          {
            required: true,
            message: "Please input start date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="dateEnd"
        label="End"
        rules={[
          {
            required: true,
            message: "Please input end date!",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item label=" " className="submit-btn">
        <button htmlType="submit" className="btn btn-primary text-white">
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
