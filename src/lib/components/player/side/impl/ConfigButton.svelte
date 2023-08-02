<script lang="ts">
    import { toggleConfigWindow } from "$lib/api/config/ToggleConfigWindow"
    import Button from "$lib/components/buttons/Button.svelte"
    import moreHorizontal from "$lib/static/player/side/more-horizontal.svg"


    const execute = () => {
        console.log("Open configuration!")
        toggleConfigWindow()
    }
</script>

<Button
    tooltip="Open Configuration!"
    execute={execute}
    icon={moreHorizontal}
/>