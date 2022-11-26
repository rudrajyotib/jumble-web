import Config from "./Config"

export type AppContext = {
    getBoardDuration: () => number
}

export class AppConfigurationContext implements AppContext {

    boardDuration: number

    constructor() {
        this.boardDuration = Config.boardDuration
    }

    getBoardDuration = () => {
        return this.boardDuration
    }
}