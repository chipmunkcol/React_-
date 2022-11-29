import styled from "styled-components";

const Box = ({inBox}) => {
    return (
            <Container>{inBox}</Container>
    )
}

const Container = styled.div`
width: 25rem;
height: 15rem;
border: 1px solid black;
`
export default Box;