// https://tauri.app/v1/api/js/window/#currentmonitor

import { currentMonitor } from "@tauri-apps/api/window"

export async function getMonitorSize() {
    const monitor = await currentMonitor()

    const width: number | undefined = monitor?.size.width
    const height: number | undefined = monitor?.size.height

    return { width, height }
}