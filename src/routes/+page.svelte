<script lang="ts">
    import { initPlayer } from "$lib/api/player/InitPlayer"
    import { togglePlayer } from "$lib/api/shortcuts/ToggleWindow"
    import { mutaState } from "$lib/api/stores/MutaState"
    import Background from "$lib/components/Background.svelte"
    import Player from "$lib/components/player/Player.svelte"
    import Logger from "$lib/utils/Logger"
    import { register, unregister } from "@tauri-apps/api/globalShortcut"
    import { onMount } from "svelte"

    onMount(async () => {
        await initPlayer()

        await unregister("CommandOrControl+`") // temp
        await register("CommandOrControl+`", async () => {
            await togglePlayer()
        })

        Logger.config = {
            debugMode: true,
            useCSSColor: true,
            disableDate: true
        }

        Logger.info("Hello, Music Lover!")
    })

</script>

{#if $mutaState.isVisible}
    <Background>
        <Player />
    </Background>
{/if}
