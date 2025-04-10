import React from 'react';
import {Avatar, Divider, List} from "antd";

function MyList(props) {

    const data = [
        {
            title:'Racing car sprays burning fuel into crowd.',
            description: 'burning fuel into',
        },
        {
            title:'Japanese princess to wed commoner',
            description: ' to wed commoner',
        },
        {
            title:'Australian walks 100km after outback crash.',
            description: 'ks 100km after o',
        },
        {
            title:'Man charged over missing wedding girl.',
            description: 'over missing wedding',
        },
        {
            title:'Los Angeles battles huge wildfires.',
            description: 'les battles huge wildfi.',
        },
    ];

    return (
        <div className={`p-5`}>
            <h1 className={`text-4xl underline p-3 bg-gray-500 font-bold text-white`}>MyList</h1>
            <Divider>Ant design 실습중</Divider>
            <div className={`p-5`}>
                <List
                    header={<><h1 className={`text-3xl p-3`}>리뷰리스트시작</h1></>}
                    footer={<><h1 className={`text-3xl p-3`}>리뷰리스트끝</h1></>}
                    bordered
                    dataSource={data}
                    renderItem={(item,index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default MyList;