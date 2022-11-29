import styled from "styled-components";
import Box from "./Box"
import Input from "./Input";
import GoBoxBtn from "./GoBoxBtn";
import { useRef, useState } from "react";
import useCompletes from "../CustomHooks/useCompletes";

const Quiz = () => {

    const [inBox, setInBox] = useCompletes('')
    const input_ref = useRef(null)

    const onclickGoBox = () => {
        // console.log(input_ref.current.value)
        setInBox(input_ref)
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

