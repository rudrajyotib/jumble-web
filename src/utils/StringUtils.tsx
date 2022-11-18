import { JumbleLetter } from "../common/domain/JumbleLetter";
import Letter from "../common/types/Letter";

export function createLettersArrayWithPosition(input: string): Letter[] {
    const len = input.length;
    let result: Letter[] = [];
    for (let iter = 0; iter < len; iter++) {
        result.push(new JumbleLetter(iter, input.charAt(iter)))
    }
    return result;
}

export function createArrayOfEmptyElements(input: string): Letter[] {
    const len = input.length;
    let result: Letter[] = [];
    for (let iter = 0; iter < len; iter++) {
        result.push(new JumbleLetter(iter))
    }
    return result;
}

export function checkStringsAnagram(a: string, b: string) {
    if (a.length !== b.length) {
        return false
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    return (str1 === str2);
}

function arrayRandomiser(inputArray: string[]) {
    const n = inputArray.length;
    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = tmp;
    }
    return inputArray
}


export function randomiseString(word: string): string {
    return arrayRandomiser(word.split('')).join('')
}