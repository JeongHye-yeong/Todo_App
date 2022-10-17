import React, { useCallback, useMemo, useRef, useState } from 'react'

const getAverage = lists => {
    console.log('평균값 계산중..');
    if (lists.length === 0) return 0;
    const sum = lists.reduce((a,b) => a + b);//reduce 합계를 구할떄 간편하게 사용가능, lists 배열안에 요소들을 가져와서 더해줘라
    return sum / lists.length;
};
function Average() {
    const [lists, setLists] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);//useRef hook 함수는 reference의 줄임말로 DOM요소에 이름달때 사용 id 대신해서 사용, 컴포넌트 내에서만 사용하며 DOM을 직접적으로 건드릴때 사용
    
    // const onChange = e => {
    //     //렌더링(화면이 실행되는 과정)이 많이 실행 되므로 리소스를 많이 사용된다 
    //     console.log('');
    //     setNumber(e.target.value);
    // }

    const onChange = useCallback( e => {
    //useCallback() : 특정배열값이 바뀌었을때만 이벤트 핸들러 함수를 실행(함수 재사용) 성능을 최적화함
    //useCallback()을 사용하면 렌더링이 될 떄마다 함수 매번 새로 생성되는 걸 방지하고 딱 한번만 생성되고 재사용함
    console.log('컴포넌트가 처음 렌더링 될 때 함수 생성..');
        setNumber(e.target.value);
    },[]);

    const onInsert = useCallback( e => {
        console.log('number 혹은 list가 바뀌었을 때만 함수 생성');
        const nextLists = lists.concat(parseInt(number));//concat : 배열과 배열을 합칠 때
        setLists(nextLists);
        setNumber('');
        inputEl.current.focus();
    },[number,lists]);
//useMemo()-랜더링 성능 최적화로 랜더링 하는 과정에서 특정 값이 바뀔때만 연산실행하고 안바뀌면 이전의 값을 재사용/ 숫자,문자열,객체처럼 일반값 재사용/ use 콜백과 비슷
//getAverage : getAverage함수를 호출해줌
    const avg = useMemo(() => getAverage(lists),[lists]);
  return (
    <div>
        <input value={number} onChange={onChange} ref={inputEl} />
        <button onClick={onInsert}>등록</button>
        <ul>
            {lists.map( (list,index) => (
                <li key={index}>{list}</li>
            ))}
        </ul>
        <div><b>평균값:</b> {avg}</div>
    </div>
  )
}

export default Average