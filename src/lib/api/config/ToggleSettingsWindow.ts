import type { WindowOptions } from "@tauri-apps/api/window"
import { WebviewWindow } from "@tauri-apps/api/window"


const label = "settings"
const windowOptions: WindowOptions = {
    title: "Settings",
    url: "http://localhost:5173/settings",
    width: 470,
    height: 600,
    visible: false,
    center: true,
    titleBarStyle: "transparent"
}

let configWindow = new WebviewWindow(label, windowOptions)

export async function toggleSettingsWindow() {
    if (await configWindow.isVisible()) {
        await configWindow.hide()
    } else {
        await configWindow.show()
    }
}

(async () => {
    await configWindow.onCloseRequested(() => {
        configWindow = new WebviewWindow(label, windowOptions)
    })
})()