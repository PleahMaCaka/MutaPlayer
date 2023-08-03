<script lang="ts">
    import Button from "$lib/components/buttons/Button.svelte"
    import PreviousSVG from "$lib/static/player/controller/skip-back.svg"
    import PlaySVG from "$lib/static/player/controller/play.svg"
    import PauseSVG from "$lib/static/player/controller/pause.svg"
    import NextSVG from "$lib/static/player/controller/skip-forward.svg"
    import {playerState} from "$lib/api/player/PlayerState"

    function previous() {
        console.log("Previous")
    }


    let isPlaying = $playerState.music?.isPlaying

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
            tooltip="Previous"
            execute={previous}
            icon={PreviousSVG}
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
            tooltip="Next"
            execute={next}
            icon={NextSVG}
    />
</div>

<style>
    #player-controller {
        margin-top: 20vh;
        background-color: #6a5877;
        border-radius: 1rem;
    }
</style>