// !!! KEEP UP SIMPLY !!! //
// !!! KEEP UP SIMPLY !!! //
// !!! KEEP UP SIMPLY !!! //

import { writable } from "svelte/store"

interface MutaConfig {
    shortcuts?: {
        toggle?: string
    }
    ui?: {
        borderRadius?: number
    }
}

export const defaultMutaConfig: MutaConfig = {
    ui: {
        borderRadius: 25
    },

    /**
     * https://github.com/tauri-apps/tao/blob/dev/src/keyboard.rs
     */
    shortcuts: {
        toggle: "CommandOrControl+`"
    }
}

// TODO : load config from config path
// noinspection UnnecessaryLocalVariableJS
export const loadedMutaConfig: MutaConfig = defaultMutaConfig

// load config first, then else override missing configs to default
const completeMutaConfig: MutaConfig = {
    ...defaultMutaConfig,
    ...loadedMutaConfig,
}

export const mutaConfig = writable<MutaConfig>(completeMutaConfig);
