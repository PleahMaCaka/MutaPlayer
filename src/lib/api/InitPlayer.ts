import { move_window, Position } from "tauri-plugin-positioner-api";
import { resizePlayer } from "$lib/api/sizer/PlayerResizer";

export async function initPlayer() {
    await resizePlayer()
    move_window(Position.TopCenter)
}