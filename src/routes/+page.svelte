<script lang="ts">
    import Helix from "$lib/Helix.svelte";

    import image1 from "../img/1699433953179.jpg"
    import image2 from "../img/1699433953185.jpg"
    import image3 from "../img/Walter_White_S5B.png"

    const images = [
        {imageRef: image1},
        {imageRef: image2},
        {imageRef: image3}
    ]

    let width: number = 960;
    let height: number = 540;
</script>

<main>
    <Helix images={images} width={width} height={height} />
</main>