import styled from "styled-components";

const StyledButton = styled.button`

appearance: button;
backface-visibility: hidden;
background-color: #405cf5;
border-radius: 6px;
border-width: 0;
box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
box-sizing: border-box;
color: #fff;
cursor: pointer;
font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
font-size: 100%;
height: 44px;
line-height: 1.15;
margin: 12px 0 0;
outline: none;
overflow: hidden;
padding: 0 25px;
position: relative;
text-align: center;
text-transform: none;
transform: translateZ(0);
transition: all .2s,box-shadow .08s ease-in;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
width: 100%;

:disabled {
    cursor: default;
  }

  :focus {
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
  }
`

type ButtonProps = {
    text: string,
    clickHandler: () => void
}

const Button = (props: ButtonProps) => {
    return (
        <div>
            <StyledButton onClick={props.clickHandler} >{props.text}</StyledButton>
        </div>
    );
}

export default Button