// I know URL is included in URI, but I want to be explicit
export type URL = `https://${string}` | `http://${string}`

export type URI = `${string}:${string}`

export type SVG = `${string}.svg`

export type Hex = `#${string}`

export type RGB = `rgb(${number}, ${number}, ${number})` | `rgb(${number},${number},${number})`

export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})` | `rgba(${number},${number},${number},${number})`

export type CSSColor = Hex | RGB | RGBA


export type AtoZLower =
    "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "g"
    | "h"
    | "i"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "o"
    | "p"
    | "q"
    | "r"
    | "s"
    | "t"
    | "u"
    | "v"
    | "w"
    | "x"
    | "y"
    | "z"

export type AtoZUpper =
    "A"
    | "B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z"

export type AtoZ = AtoZLower | AtoZUpper