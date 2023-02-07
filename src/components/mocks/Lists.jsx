import { Avatar, Button, List, Skeleton, Space } from "antd";
import { useEffect, useState } from "react";
import React from "react";

import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
const fakeUsers = Array.from({ length: 20 }, (_, index) => ({
  key: `fake-user-${index + 1}`,
  name: `Fake User ${index + 1}`,
  avatar: `https://picsum.photos/100/100?random=${index + 1}`,
}));

// export const ListWithAvatars = (props) => {
//   return (
//     <List
//       loading={initLoading}
//       itemLayout="horizontal"
//       loadMore={loadMore}
//       dataSource={list}
//       renderItem={(item) => (
//         <List.Item
//           actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
//         >
//           <Skeleton avatar title={false} loading={item.loading} active>
//             <List.Item.Meta
//               avatar={<Avatar src={item.picture.large} />}
//               title={<a href="https://ant.design">{item.name?.last}</a>}
//               description="Ant Design, a design language for background applications, is refined by Ant UED Team"
//             />
//             <div>content</div>
//           </Skeleton>
//         </List.Item>
//       )}
//     />
//   );
// };

export const ListWithAvatars = (props) => {
  return (
    <div style={{ overflow: "auto", height: props.scrollHeight }}>
      <List
        itemLayout="horizontal"
        dataSource={fakeUsers}
        renderItem={(user) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} />}
              title={user.name}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  index: i,
  href: "https://ant.design",
  title: `ant design part ${i}`,
  avatar: `https://picsum.photos/50/50?random=${i}`,
  description:
    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
  content:
    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
export const ListWithImages = (props) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={data}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src={`https://picsum.photos/270/170?random=${item.index}`}
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};
