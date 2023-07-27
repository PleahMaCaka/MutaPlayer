<script>
    import Thumbnail from "$lib/components/player/Thumbanil.svelte"
    import SideButtons from "$lib/components/player/side/SideButtons.svelte";
</script>

<div id="player-wrapper">
    <SideButtons/>
    <Thumbnail src="https://cdn.discordapp.com/attachments/968323801253306428/1133442471045648394/thumbanil.png"/>
</div>

<style>
    #player-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
</style>