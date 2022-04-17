import React, { useEffect, useState } from 'react';

const EventTest = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;

    useEffect(() => {
        console.log('마운트딜 때만 실행된다.');
    }, []);

    const onChange = (e) => {
        const nextForm = {
            ...form, // 기존 form 복사
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert(username + ' : ' + message);
        setForm({
            username: '',
            message: '',
        });
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1> Event Test </h1>
            <input
                type="txt"
                name="username"
                placeholder="User name"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="Input the message"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </div>
    );
};

export default EventTest;
