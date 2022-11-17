import React from "react";
import { ReactNode } from "react";
import { ResultProps } from "./ResultProps";
import timeUp from './images/timeUp.jpg';
import Button from "../elements/buttons/Button";


export class TimeUp extends React.Component<ResultProps>{
    render(): ReactNode {
        return (
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flex: 6, justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: '400px', height: '200px' }} src={timeUp} />
                </div>
                <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                    Hey, your time is up
                </div>
                <div style={{ display: 'flex', flex: 6, justifyContent: 'flex-start', alignContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Button clickHandler={this.props.nextStepHandler} text='Try another word' />
                </div>
            </div>
        )
    }
}