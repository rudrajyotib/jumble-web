import styled from 'styled-components';

const BadgeStyle = styled.div`
    width :90px;
    height : 50px;
    border-radius: 5px;
    background-color: white;
    border-color:blue;
    border-style:solid;
    border-width:1;
    text-align:center;
    display : flex;
   position : relative;
   justify-content:center;
   align-items;

   @media (max-width:768px){
    width:50px;
    height:40px;
}

`

type ClickableBadgeProps = {
    text: string
    clickHandler: () => void
}

const ClickableBadge = (props: ClickableBadgeProps) => {
    return (
        <BadgeStyle onClick={props.clickHandler}>
            <span style={{ margin: 'auto', textAlign: 'center' }}>{props.text}</span>
        </BadgeStyle>
    )
}

export default ClickableBadge;