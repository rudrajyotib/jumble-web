
import RowsOfLettersProps from './types/RowsOfLettersProps';
import RowOfClickableLetters from './RowOfClickableLetters';
import { optimumRowSize, sliceArray } from '../../../utils/GenericUtils';
import Letter from '../../../common/types/Letter';

const RowsOfClickableLetters = (props: RowsOfLettersProps) => {

    const rows: Letter[][] = sliceArray(props.letters, optimumRowSize(props.letters.length, props.rowSize))

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            //  padding: 20, border: 'solid', borderRadius: '20', borderBlockWidth: '1px', borderColor: 'blue' 
        }}>

            <div>
                {
                    rows.map((row, index) => <RowOfClickableLetters correctnessSensitive={props.correctnessSensitive} key={`${props.idPrefx}${index}`}
                        letters={row} idPrefix={`rowOfLetters${index}`} letterClickHandler={props.letterClickHandler}
                        clickable={props.clickable} />)
                }
            </div>
        </div>
    );
}

export default RowsOfClickableLetters;