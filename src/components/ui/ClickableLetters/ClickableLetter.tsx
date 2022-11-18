import ClickableBadge from "../elements/views/ClickableBadge";
import ClickableLetterProps from "./types/ClickableLetterProps";

const ClickableLetter = (props: ClickableLetterProps) => {
    return (
        <ClickableBadge text={props.content.value} clickHandler={props.clickHandler.bind(this, props.content.index)} active={props.clickable} />
    );
}

export default ClickableLetter