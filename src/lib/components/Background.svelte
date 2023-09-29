<script lang="ts">
    import { mutaState as state } from "$lib/api/stores/MutaState"
    import "$lib/components/styles/MoveAnimations.css"
    import type { CSSColor } from "$lib/types/Utils"

    let borderRadius = 25

    let color: CSSColor | undefined = $state.bg.color

    let isImage: boolean = false
    let source: string | undefined = $state.bg.image

    state.subscribe(value => {
        isImage = value.bg.image !== undefined
    })
</script>

<div id="bg-wrapper"
     style="--border-radius: {borderRadius}px"
>
    {#if isImage}
        <div class="bg-image"
             style="--bg-image: url('{source}')"
        ></div>
    {:else}
        <div class="bg-image"
             style="--bg-color: {color}"
        ></div>
    {/if}

    <div id="bg-content-wrapper">
        <slot />
    </div>
</div>


<style>
    #bg-content-wrapper {
        width: 100%;
        height: 100%;
        padding: 0;
        position: absolute;
    }

    #bg-wrapper {
        position: absolute;
        height: 100%;
        overflow: hidden;
        box-shadow: inset 0 0 0 1px #BE81FFFF;
        border-radius: var(--border-radius);

        width: 75%;
        margin: 0 auto;
        left: 0;
        right: 0;

        /* TOP-DOWN mode, if reverse this: Uwu  */
        /*border-radius: 0 0 var(--border-radius) var(--border-radius);*/
        /*box-shadow: inset 0 -15px 0 -10px #BE81FFFF;*/

        animation: slideDown 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    .bg-image {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: var(--bg-image);
        background-color: var(--bg-color);
        z-index: -100;
        filter: blur(50px) brightness(0.75);
    }
</style>
