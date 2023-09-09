<script lang="ts">
    import { playerState } from "$lib/api/stores/StateStore"

    let subtitle: string | undefined = $playerState.music?.subtitle
</script>

<div>
    <h2 id="music-subtitle">
        {subtitle ?? "-"}
    </h2>
</div>

<style>
    #music-subtitle {
        padding: 0;
        margin: 0;
        font-size: 1.5em;
        color: rgba(0, 0, 0, 0.7)
    }
</style>