<script lang="ts">
    import { mutaState } from "$lib/api/stores/MutaState"

    let subtitle: string | undefined = $mutaState.music?.subtitle
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