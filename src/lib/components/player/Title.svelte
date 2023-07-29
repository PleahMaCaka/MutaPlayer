<script lang="ts">
    import { playerState } from "$lib/api/PlayerState"

    let title: string | undefined = $playerState.music?.title
</script>

<div>
    <h1 id="music-title">
        {title ?? "-"}
    </h1>
</div>

<style>
    #music-title {
        padding: 0;
        margin: 0;
        font-size: 2em;

        /* i want dark color */
        color: #000;
        text-shadow: 0 0 10px #fff;
    }
</style>