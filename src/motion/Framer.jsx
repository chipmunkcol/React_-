import { motion } from "framer-motion";
import styled from "styled-components";

const motionBox = {
    start: { scale: 0, },
    end: { 
        scale: 1, rotate: 360, 
        transition: { 
            // type: "spring", duration: 2
            delayChildren: 0.3,
            staggerChildren: 0.2
        } 
    }
}

const motionCircle = {
    start: { opacity: 0, y: 20 },
    end: { opacity: 1, y: 0 }
}

const Framer = () => {
    return(
        <Wrap>
            <BoxMotion
             
            />
        </Wrap>
    )
}

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(to bottom, pink, #9d3f9d);
display: flex;
justify-content: center;
align-items: center;
`

const BoxMotion = styled(motion.div)`
width: 10rem;
height: 10rem;
display: grid;
grid-template-columns: repeat(2, 1fr);

background-color: #fff;
border-radius: 10px;
`
const Circle = styled(motion.div)`
width: 4rem;
height: 4rem;
background: linear-gradient(to top, pink, #9d3f9d);
border-radius: 50%;
place-self: center; // 와 이거뭐냐..? 엄청 좋네 display grid 일 경우에 각 item 가운데 정렬시켜줌!
`

export default Framer;