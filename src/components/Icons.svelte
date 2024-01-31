<script>
    import Icon from '@iconify/svelte';
    import instagram from '../assets/instagram-icon.svg'
    import tiktok from '../assets/tiktok-icon.svg'
    import whatsapp from '../assets/whatsapp-icon.svg'
    import youtube from '../assets/youtube-icon.svg'
</script>

<div class="flex w-3/4 justify-around ">
    <span class="text-black"><a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank"><Icon class='white-block' icon="uil:instagram-alt" color="" /></a></span>
    <span class="text-black"><a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank"><Icon class='white-block' icon="uil:whatsapp-alt" color="" /></a></span>
    <span class="text-black"><a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank"><Icon class='white-block' icon="uil:youtube" color="" /></a></span>
    <span class="text-black"><a href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank"><Icon class='white-block' icon="uil:youtube" color="" /></a></span>
    <!-- <img src={instagram} alt="Ícone do instagram">
    <img src={whatsapp} alt="Ícone do whatsapp">
    <img src={tiktok} alt="Ícone do tiktok">
    <img src={youtube} alt="Ícone do youtube"> -->
</div>

<style>
    img {
        width: 3rem;
        height: 4rem;
    }
    span :global(svg) {
       font-size: 52px;
       /* line-height: 2em; */
   }
</style>