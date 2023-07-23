<script lang="ts">
    import { initPlayer } from "$lib/api/InitPlayer"
    import { togglePlayer } from "$lib/api/shortcuts/ToggleWindow"
    import Background from "$lib/components/Background.svelte"
    import Player from "$lib/components/Player/Player.svelte"
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
    <Player/>
</Background>
