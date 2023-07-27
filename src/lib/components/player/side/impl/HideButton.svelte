<script>
    import Button from "$lib/components/buttons/Button.svelte"
    import DownSVG from "$lib/static/chevrons-down.svg"

    const execute = () => {
        console.log("hide player!")
    }
</script>

<Button
    icon={DownSVG}
    execute={execute}
    tooltip="Pin player"
/>

