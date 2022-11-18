
import Letter from "../types/Letter";

export class JumbleLetter implements Letter {

    constructor(index: number, value?: string) {
        this.index = index;
        this.value = value ? value : '_';
    }

    clickable: () => boolean = () => {
        if (this.value == '' || this.value.trim() == '' || this.value == '_') {
            return false
        }
        return true
    }

    clear: () => void = () => { this.value = '_' };

    index: number;
    value: string;

}