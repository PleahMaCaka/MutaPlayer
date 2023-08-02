import { WebviewWindow } from "@tauri-apps/api/window"

const configWindow = new WebviewWindow(
    "config", {
        title: "Configuration",
        url: "http://localhost:5173/config",
        width: 470,
        height: 600,
        visible: false,
        center: true
    })

export async function toggleConfigWindow() {
    if (await configWindow.isVisible()) {
        await configWindow.hide()
    } else {
        await configWindow.show()
    }
}