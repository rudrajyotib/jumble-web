import styled from "styled-components";

export type HeaderBannerProps = {
    banner: 'instructionRibbon'
    text: string
}

const styles = new Map()
styles.set('instructionRibbon', `
    font-size : 30px;

    @media (max-width:768px){
        font-size:1em;
    }
`)


const BannerSpan = styled.span<HeaderBannerProps>`
    ${props => styles.get(props.banner)}
`

const HeaderBanner = (props: HeaderBannerProps) => {
    return (
        <div>
            <BannerSpan {...props}>{props.text}</BannerSpan>
        </div>
    )
}

export default HeaderBanner