<script>
    import Thumbnail from "$lib/components/player/Thumbnail.svelte"
    import SideButtons from "$lib/components/player/side/SideButtons.svelte";
    import Holder from "$lib/components/player/Holder.svelte";
    import Title from "$lib/components/player/Title.svelte";
    import SubTitle from "$lib/components/player/SubTitle.svelte";
    import Controller from "$lib/components/player/control/Controller.svelte";
</script>

<div id="player-wrapper">
    <SideButtons/>
    <Thumbnail src="https://cdn.discordapp.com/attachments/968323801253306428/1133442471045648394/thumbanil.png"/>
    <div id="holder-below-contents">
        <Holder/>
        <!-- Automatic sense of darker or lighter background -->
        <!-- to make title/subtitle(author) font color change -->
        <!-- to white or black -->
        <Title/>
        <SubTitle/>

        <Controller/>
    </div>
</div>

<style>
    #player-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    #holder-below-contents {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-left: 1rem;
    }
</style>