<script lang="ts">
    import type { SVG, URI, URL } from "$lib/types/Utils"

    export let execute: () => void

    export let tooltip: string = "Description not provided."

    /**
     * If not add string in a type hint, cannot be use imported SVG just
     * The meaning of the type is reduced, but it is unavoidable.
     */
    export let icon: URI | URL | SVG | string
</script>

<button class="side-btn" on:click={execute}>
    <img class="side-btn-img" alt={tooltip} src={icon} />
</button>

<style>
    .side-btn {
        width: 48px;
        height: 48px;
        border-radius: 25%;
        overflow: hidden;
        background-color: #6a5877;
        filter: brightness(1);
        border: none;
    }

    .side-btn:hover {
        cursor: pointer;
        filter: brightness(1.2);
        transition: 0.17s;
    }

    .side-btn-img {
        z-index: 1;
        top: 0;
        left: 0;
        position: relative;
        padding-top: 5px;
        width: 28px;
        height: 28px;
    }
</style>
