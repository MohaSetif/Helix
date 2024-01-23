<script lang="ts">
    import ImageDisplayer from "$lib/components/ImageDisplayer.svelte";
    
    export let images: { imageRef: string }[] = [];
  
    export let width: number = 960;
    export let height: number = 540;
    export let frame_rate: number = 1000;
    export let backgroundColor: string;
    export let iconColor: string;
    export let borderColor: string;

    let disp: boolean = false;
  
    let remaining = images.length - 3;
  
    const displayHelix = () => {
      disp = !disp;
    };

    const getExtension = (filename: string) => {
      var parts = filename.split('.');
      return parts[parts.length - 1];
    }

    const isImage = (images: { imageRef: string }[]): boolean => {
    for (const image of images) {
      const ext = getExtension(image.imageRef);
      switch (ext.toLowerCase()) {
        case 'jpg':
        case 'jpeg':
        case 'png':
          break;
        default:
          return false;
      }
    }
    return true;
  }

  if (!isImage(images)) {
    alert("There are no valid files! Only JPG, JPEG, or PNG are allowed.");
  }
  </script>
  
  {#if !disp}
    <div class="image-grid">
      {#each images.slice(0, 4) as image, index}
        <div class="image-block" class:index={index}>
          <img src={image.imageRef} alt={image.imageRef} width={width / 4} height={height / 4}>
          {#if index === 3}
            <button class="dark-overlay" on:click={displayHelix} style="width: {width / 4}px; height: {height / 4}px;">
              + {remaining}
            </button>
          {/if}
        </div>
      {/each}
    </div>
  {:else}
    <button class="leave_helix" on:click={displayHelix}><svg class="x_btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path fill="white" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206L56.6 43.5c-11.3-13.6-31.5-15.4-45.1-4.1S-3.9 70.9 7.4 84.5L150.3 256L7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306l135.4 162.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256z"/></svg></button>
    <div>
        <ImageDisplayer images={images} width={width} height={height} frame_rate={frame_rate} backgroundColor={backgroundColor} iconColor={iconColor} borderColor={borderColor}/>
    </div>
  {/if}
  
  <style>
    :global(.image-grid) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2px;
        position: relative;
        border-radius: 30px;
        width: 36.5%;
    }

    :global(.image-block) {
        position: relative;
        overflow: hidden;
    }

    :global(.dark-overlay) {
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        font-size: 2em;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        opacity: 1;
        border: none;
    }

    :global(.image-block:hover .dark-overlay) {
        border: 1px solid white;
    }

    .leave_helix {
        margin: 10px;
        padding: 5px;
        position: absolute;
        z-index: 99;
        background-color: transparent;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: 0.3s;
    }

    :global(.leave_helix:hover){
        background-color: rgb(112, 112, 112);
    }

    :global(.x_btn){
        display: flex;
        justify-content: center;
    }
  </style>
  