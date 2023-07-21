// https://tauri.app/v1/api/js/window/#currentmonitor

import { appWindow, currentMonitor, PhysicalSize } from "@tauri-apps/api/window"

export async function resizePlayer() {
    const size = await getMonitorSize()
    if (size === undefined)
        throw new Error("Could not get monitor size")
    await appWindow.setSize(new PhysicalSize(size.width!, size.height! / 4.5))
}

async function getMonitorSize() {
    const monitor = await currentMonitor()

    const width: number | undefined = monitor?.size.width
    const height: number | undefined = monitor?.size.height

    return { width, height }
}