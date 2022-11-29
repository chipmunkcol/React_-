import styled from "styled-components";

const Input = ({input_ref}) => {


    return (
        <div>
            <input ref={input_ref}/>
        </div>
    )
}


export default Input;