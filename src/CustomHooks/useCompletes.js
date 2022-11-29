import React, { useState } from "react"

const useCompletes = (initial) => {
    // ref값 가져온 걸로 
    // state를 바꿔주자
    
    const [inBox, setInBox] = useState(initial)

    const changeText = (_ref) => {
        console.log(_ref)
        setInBox(_ref.current.value);
        _ref.current.value = null
    }

    return [inBox, changeText];
}

export default useCompletes;

// custom Hook은 naming이 use로 시작하고 return 값이 있어야함!
// 근데 이 예제는 커스텀훅 장점이 별로 안느껴진다 그냥 함수처럼 사용한다고 생각하는게 좋을듯