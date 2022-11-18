import { createArrayOfEmptyElements, createLettersArrayWithPosition, randomiseString } from "../../utils/StringUtils"
import Letter from "../types/Letter"

export class JumbleBoard {

    targetWord: string
    questionFrame: Letter[]
    answerFrame: Letter[]
    userInput: number[]
    lastAnswerPoint: number

    constructor(target: string) {
        this.targetWord = target
        this.questionFrame = createLettersArrayWithPosition(randomiseString(this.targetWord))
        this.answerFrame = createArrayOfEmptyElements(this.targetWord)
        this.userInput = []
        this.lastAnswerPoint = -1
    }

    moveFromQuestionToAnswerFrame(index: number) {
        if (!this.questionFrame[index].clickable()) {
            return
        }
        this.lastAnswerPoint += 1
        this.answerFrame[this.lastAnswerPoint].value = this.questionFrame[index].value
        this.questionFrame[index].clear()
        this.userInput.push(index)
    }

    undoLastAnswer() {
        if (this.lastAnswerPoint === -1) {
            return
        }
        if (this.userInput.length <= 0) {
            return
        }
        let indexInQuestionFrame: number = this.userInput.pop() as number
        this.questionFrame[indexInQuestionFrame].value = this.answerFrame[this.lastAnswerPoint].value
        this.answerFrame[this.lastAnswerPoint].clear()
        this.lastAnswerPoint = this.lastAnswerPoint - 1
    }

    undoAll() {
        while (this.lastAnswerPoint != -1) {
            this.undoLastAnswer()
        }
    }

    reshuffle() {
        this.undoAll()
        this.questionFrame = createLettersArrayWithPosition(randomiseString(this.targetWord))
    }

    answerReached(): boolean {
        if (this.lastAnswerPoint !== (this.targetWord.length - 1)) {
            return false
        }
        return this.answerFrame.map((frame) => frame.value.trim()).join('') === this.targetWord
    }

    presentStateOfAnswer(): string {
        return this.answerFrame.map((frame) => frame.value.trim()).join('')
    }

    presentStateOfQuestion(): string {
        return this.questionFrame.map((frame) => frame.value.trim()).join('')
    }

} 