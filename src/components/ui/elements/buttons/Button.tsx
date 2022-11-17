import styled from "styled-components";

const StyledButton = styled.button`

    background-color: blue;
    color:white;


`

type ButtonProps = {
    text: string,
    clickHandler: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <div>
            <StyledButton onClick={props.clickHandler}>{props.text}</StyledButton>
        </div>
    );
}

export default Button