import styled from 'styled-components';

type ClickableBadgeProps = {
    text: string
    clickHandler: () => void
    active: boolean
}

const BadgeStyle = styled.div<ClickableBadgeProps>`
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
   :hover {
    cursor:${props => props.active === true ? "pointer" : "auto"};
   }
   margin:10px;

   @media (max-width:768px){
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