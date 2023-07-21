import { appWindow } from "@tauri-apps/api/window"

export async function togglePlayer() {
    if (await appWindow.isVisible()) {
        await appWindow.hide()
    } else {
        await appWindow.show()
    }
}