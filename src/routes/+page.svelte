<script lang="ts">
    import Helix from "$lib/Helix.svelte";
  
    import image1 from "../img/1699433953179.jpg"
    import image2 from "../img/1699433953185.jpg"
    import image3 from "../img/Walter_White_S5B.png"
    import image4 from "../img/Screenshot_2023-12-19_17_34_47.png"
    import image5 from "../img/Screenshot_2023-12-19_18_05_31.png"
    import image6 from "../img/imgbin-computer-icons-postgresql-database-others-SKZhuzreHG59SpDwpJV6M0Yz6.jpg"
    import image7 from "../img/410928403_269841702750227_8888506643555012392_n.jpg"
	import { fade, slide } from "svelte/transition";
  
    const images = [
      { imageRef: image1 },
      { imageRef: image2 },
      { imageRef: image3 },
      { imageRef: image4 },
      { imageRef: image5 },
      { imageRef: image6 },
      { imageRef: image7 }
    ];
  
    let width: number = 960;
    let height: number = 540;
    let disp: boolean = false;
  
    let remaining = images.length - 3;
  
    const displayHelix = () => {
      disp = !disp;
    };
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
    <button class="leave_helix" on:click={displayHelix}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 384 512"><path fill="white" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206L56.6 43.5c-11.3-13.6-31.5-15.4-45.1-4.1S-3.9 70.9 7.4 84.5L150.3 256L7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306l135.4 162.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256z"/></svg></button>
    <div>
        <Helix images={images} width={width} height={height}/>
    </div>
  {/if}
  
  <style>
    .image-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
      position: relative;
      border-radius: 30px;
      width: 36.5%;
      padding: 10px;
    }
  
    .image-block {
      position: relative;
      overflow: hidden;
    }
  
    .dark-overlay {
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
  
    .image-block:hover .dark-overlay {
      border: 1px solid white;
    }
  
    .leave_helix {
        margin: 10px;
        position: absolute;
        z-index: 99;
        background-color: transparent;
        border: none;
    }
  </style>
  