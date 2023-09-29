// !!! KEEP UP SIMPLY !!! //
// !!! KEEP UP SIMPLY !!! //
// !!! KEEP UP SIMPLY !!! //

import { writable } from "svelte/store"

interface ConfigStore {
    shortcuts?: {
        toggle?: string
    }
    ui?: {
        borderRadius?: number
    }
}

export const defaultMutaConfig: ConfigStore = {
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
export const loadedMutaConfig: ConfigStore = defaultMutaConfig

// load config first, then else override missing configs to default
const completeMutaConfig: ConfigStore = {
    ...defaultMutaConfig,
    ...loadedMutaConfig
}

export const mutaConfig = writable<ConfigStore>(completeMutaConfig);
