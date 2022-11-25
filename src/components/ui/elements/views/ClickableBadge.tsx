import styled from 'styled-components';

type ClickableBadgeProps = {
    text: string
    clickHandler: () => void
    active: boolean
    position: 'correct' | 'incorrect' | 'neutral'
}

const BackgroundColorMap = {
    correct: 'green',
    incorrect: 'red',
    neutral: 'black'
}

const BadgeStyle = styled.div<ClickableBadgeProps>`
    width :90px;
    height : 50px;
    border-radius: 5px;
    background-color: white;
    color: ${props => BackgroundColorMap[props.position]};
    border-color:blue;
    border-style:solid;
    border-width:1;
    text-align:center;
    display : flex;
   position : relative;
   justify-content:center;
   align-items;
   :hover {
    cursor:${props => props.active === true ? "pointer" : "auto"};
   }
   margin:10px;
   font-size: 30px;
   font-weight:bold;

   @media (max-width:1024px){
    width:40px;
    height:40px;
    margin:5px;
    }

`

const clickHandler = (props: ClickableBadgeProps) => {

    if (props.active === false) {
        return
    }
    props.clickHandler()
}


const ClickableBadge = (props: ClickableBadgeProps) => {
    return (
        <BadgeStyle onClick={clickHandler.bind(this, props)} {...props}>
            <span style={{ margin: 'auto', textAlign: 'center' }}>{props.text}</span>
        </BadgeStyle>
    )
}

export default ClickableBadge;