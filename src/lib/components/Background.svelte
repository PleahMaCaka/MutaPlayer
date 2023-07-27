<script>
    import "$lib/components/styles/MoveAnimations.css"

    let borderRadius = 25
</script>

<div id="bg-wrapper"
     style="--border-radius: {borderRadius}px"
>
    <div id="bg-image"></div>
    <div id="bg-content-wrapper">
        <slot/>
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

    #bg-image {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(https://cdn.discordapp.com/attachments/966760602720665720/1131937730507579452/example.png);
        z-index: -100;
        filter: blur(50px) brightness(0.75);
    }
</style>
