<script lang="ts">
  import image1 from "../img/1699433953179.jpg"
  import image2 from "../img/1699433953185.jpg"
  import image3 from "../img/Walter_White_S5B.png"
  import image4 from "../img/Screenshot_2023-12-19_17_34_47.png"
  import image5 from "../img/Screenshot_2023-12-19_18_05_31.png"
  import image6 from "../img/imgbin-computer-icons-postgresql-database-others-SKZhuzreHG59SpDwpJV6M0Yz6.jpg"
  import image7 from "../img/410928403_269841702750227_8888506643555012392_n.jpg"
  import image8 from "../img/AdobeStock_263959018-scaled.jpeg"
  import image9 from "../img/5278006-960_546179030-1384488_p.jpg"
  import image10 from "../img/Screenshot_2023-12-28_19_02_23.png"
  import Helix from "$lib/components/helix.svelte";
  import { slide } from "svelte/transition";

  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
    { src: image9 },
    { src: image10 }
  ];

  /**
   * TODO: fix imageDisplayer size in the list and page
  **/ 

  let width: number = 1500;
  let height: number = 1000;
  let frame: number = 1000;
  let backgroundColor: string;
  let iconColor: string;
  let borderColor: string;
  let borderRadius: boolean = true;
  
  let displayerAnimation = (node: Element, options?: any) => {
    options = options || {  };
    return slide(node, options);
  };

</script>

<Helix 
  images={images} 
  width={width} 
  height={height} 
  frame_rate={frame} 
  backgroundColor={backgroundColor} 
  iconColor={iconColor} 
  borderColor={borderColor}
  displayerAnimation={displayerAnimation}
  borderRadius={borderRadius}
/>
