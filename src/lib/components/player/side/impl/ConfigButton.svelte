<script lang="ts">
    import { toggleSettingsWindow } from "$lib/api/config/ToggleSettingsWindow"
    import Button from "$lib/components/buttons/Button.svelte"
    import moreHorizontal from "$lib/static/player/side/more-horizontal.svg"


    const execute = () => {
        console.log("Open configuration!")
        toggleSettingsWindow()
    }
</script>

<Button
    execute={execute}
    icon={moreHorizontal}
    tooltip="Open Configuration!"
/>