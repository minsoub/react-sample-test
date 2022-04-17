import React, { useEffect, useState } from 'react';
import useInputs from './useInput';

const Info = () => {
    //const [name, setName] = useState('');
    //const [nickname, setNickname] = useState('');

    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;

    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다');
    //     console.log({
    //         name,
    //         nickname,
    //     });
    // }, [name]);

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // };
    // const onChangeNickname = (e) => {
    //     setNickname(e.target.value);
    // };

    return (
        <div>
            <div>
                <h3>Custom Reduce</h3>
            </div>
            <div>
                <input value={name} onChange={onChange} />
                <input value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>Name: </b> {name}
                </div>
                <div>
                    <b>Nickname: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
