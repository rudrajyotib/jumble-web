import LocalRepo from "./LocalStockOfWords"

export interface WordService {
    nextWord(): string
}


class WordServiceImpl implements WordService {
    nextWord(): string {
        let nextWordFound = false
        let nextWord = ''
        while (!nextWordFound) {
            nextWord = LocalRepo[Math.floor(Math.random() * LocalRepo.length)].toUpperCase()
            if (nextWord.trim() !== '' && nextWord.length > 5) {
                nextWordFound = true
            }
        }
        return nextWord
    }
}

export { WordServiceImpl as WordServiceImpl }