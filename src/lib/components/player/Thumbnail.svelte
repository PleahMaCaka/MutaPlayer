<script lang="ts">
    import type { URI } from "$lib/typescript/types/Utils"

    export let src: URI | URL
</script>

<div id="thumb-wrapper">
    <div id="thumb-frame">
        <img id="thumb-img"
             alt="Thumbnail"
             src={src}
        />
    </div>
</div>


<style>
    #thumb-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 100vh;
        margin-left: 1%;
    }
    #thumb-frame {
        width: 170px;
        height: 170px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(0, 0, 0, 0.5);
        border-radius: 5%;
        overflow: hidden;
    }

    #thumb-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
</style>