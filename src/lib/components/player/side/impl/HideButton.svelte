<script>
    import Button from "$lib/components/buttons/Button.svelte"
    import UpSVG from "$lib/static/player/side/chevrons-up.svg"

    const execute = () => {
        console.log("hide player!")
    }
</script>

<Button
    execute={execute}
    icon={UpSVG}
    tooltip="Pin player"
/>

