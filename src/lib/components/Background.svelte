<script>
    let borderRadius = 25
</script>

<div>
    <div id="bg-wrapper"
         style="--border-radius: {borderRadius}px"
    >
        <div id="bg-image"></div>
    </div>
    <div id="bg-content-wrapper">
        <slot/>
    </div>
</div>


<style>
    #bg-content-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;

        animation: slideDown 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    #bg-wrapper {
        position: fixed;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: var(--border-radius);
        box-shadow: inset 0 0 0 1px #BE81FFFF;

        animation: slideDown 1s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes slideDown {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0%);
        }
    }

    #bg-image {
        width: 100%;
        height: 100%;
        background-color: rgba(80, 80, 80, 0.85);
        background-image: url(https://cdn.discordapp.com/attachments/966760602720665720/1131937730507579452/example.png);
        z-index: -100;
        filter: blur(50px) brightness(0.75);
    }
</style>
