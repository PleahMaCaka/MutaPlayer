<script lang="ts">
    import { mutaState } from "$lib/api/stores/MutaState"
    import Button from "$lib/components/buttons/Button.svelte"
    import PauseSVG from "$lib/static/player/controller/pause.svg"
    import PlaySVG from "$lib/static/player/controller/play.svg"
    import PreviousSVG from "$lib/static/player/controller/skip-back.svg"
    import NextSVG from "$lib/static/player/controller/skip-forward.svg"

    function previous() {
        console.log("Previous")
    }


    let isPlaying = $mutaState.music?.isPlaying

    function togglePlayPause() {
        console.log("Play / Pause")
        isPlaying = !isPlaying
    }

    function next() {
        console.log("Next")
    }

</script>

<div id="player-controller">
    <Button
        execute={previous}
        icon={PreviousSVG}
        tooltip="Previous"
    />
    {#if isPlaying}
        <Button
            tooltip="Pause"
            execute={togglePlayPause}
            icon={PauseSVG}
        />
    {:else}
        <Button
            tooltip="Play"
            execute={togglePlayPause}
            icon={PlaySVG}
        />
    {/if}
    <Button
        execute={next}
        icon={NextSVG}
        tooltip="Next"
    />
</div>

<style>
    #player-controller {
        margin-top: 20vh;
        background-color: #6a5877;
        border-radius: 1rem;
    }
</style>