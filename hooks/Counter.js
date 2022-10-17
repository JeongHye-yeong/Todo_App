import React, {useState} from 'react'

function Counter() {
//  const [isLoading,setIsLoading] = useState(true);
  //const [키,state를 바꾸는 함수 이름명 : set뒤에 첫글자대문자]
//  const [movies, setMovies] = useState([]);
const [value, setValue] = useState(0);
// value : 더하기,뺴기한 값을 저장 , setValue : value(state)값을 변경해주는 역할
// useState : hooks함수로 useState함수를 import해야 사용 가능
  return (
    <>
        {/* <div>{isLoading}</div>
        <button onClick={()=>setIsLoading(false)}>클릭</button>
        <button onClick={()=>setMovies([1,2,3])}>클릭2</button> */}
        <h1>useState Hook 사용하기</h1>
        <p>현재 카운터 값은 : <b>{value}</b> 입니다.</p>
        <button onClick={()=>setValue(value + 1)}>더하기</button>
        <button onClick={()=>setValue(value - 1)}>빼기</button>
    
    </>
    )
}

export default Counter