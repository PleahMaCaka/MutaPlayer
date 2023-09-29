<script>
    import ConfigButton from "$lib/components/player/side/impl/ConfigButton.svelte"
    import HideButton from "$lib/components/player/side/impl/HideButton.svelte"
</script>

<div id="side-btn-list">
    <HideButton />
    <ConfigButton />
</div>

<style>
    #side-btn-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        margin-top: 1%;
        margin-left: 1%;

        gap: 5%;
    }
</style>