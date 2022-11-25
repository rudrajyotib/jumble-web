import ClickableBadge from "../elements/views/ClickableBadge";
import ClickableLetterProps from "./types/ClickableLetterProps";

const ClickableLetter = (props: ClickableLetterProps) => {
    return (
        <ClickableBadge position={props.correctnessSensitive === true ? (props.content.isPositionallyCorrect() === true ? 'correct' : 'incorrect') : 'neutral'} text={props.content.value} clickHandler={props.clickHandler.bind(this, props.content.index)} active={props.clickable && props.content.clickable()} />
    );
}

export default ClickableLetter