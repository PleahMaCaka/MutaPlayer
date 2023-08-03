import type { CSSColor, URI } from "$lib/typescript/types/Utils"
import { writable } from "svelte/store"

export interface PlayerState {
    bg: {
        color: CSSColor | undefined
        image?: URI | undefined
    },
    music?: {
        title: string,
        subtitle?: string
        isPlaying: boolean
    }
}

export const playerState = writable<PlayerState>({
    bg: {
        color: "rgba(190,147,255,0.64)",
        image: "https://cdn.discordapp.com/attachments/968323801253306428/1133442471045648394/thumbanil.png"
    },
    music: {
        title: "Title",
        subtitle: "Author",
        isPlaying: false
    }
})