<script lang="ts">
    import { afterUpdate, onMount } from 'svelte';
    import cantor01 from '../assets/singer01.jpg';
    import cantor02 from '../assets/singer02.jpg';
    import cantor04 from '../assets/singer04.jpg';
    import cantor05 from '../assets/singer05.jpg';
    import cantor06 from '../assets/singer06.png';
    type imageType = {
        title?: string
        src: string
     }

    let images: imageType[] =[
        {src: cantor02},
        {src: cantor01},
        {src: cantor04},
        {src: cantor05},
        {src: cantor06},
    ];

  
</script>
  
  <ul class="lg:hidden flex w-full snap-x snap-mandatory gap-6 md:gap-8 lg:gap-10 overflow-x-auto pb-6 before:w-[15vw] md:before:w-[0vw] before:shrink-0 after:w-[15vw] lg:flex-wrap lg:justify-around lg:items-center ">
    {#each images as { src }, index}
        <li class="shrink-0 snap-center">
            <img class='rounded-2xl h-96 w-[19em] md:w-[21.5em] lg:w-[29em] lg:h-[30em]' src={src} alt="Imagem Carrosel">
        </li>
    {/each}
  </ul>