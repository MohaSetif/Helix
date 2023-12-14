<script lang="ts">
    export let images = [
        {imageRef: ""}
    ]

    export let width: number;
    export let height: number;

</script>

<div class="helix">
    {#if images.every(image => !image.imageRef.trim())}
        <p>Nothing to display</p>
    {:else}
        {#each images as image}
           <img class="frame" src={image.imageRef} alt={image.imageRef} width={width} height={height}/>
        {/each}
    {/if}
</div>