<script lang="ts">
    import Button from "$lib/components/buttons/Button.svelte"
    import moreHorizontal from "$lib/static/more-horizontal.svg"

    const execute = () => {
        console.log("Open configuration!")
    }
</script>

<Button
    tooltip="Open Configuration!"
    execute={execute}
    icon={moreHorizontal}
/>