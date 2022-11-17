import styled from 'styled-components'

const ContainerStyle = styled.div`
    border: 1px solid #cbcdcf;
    border-radius: 0.25rem; 
    width:80%;
    margin: auto;
    height:100%;
    flex:1;
    flex-direction:column;
    display:flex;

    @media (max-width:768px){
        width:100%;
    }
`

const FlexBoxVerticalContainer = (props: any) => {
    return (
        <ContainerStyle>
            {props.children}
        </ContainerStyle>
    )
}

export default FlexBoxVerticalContainer