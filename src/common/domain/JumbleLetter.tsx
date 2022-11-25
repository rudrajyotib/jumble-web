
import Letter from "../types/Letter";

export class JumbleLetter implements Letter {

    constructor(index: number, value?: string) {
        this.index = index;
        this.value = value ? value : '_';
        this.positionalCorrectness = false;
    }

    clickable: () => boolean = () => {
        if (this.value === '' || this.value.trim() === '' || this.value === '_') {
            return false
        }
        return true
    }

    markPositionallyCorrect: () => void = () => {
        this.positionalCorrectness = true
    }

    markPositionallyIncorrect: () => void = () => {
        this.positionalCorrectness = false
    }

    isPositionallyCorrect: () => boolean = () => {
        return this.positionalCorrectness
    }

    clear: () => void = () => {
        this.value = '_'
        this.positionalCorrectness = false
    };

    index: number;
    value: string;
    positionalCorrectness: boolean

}