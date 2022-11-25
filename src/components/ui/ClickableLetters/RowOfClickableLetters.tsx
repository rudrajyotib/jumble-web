import { wrap } from 'module'
import ClickableLetter from './ClickableLetter'
import RowOfLetterProps from './types/RowOfLettersProps'

const RowOfClickableLetters = (props: RowOfLetterProps) => {



    return (
        <div
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 10, flexDirection: 'row' }}
        // className='d-flex flex-row mb-1 p-1 justify-content-evenly'
        >
            {
                props.letters.map((letter, index) => <ClickableLetter correctnessSensitive={props.correctnessSensitive} key={`${props.idPrefix}${index}`}
                    touchable={true} content={letter} clickHandler={props.letterClickHandler} clickable={props.clickable} />)
            }
        </div>
    )
};

export default RowOfClickableLetters