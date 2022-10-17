import React, { useEffect, useState } from 'react'

function Info() {
    const [name , setName] = useState('');
    const[nickname , setNickname] = useState('');

    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    useEffect(()=>{
        console.log("랜더링이 완료되었습니다");//componentDidMount()함수 역할을 useEffect가 함
        console.log({name,nickname});
    },[name,nickname]);//[state]값이 들어가있으면 componentDidupdate() 함수 역할도 수행함 비어있으면 componentDidMount만 실행되고 업뎃은 안됨

    return (
    <div>
        <div>
            <input value={name} onChange={onChangeName} />
            <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
            <div> <b>이름:</b> {name} </div>
            <div> <b>닉네임:</b> {nickname} </div>
        </div>
    </div>
  )
}

export default Info