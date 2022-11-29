import React, { useState } from "react"

const useCompletes = () => {
    // ref값 가져온 걸로 
    // state를 바꿔주자
    
    const [text, setText] = useState('')

    const changeText = (ref) => {
        console.log(ref)
        setText(ref.current.value);
    }

    return [text, changeText];
}

export default useCompletes;