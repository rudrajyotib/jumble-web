import styled from "styled-components";

export type HeaderBannerProps = {
    banner: 'instructionRibbon'
    text: string
}

const styles = new Map()
styles.set('instructionRibbon', `
    font-size : 30px;

    @media (max-width:400px){
        font-size:0.8em;
        font-weight:bold;
    }

    @media only screen and (min-width: 401px) and (max-width: 768px)  {
        font-size:0.9em;
        font-weight:bold;
      }
    

    @media only screen and (min-width: 769px) and (max-width: 1024px)  {
        font-size:25px;
        font-weight:bold;
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