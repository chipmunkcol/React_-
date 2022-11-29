import { useCallback, useEffect, useRef, useState } from "react";

const One = () => {

    const [text, setText] = useState("World");
    
    const input_ref = useRef(null);

    useEffect(()=>{
      console.log(text)
    }, [text]) //dependence array 의존성 배열 값을 넣으면, 넣은 값이 변했을 때만 콜백함수가 실행됨.
  
    useEffect(()=>{
      console.log('헤이')
  
      return () => {} // cleanUp 함수는 컴파운트 언마운트시에 실행되는 코드 이벤트리스너 구독취소같은거 등 쓸데없는거 계속하고있는거 취소할 때 가끔 유용함
    },[])

    const logger = useCallback(()=>{
        console.log('나 메모이제이션 된 함수야!')
    }, []);

    console.log('나 렌더링 되었어요!')

    return(
    <>
        <div>
            <h1>hello, {text}</h1>
            <button onClick={()=>{setText('React_Query')}}>클릭</button>
            
            <Two logger={logger}/>
            <button onClick={()=>{
                console.log(input_ref.current.value);
                input_ref.current.value = '다른걸로 바꿔버리기~'
            }}>ref값 보기</button>
        </div>
            
        <div>
            <input ref={input_ref}/>
        </div>
    </>
    ) 
}



export const Two = ({logger}) => {
    
    return (
        <button onClick={logger}>Two버튼</button>
    )
}

export default One;
