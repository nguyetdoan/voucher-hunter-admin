import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector } from "react-redux";

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
        <button className="btn" onClick={() => console.log(txt._id)}>
          <BiEdit />
        </button>
        <button className="btn" onClick={() => console.log(txt)}>
          <RiDeleteBin6Line />
        </button>
      </>
    ),
  },
];

const ProductTable = () => {
  const { list } = useSelector((state) => state.product);

  return (
    <Table
      columns={columns}
      dataSource={list}
      scroll={{ x: 1500, y: "70vh" }}
      pagination={false}
    />
  );
};

export default ProductTable;
