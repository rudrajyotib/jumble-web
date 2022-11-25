import React, { ReactNode } from "react";
import styled from "styled-components";
import { ImageProps } from "./ImageProps";
import ImagesSizes from "./ImageSizes";

const ImageStyle = styled.img<ImageProps>`
    ${props => ImagesSizes(props.type)}
`

class StyledImage extends React.Component<ImageProps>{

    constructor(props: ImageProps) {
        super(props)
    }


    render(): ReactNode {
        return (
            <div>
                <ImageStyle src={this.props.source} alt="" {...this.props}></ImageStyle>
            </div>
        )
    }


}

export default StyledImage