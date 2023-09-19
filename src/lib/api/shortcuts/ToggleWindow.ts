import { mutaState } from "$lib/api/stores/MutaState"
import { appWindow } from "@tauri-apps/api/window"

export async function togglePlayer() {
    if (!mutaState.subscribe(state => state.isVisible)) {
        await appWindow.hide()
    } else {

        await appWindow.setFocus()
        await appWindow.show()

        mutaState.update(state => {
            state.isVisible = !state.isVisible
            return state
        })
    }
}