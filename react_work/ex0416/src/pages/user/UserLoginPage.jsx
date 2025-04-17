import React, {useRef, useState} from 'react';
import {Button, Flex, Form, Input, Layout} from "antd";

const {Content} = Layout;

function UserLoginPage(props) {
    // useState useEffect useRef
    // const inputRef = useRef(null);
    // const [emailValidation, setEmailValidation] = useState(false);
    //
    // const login = () => {
    //     console.log('test' + inputRef.current.value);
    //     if(inputRef.current.value === ''){
    //        // console.log('인풋창 밑에 email을 입력하세요');
    //        setEmailValidation(true);
    //     }else{
    //         setEmailValidation(false);
    //     }
    // }

    const finish = ()=>{ console.log('일로온다'); }

    return (
        <Content>
            {/*<div style={{display:'flex'}}></div>*/}
            <Flex style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                <h1 style={{fontSize: '2rem'}}>로그인</h1>
                {/*<form>*/}
                {/*    <input name="email" type="email" placeholder="Email" ref={inputRef}/>*/}
                {/*    {*/}
                {/*        emailValidation && <div>이메일을입력하세요</div>*/}
                {/*    }*/}
                {/*    <button type='button' onClick={login}>로그인</button>*/}
                {/*</form>*/}
                <Form onFinish={finish}>
                    <Form.Item
                        label="이메일"
                        name="email"
                        rules={[{required: true, type: 'email', message: '이메일을 입력해주세요'}]}>
                        <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                        label="패스워드"
                        name="password"
                        rules={[{required: true, message: '비밀번호를 입력해주세요'}]}>
                        <Input placeholder="Password"/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">로그인</Button>
                </Form>
            </Flex>
        </Content>
    );
}

export default UserLoginPage;