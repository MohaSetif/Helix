<script lang="ts">
    import image1 from "../img/1699433953179.jpg"
    import image2 from "../img/1699433953185.jpg"
    import image3 from "../img/Walter_White_S5B.png"
    import image4 from "../img/Screenshot_2023-12-19_17_34_47.png"
    import image5 from "../img/Screenshot_2023-12-19_18_05_31.png"
    import image6 from "../img/imgbin-computer-icons-postgresql-database-others-SKZhuzreHG59SpDwpJV6M0Yz6.jpg"
    import image7 from "../img/410928403_269841702750227_8888506643555012392_n.jpg"
	  import Helix from "$lib/components/helix.svelte";
  
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
    let frame: number = 1000;
    let backgroundColor: string;
    let iconColor: string;
    let borderColor: string;

  </script>

  <Helix 
    images={images} 
    width={width} 
    height={height} 
    frame_rate={frame} 
    backgroundColor={backgroundColor} 
    iconColor={iconColor} 
    borderColor={borderColor}
  />
  