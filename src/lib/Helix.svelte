<script lang="ts">
    import { fade, slide, scale, fly } from "svelte/transition"
    import "../css/images.css"
    export let images = [
        {
            imageRef: ""
        }
    ]

    export let width: number;
    export let height: number;

    let counter = 0;
    let isPlaying = false;
    let showall = false;
    let interval: number;

    const autoPlay = () => {
        isPlaying = true;
        interval = setInterval(() => {
            console.log(counter);
            if (counter === images.length - 1) {
                clearInterval(interval); //It stops the interval
                isPlaying = false;
            }
            counter = (counter + 1) % images.length;
        }, 1000);
    }

    const togglePlayPause = () => {
        if (isPlaying) {
            clearInterval(interval);
            isPlaying = false;
        } else {
            autoPlay();
        }
    }

    const playImagesForward = () => {
        counter = (counter + 1) % images.length;
        if(counter > images.length){

        }
        console.log(counter);
    }

    const playImagesBackward = () => {
        counter = (counter - 1) % images.length;
        if(counter < 0){
            counter += images.length;
        }
        console.log(counter);
    }

    const toggle_display = () => {
        showall = !showall;
    }

    const updateCounter = (index: number) => {
        counter = index;
    }

</script>

<div class="helix">
    {#if images.every(image => !image.imageRef.trim())}
        <p>Nothing to display</p>
    {:else}
        <div class="container">
            <div class="img_screen">
                <img src={images[counter].imageRef} alt={images[counter].imageRef} width={width} height={height}>
                <!-- <span>{counter + 1} out of {images.length}</span> -->
            </div>
            <div class="btns">
                <button id="mv_back" on:click={playImagesBackward}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m14 7l-5 5m0 0l5 5"/></svg></button>
                <button id="play" on:click={togglePlayPause}>
                    {#if isPlaying}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                            <path fill="currentColor" d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"/>
                        </svg>
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 6.741c0-1.544 1.674-2.505 3.008-1.728l9.015 5.26c1.323.771 1.323 2.683 0 3.455l-9.015 5.258C7.674 19.764 6 18.803 6 17.26zM17.015 12L8 6.741V17.26z"/>
                        </svg>
                    {/if}
                </button>
                <button id="mv_for" on:click={playImagesForward}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m10 17l5-5m0 0l-5-5"/></svg></button>
                <button id="fullscreen" on:click={toggle_display}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M18.5 5.5H16a1.5 1.5 0 0 1 0-3h3A2.5 2.5 0 0 1 21.5 5v3a1.5 1.5 0 0 1-3 0zM8 5.5H5.5V8a1.5 1.5 0 1 1-3 0V5A2.5 2.5 0 0 1 5 2.5h3a1.5 1.5 0 1 1 0 3m0 13H5.5V16a1.5 1.5 0 0 0-3 0v3A2.5 2.5 0 0 0 5 21.5h3a1.5 1.5 0 0 0 0-3m8 0h2.5V16a1.5 1.5 0 0 1 3 0v3a2.5 2.5 0 0 1-2.5 2.5h-3a1.5 1.5 0 0 1 0-3"/></g></svg></button>
            </div>
        </div>
        {#if showall}
            <div class="display_all" transition:slide>
                {#each images as image, index}
                    <button class="img_selector" on:click={() => updateCounter(index)}>
                        <img class="curr_img" src={image.imageRef} alt={image.imageRef} width={width/4} height={height/4}>
                    </button>
                {/each}
            </div>
        {/if}
    {/if}
</div>