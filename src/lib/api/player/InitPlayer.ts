import { resizePlayer } from "$lib/api/player/PlayerResizer";
import { move_window, Position } from "tauri-plugin-positioner-api";

export async function initPlayer() {
    await resizePlayer()
    move_window(Position.TopCenter)
}