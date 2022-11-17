import LocalRepo from "./LocalStockOfWords"

export interface WordService {
    nextWord(): string
}


class WordServiceImpl implements WordService {
    nextWord(): string {
        return LocalRepo[Math.floor(Math.random() * LocalRepo.length)].toUpperCase()
    }
}

export { WordServiceImpl as WordServiceImpl }