import { Modal, Table } from "antd";
import { useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import productActions from "../../actions/productAction";
import UpdateForm from "./UpdateForm";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.product);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [onDeleteId, setOnDeleteId] = useState("");
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const formRef = useRef();
  const [justShow, setJustShow] = useState(false);

  const columns = [
    {
      title: "Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (txt) => <p>{txt}</p>,
    },
    {
      title: "Image",
      width: 120,
      dataIndex: ["images", "0"],
      key: "image",
      render: (src) => <img className="product-img" src={src} alt="product" />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "1",
      width: 120,
      render: (price) => (
        <p className="mb-0">{Intl.NumberFormat().format(price)} VND</p>
      ),
      sorter: {
        compare: (a, b) => a.price - b.price,
        multiple: 3,
      },
    },
    {
      title: "Discount",
      dataIndex: "discount",
      key: "2",
      width: 120,
      sorter: {
        compare: (a, b) => a.discount - b.discount,
        multiple: 3,
      },
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "3",
      width: 120,
      sorter: {
        compare: (a, b) => a.stock - b.stock,
        multiple: 3,
      },
    },
    {
      title: "Start",
      dataIndex: "from",
      key: "4",
      width: 120,
    },
    {
      title: "End",
      dataIndex: "to",
      key: "5",
      width: 120,
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 120,
      render: (txt) => (
        <>
          <button className="btn" onClick={() => showUpdateModal(txt)}>
            <BiEdit />
          </button>
          <button className="btn" onClick={() => showDeleteModal(txt._id)}>
            <RiDeleteBin6Line />
          </button>
        </>
      ),
    },
  ];

  const showDeleteModal = (id) => {
    setIsDeleteModalVisible(true);
    setOnDeleteId(id);
  };

  const handleOkDelete = () => {
    dispatch(productActions.deleteProduct(onDeleteId));
    setIsDeleteModalVisible(false);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalVisible(false);
  };

  const showUpdateModal = (values) => {
    setIsUpdateModalVisible(true);
    setJustShow(true);
    dispatch(productActions.setOnUpdateForm(values));
  };

  const handleOkUpdate = () => {
    formRef.current.submit();
    // dispatch(productActions.updateProduct(onUpdateForm));
    dispatch(productActions.setOnUpdateForm(null));
    setIsUpdateModalVisible(false);
  };

  const handleCancelUpdate = () => {
    dispatch(productActions.setOnUpdateForm(null));
    setIsUpdateModalVisible(false);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={list}
        scroll={{ x: 1500, y: "70vh" }}
        pagination={false}
      />
      <Modal
        title="Confirm Delete"
        visible={isDeleteModalVisible}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
      >
        <p>Are you sure you want to delete this item?</p>
      </Modal>
      <Modal
        title="Update Product"
        visible={isUpdateModalVisible}
        onOk={handleOkUpdate}
        onCancel={handleCancelUpdate}
        width={800}
      >
        <UpdateForm
          justShow={justShow}
          setJustShow={setJustShow}
          ref={formRef}
        />
      </Modal>
    </>
  );
};

export default ProductTable;
