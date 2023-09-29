// noinspection JSUnusedGlobalSymbols

export enum LogLevel {
    "INFO",
    "WARN",
    "ERROR",
    "DEBUG",
    "CRITICAL"
}

export type LogType = "INFO" | "WARN" | "ERROR" | "DEBUG" | "CRITICAL"

interface ColorType {
    [ key: string ]: string
}


const termColor: ColorType = {
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    white: "\x1b[37m",
    bold: "\x1b[1m",
    reset: "\x1b[0m"
}

const webColor: ColorType = {
    red: "#ff0000",
    green: "#00ff00",
    yellow: "#ffff00",
    blue: "#0000ff",
    white: "#ffffff",
    bold: "bold",
    reset: "reset"
}

export class Logger {
    public static config: {
        debugMode?: boolean
        useCSSColor?: boolean
        disableDate?: boolean
    } = {
        debugMode: false,
        useCSSColor: false,
        disableDate: false
    }

    public static log(type: string, color: string, ...content: any) {
        if (type === "DEBUG" && !this.config.debugMode) return

        let logFunc: Function
        switch (type) {
            case "ERROR":
            case "CRITICAL":
                logFunc = console.error
                break
            case "WARN":
                logFunc = console.warn
                break
            default:
                logFunc = console.log
        }

        if (this.config.useCSSColor) {
            logFunc(`%c${this.date()} [${type}] :: ${content}`, `color: ${(webColor as any)[ color ]}`)
        } else {
            logFunc(`${(termColor as any)[ color ]}${this.date()} [${type}] :: ${content}${termColor.reset}`)
        }
    }

    public static info(...content: any) {
        this.log("INFO", "green", ...content)
    }

    public static warn(...content: any) {
        this.log("WARN", "yellow", ...content)
    }

    public static error(...content: any) {
        this.log("ERROR", "red", ...content)
    }

    public static debug(...content: any) {
        this.log("DEBUG", "blue", ...content)
    }

    public static critical(...content: any) {
        if (this.config.useCSSColor) {
            console.error(`%c${this.date()} [CRITICAL] :: ${content}`, `color: ${webColor.red}; ${webColor.bold}`)
        } else {
            console.error(termColor.red + termColor.bold, `${this.date()} [CRITICAL] :: ${content}`, termColor.reset)
        }
    }

    /**
     * TODOs
     * - Use more soft colors (not high contrast)
     * - Use white for the content text
     */

    private static date(): string {
        const date = new Date()
        const appendZero = (num: number) => ("0" + num).slice(-2)

        const year = appendZero(date.getFullYear())
        const month = appendZero(date.getMonth() + 1)
        const day = appendZero(date.getDate())

        const hours = appendZero(date.getHours())
        const minutes = appendZero(date.getMinutes())
        const seconds = appendZero(date.getSeconds())

        const c_date = `${year}-${month}-${day}`
        const c_time = `${hours}:${minutes}:${seconds}`

        return this.config.disableDate ? `[${c_time}] ::` : `[${c_date} ${c_time}] ::`
    }

}

export default Logger