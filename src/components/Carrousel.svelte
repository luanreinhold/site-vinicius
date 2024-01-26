<script lang="ts">
    // import type {SvelteComponent} from 'svelte'
    type imageType = {
        title?: string
        src: string
     }

    export let images: imageType[];
    
</script>
  
  <ul class="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-6 before:w-[15vw] before:shrink-0 after:w-[15vw] lg:hidden">
    {#each images as { src }, index}
        <li class="shrink-0 snap-center">
            <img class='rounded-2xl w-80' src={src} alt="Imagem Carrosel">
        </li>
    {/each}
  </ul>