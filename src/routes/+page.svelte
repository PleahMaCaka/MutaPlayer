<script lang="ts">
    import { initPlayer } from "$lib/api/InitPlayer"
    import { togglePlayer } from "$lib/api/shortcuts/ToggleWindow"
    import Background from "$lib/components/Background.svelte"
    import { register, unregister } from "@tauri-apps/api/globalShortcut"
    import { onMount } from "svelte"

    onMount(async () => {
        await initPlayer()

        await unregister("CommandOrControl+`") // temp
        await register("CommandOrControl+`", async () => {
            await togglePlayer()
        })
    })

</script>

<Background>
    <h1>Player</h1>
</Background>

<style>

    h1 {
        color: red;
    }

</style>
