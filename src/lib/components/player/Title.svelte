<script lang="ts">
    import { mutaState } from "$lib/api/stores/MutaState"

    let title: string | undefined = $mutaState.music?.title
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