import styled from "styled-components";
import Box from "./Quiz1/Box"
import Input from "./Quiz1/Input";
import GoBoxBtn from "./Quiz1/GoBoxBtn";
import { useRef, useState } from "react";

const Quiz = () => {

    const [inBox, setInBox] = useState('')
    const input_ref = useRef(null)

    const onclickGoBox = () => {
        // console.log(input_ref.current.value)
        setInBox(input_ref.current.value)
        input_ref.current.value = null
    }
    
    console.log('랜더링됐당')

    return (
        <Container>
            <Box inBox={inBox}/>
            <Input input_ref={input_ref}/>
            <GoBoxBtn onclickGoBox={onclickGoBox}/>
        </Container>
    )
}

export default Quiz;

const Container = styled.div`
display: flex;
`

