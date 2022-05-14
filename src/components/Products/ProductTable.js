import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const columns = [
  {
    title: "Title",
    width: 100,
    dataIndex: "title",
    key: "title",
    sorter: {
      compare: (a, b) => a.title - b.title,
      multiple: 3,
    },
  },
  {
    title: "Image",
    width: 120,
    dataIndex: ["image", "url"],
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
    title: "Amount",
    dataIndex: "amount",
    key: "3",
    width: 120,
    sorter: {
      compare: (a, b) => a.amount - b.amount,
      multiple: 3,
    },
  },
  {
    title: "Start",
    dataIndex: "startDate",
    key: "4",
    width: 120,
  },
  {
    title: "End",
    dataIndex: "endDate",
    key: "5",
    width: 120,
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 120,
    render: (txt) => (
      <>
        <button className="btn" onClick={() => console.log(txt)}>
          <BiEdit />
        </button>
        <button className="btn" onClick={() => console.log(txt)}>
          <RiDeleteBin6Line />
        </button>
      </>
    ),
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    title: "Tien Giang",
    price: 300,
    discount: i * 10,
    amount: 3,
    image: {
      url: "https://sanvemaybay.vn/includes/uploads/2018/09/thanh-pho-Tien-Giang-ve-dem-e1536820106695.jpg",
    },
    startDate: new Date("2021-5-7").toISOString(),
    endDate: new Date().toISOString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    category: Math.random() * 5 > 2 ? "Travel" : "Comestic",
  });
}

const ProductTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{ x: 1500, y: "70vh" }}
    pagination={{ position: ["topRight", "bottomRight"] }}
  />
);

export default ProductTable;
