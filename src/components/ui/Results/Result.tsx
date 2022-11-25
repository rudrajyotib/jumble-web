import React from "react";
import Button from "../elements/buttons/Button";
import StyledImage from "../elements/images/Image";
import { ImageSources, ResultProps } from "./ResultProps";

class Result extends React.Component<ResultProps>{

    imageSource: string

    constructor(props: ResultProps) {
        super(props)
        this.imageSource = ImageSources[props.type]
    }


    render(): React.ReactNode {
        return (
            <div>
                <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', flex: 6, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <StyledImage type="banner" source={this.imageSource} />
                    </div>

                    <div style={{ display: 'flex', flex: 6, justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                        <Button clickHandler={this.props.nextStepHandler} text='Try another word' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Result