import type { CSSColor, URI } from "$lib/typescript/types/Utils"
import { writable } from "svelte/store"

export interface PlayerState {
    background: {
        color: CSSColor | undefined
        image?: URI | undefined
    }
}

export const playerState = writable<PlayerState>({
    background: {
        color: "rgba(190,147,255,0.64)",
        image: "https://cdn.discordapp.com/attachments/968323801253306428/1133442471045648394/thumbanil.png"
    }
})