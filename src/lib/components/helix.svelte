<script lang="ts">
  import ImageDisplayer from "$lib/components/ImageDisplayer.svelte";
  
  export let images: { src: string }[] = [];

  export let width: number = 960;
  export let height: number = 540;
  export let frame_rate: number = 1000;
  export let backgroundColor: string = "";
  export let iconColor: string = "";
  export let borderColor: string = "";
  export let displayerAnimation: ((node: Element, options?: any) => any);
  export let borderRadius: boolean = false;

  width /= 2;
  height /= 2;

  if(backgroundColor == ""){
    backgroundColor = '#fff'
  }

  if(iconColor == ""){
    iconColor = '#000'
  }

  if(borderColor == ""){
    borderColor = '#999999'
  }

  let disp: boolean = false;

  let remaining = images.length - 3;

  const displayHelix = () => {
    disp = !disp;
  };

  const getExtension = (filename: string) => {
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }

  const isImage = (images: { src: string }[]): boolean => {
  for (const image of images) {
    const ext = getExtension(image.src);
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
        <img src={image.src} alt={image.src} width={width / 4} height={height / 4}>
        {#if index === 3}
          <button class="dark-overlay" on:click={displayHelix} style="width: {width / 4}px; height: {height / 4}px;">
            <span class="counter">+ {remaining}</span>
          </button>
        {/if}
      </div>
    {/each}
  </div>
{:else}
  <button class="leave_helix" on:click={displayHelix}><svg class="x_btn" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 384 512"><path fill="white" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206L56.6 43.5c-11.3-13.6-31.5-15.4-45.1-4.1S-3.9 70.9 7.4 84.5L150.3 256L7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306l135.4 162.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256z"/></svg></button>
  <div class="displayer">
      <ImageDisplayer images={images} width={width} height={height} frame_rate={frame_rate} backgroundColor={backgroundColor} iconColor={iconColor} borderColor={borderColor} displayerAnimation={displayerAnimation} borderRadius={borderRadius}/>
  </div>
{/if}

<style>
  .image-grid {
    display: flex;
    width: 30%;
    gap: 0.5rem;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .image-grid > div {
    display: flex; 
    flex-basis: calc(50% - 40px);  
    justify-content: center;
    flex-direction: column;
  }

  .image-block {
    position: relative;
    overflow: hidden;
  }

  .dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  .counter {
    color: white;
    font-size: 24px;
    font-weight: bold;
  }

  .leave_helix {
      margin: 10px;
      padding: 10px;
      position: absolute;
      z-index: 99;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.425);
      background-color: rgba(0, 0, 0, 0.534);
      border-radius: 50px;
      cursor: pointer;
      transition: 0.3s;
  }

  .leave_helix:hover{
      background-color: rgba(70, 70, 70, 0.808);
  }

  .x_btn{
      display: flex;
      justify-content: center;
  }

  @media only screen and (max-width: 768px) {
      .image-grid {
        width: 100%;
        height: auto;
        grid-template-columns: 1fr 1fr;
        gap: 0.5rem;
      }
  }
</style>
