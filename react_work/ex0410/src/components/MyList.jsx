import React from 'react';
import {Avatar, Divider, Image, List, Space} from "antd";
import {LikeOutlined, MessageOutlined, StarOutlined} from "@ant-design/icons";

const IconText = ({icon, text}) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

function MyList(props) {

    const data = [
        {
            title: 'Racing car sprays burning fuel into crowd.',
            description: 'burning fuel into',
        },
        {
            title: 'Japanese princess to wed commoner',
            description: ' to wed commoner',
        },
        {
            title: 'Australian walks 100km after outback crash.',
            description: 'ks 100km after o',
        },
        {
            title: 'Man charged over missing wedding girl.',
            description: 'over missing wedding',
        },
        {
            title: 'Los Angeles battles huge wildfires.',
            description: 'les battles huge wildfi.',
        },
    ];

    return (
        <div className={`p-5`}>
            <h1 className={`text-4xl underline p-3 bg-gray-500 font-bold text-white`}>MyList</h1>
            <Divider>Ant design 실습중</Divider>
            <div className={`p-5`}>
                <List
                    itemLayout="vertical"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    header={<><h1 className={`text-3xl p-3`}>리뷰리스트시작</h1></>}
                    footer={<><h1 className={`text-3xl p-3`}>리뷰리스트끝</h1></>}
                    bordered
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                        ]}>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                                title={item.title}
                                description={item.description}
                            />
                            {item.description}
                            <div>
                                <Image
                                    src="https://zgrjjnifqoactpuqolao.supabase.co/storage/v1/object/public/images//0d0307fe-0a2a-45fd-bd02-533d9fd205e1.jpg"
                                    alt=""/>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default MyList;