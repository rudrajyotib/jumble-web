import React from "react";
import { ResultProps } from "./ResultProps";
import successImage from './images/great-job-min.jpg';
import Button from "../elements/buttons/Button";

export class Success extends React.Component<ResultProps> {
    render(): React.ReactNode {
        return (
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flex: 6, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '400px', height: '200px' }} src={successImage} alt="success" />
                </div>
                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                    Excellent ! You did it !
                </div>
                <div style={{ display: 'flex', flex: 6, justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Button clickHandler={this.props.nextStepHandler} text='Try another word' />
                </div>
            </div>
        )
    }
}