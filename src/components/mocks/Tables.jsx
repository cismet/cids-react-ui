import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Jane Doe",
    age: 27,
    address: "Los Angeles No. 1 Lake Park",
    tags: ["friendly", "designer"],
  },
  {
    key: "5",
    name: "Jim Brown",
    age: 34,
    address: "Chicago No. 1 Lake Park",
    tags: ["driven", "developer"],
  },
  {
    key: "6",
    name: "Joe Green",
    age: 38,
    address: "Houston No. 1 Lake Park",
    tags: ["energetic", "teacher"],
  },
  {
    key: "7",
    name: "Jane Black",
    age: 31,
    address: "Miami No. 1 Lake Park",
    tags: ["creative", "designer"],
  },
  {
    key: "8",
    name: "John Doe",
    age: 45,
    address: "Dallas No. 1 Lake Park",
    tags: ["determined", "developer"],
  },
  {
    key: "9",
    name: "Jim Doe",
    age: 29,
    address: "Philadelphia No. 1 Lake Park",
    tags: ["driven", "teacher"],
  },
  {
    key: "10",
    name: "Joe Doe",
    age: 33,
    address: "San Francisco No. 1 Lake Park",
    tags: ["friendly", "designer"],
  },
  {
    key: "11",
    name: "Jane Green",
    age: 24,
    address: "Boston No. 1 Lake Park",
    tags: ["determined", "developer"],
  },
  {
    key: "12",
    name: "John Black",
    age: 40,
    address: "Seattle No. 1 Lake Park",
    tags: ["creative", "teacher"],
  },
  {
    key: "13",
    name: "Jim Brown",
    age: 35,
    address: "Portland No. 1 Lake Park",
    tags: ["energetic", "designer"],
  },
  {
    key: "14",
    name: "Joe Green",
    age: 39,
    address: "Atlanta No. 1 Lake Park",
    tags: ["driven", "developer"],
  },
  {
    key: "15",
    name: "Jane Black",
    age: 28,
    address: "Minneapolis No. 1 Lake Park",
    tags: ["friendly", "teacher"],
  },
  {
    key: "16",
    name: "John Green",
    age: 44,
    address: "Detroit No. 1 Lake Park",
    tags: ["determined", "designer"],
  },
  {
    key: "17",
    name: "Jim Doe",
    age: 30,
    address: "Denver No. 1 Lake Park",
    tags: ["driven", "developer"],
  },
  {
    key: "18",
    name: "Joe Brown",
    age: 37,
    address: "St. Louis No. 1 Lake Park",
    tags: ["creative", "teacher"],
  },
  {
    key: "19",
    name: "Jane Green",
    age: 25,
    address: "Tampa No. 1 Lake Park",
    tags: ["energetic", "designer"],
  },
  {
    key: "20",
    name: "John Black",
    age: 41,
    address: "Pittsburgh No. 1 Lake Park",
    tags: ["driven", "developer"],
  },
  {
    key: "21",
    name: "Jim Doe",
    age: 31,
    address: "Cincinnati No. 1 Lake Park",
    tags: ["friendly", "teacher"],
  },
  {
    key: "22",
    name: "Joe Green",
    age: 40,
    address: "Kansas City No. 1 Lake Park",
    tags: ["determined", "designer"],
  },
  {
    key: "23",
    name: "Jane Black",
    age: 29,
    address: "Milwaukee No. 1 Lake Park",
    tags: ["driven", "developer"],
  },
  {
    key: "24",
    name: "John Doe",
    age: 46,
    address: "Raleigh No. 1 Lake Park",
    tags: ["creative", "teacher"],
  },
  {
    key: "25",
    name: "Jim Green",
    age: 36,
    address: "Nashville No. 1 Lake Park",
    tags: ["energetic", "designer"],
  },
  {
    key: "26",
    name: "Joe Brown",
    age: 38,
    address: "Charlotte No. 1 Lake Park",
    tags: ["driven", "developer"],
  },
  {
    key: "27",
    name: "Jane Green",
    age: 26,
    address: "Indianapolis No. 1 Lake Park",
    tags: ["friendly", "teacher"],
  },
  {
    key: "28",
    name: "John Black",
    age: 42,
    address: "Columbus No. 1 Lake Park",
    tags: ["determined", "designer"],
  },
  {
    key: "29",
    name: "Jim Doe",
    age: 32,
    address: "Austin No. 1 Lake Park",
    tags: ["creative", "teacher"],
  },
  {
    key: "30",
    name: "Joe Green",
    age: 39,
    address: "Orlando No. 1 Lake Park",
    tags: ["energetic", "designer"],
  },
];

export const SimpleTable = (props) => (
  <Table columns={columns} style={props.tableStyle} dataSource={data} />
);

export const SimpleShortTable = (props) => (
  <Table
    columns={columns}
    style={props.tableStyle}
    pagination={{ defaultPageSize: props.pageSize || 4 }}
    dataSource={data}
  />
);
export const SimpleTableNoPagination = (props) => (
  <Table
    style={props.tableStyle}
    columns={columns}
    scroll={{ y: props.scrollHeight }}
    pagination={false}
    dataSource={data}
  />
);
