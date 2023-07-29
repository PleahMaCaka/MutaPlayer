<script>
    import Button from "$lib/components/buttons/Button.svelte"
    import UpSVG from "$lib/static/chevrons-up.svg"

    const execute = () => {
        console.log("hide player!")
    }
</script>

<Button
    icon={UpSVG}
    execute={execute}
    tooltip="Pin player"
/>

