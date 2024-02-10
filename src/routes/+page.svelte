<script lang="ts">
    //Import Componentes
    import Icon from '@iconify/svelte';
    import Header from '../components/Header.svelte';
    import Carrousel from '../components/Carrousel.svelte';
    import VideoCard from '../components/VideoCard.svelte';
    import Assignature from '../components/font/Assignature.svelte'
    import Icons from '../components/Icons.svelte';
    
    //Imagens
    import cantor from '../assets/cantor.svg';
    import silhueta from '../assets/silhueta.png';

    // Cantor Imagens
    import cantor01 from '../assets/singer01.jpg';
    import cantor02 from '../assets/singer02.jpg';
    import cantor04 from '../assets/singer04.jpg';
    import cantor05 from '../assets/singer05.jpg';
    import cantor06 from '../assets/singer06.png';
    import logo from '../assets/logo.svg'
    
    // Import efetos

    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte';


    //Formatações
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // Import AOS styles
    onMount(() => {
        AOS.init({ duration: 1000 });
    });

</script>

<Header/>
<body class="">
    <section>
        <div class="overflow-hidden h-screen lg:h-[120vh]">
            <img src={cantor} class="pointer-events-none object-cover w-full h-full md:h-auto xl:h-auto lg:mt-[-10%] md:hidden" alt="">
            <img src={cantor02} class="pointer-events-none hidde object-cover w-full h-full md:h-auto xl:h-auto lg:mt-[-10%] md:block" alt="">
        </div>
        <section id="sobreMim" class="h-auto items-center justify-center flex flex-col py-10 md:py-24 px-10 text-sm gap-y-4 md:flex-row md:items-center lg:justify-evenly lg:py-15">
            <img data-aos="zoom-in" class="hidden md:block md:rounded-xl w-72 lg:w-80 xl:w-96" src={cantor06} alt="">
            <div class='flex flex-col md:ml-10 lg:w-2/4 xl:w-2/5'>
                <div data-aos="fade-up" class="text-white mb-6 font-roboto transition:fade={{delay: 250, duration: 300}}">
                    <h1 data-aos="zoom-in" class="text-xl font-white font-bold xl:text-2xl">A HISTÓRIA</h1>
                    <p class="text-sm leading-loose md:leading-relaxed lg:text-base xl:text-lg xl:leading-normal">Cantor sertanejo de Indaial SC, deu início à sua carreira profissional em Junho de 2021, desde lá, sempre mantendo seus esforços para trazer o melhor show para o seu público, com seu repertório mesclado entre, sertanejo romântico, sertanejo balada e pisadinha o repertório contém também um momento “Boteco”, com muito modão, sofrência e música gaúcha, assim podendo atender a todos os gostos dentro de seu estilo.</p>
                </div>
                <div data-aos="fade-up" class="text-white font-roboto">
                    <h1 data-aos="zoom-in" class="text-xl flex justify-end font-bold xl:text-2xl">POR ONDE PASSOU</h1>
                    <p class="text-sm leading-loose md:leading-relaxed lg:text-base xl:text-lg xl:leading-normal">Com shows em alguns locais de referência como: Alive (Blumenau); Vidigal (Blumenau); Boteco seu Fulano (Rio do Sul); Kings Gold (Indaial) entre outros. Seu objetivo agora é conseguir abrir portas em outras cidades, assim podendo levar o seu show onde o contratante pode optar por alguns formatos.</p>
                </div>
            </div>
        </section>
    </section>

    <section class="lg:flex lg:justify-center ">
        <Carrousel/>
    </section>

    <!-- <section class="hidden lg:block lg:flex lg:h-auto lg:flex-wrap bg-slate-300 px-20 justify-center items-center">
        <img class="rounded-2xl h-96 w-[19em] md:w-[21.5em] lg:w-[29em] lg:h-[30em]" src={cantor01} alt="">
        <img class="rounded-2xl h-96 w-[19em] md:w-[21.5em] lg:w-[29em] lg:h-[30em]" src={cantor02} alt="">
        <img class="rounded-2xl h-96 w-[19em] md:w-[21.5em] lg:w-[29em] lg:h-[30em]" src={cantor04} alt="">
        <img class="rounded-2xl h-96 w-[19em] md:w-[21.5em] lg:w-[29em] lg:h-[30em]" src={cantor05} alt="">
        <img class="rounded-2xl h-96 w-[19em] md:w-[21.5em] lg:w-[29em] lg:h-[30em]" src={cantor06} alt="">
    </section> -->

    <hr id='fotos' class="border-1 border-white-400 my-1"/>

    <section class="w-full flex flex-col justify-center items-center py-10 md:p-12">
      <h1 data-aos="fade-in" class='text-white mb-2 font-roboto font-bold'>Meus Shows</h1>
      <div class="flex flex-col gap-8 justify-between md:flex md:flex-row md:w-full md:justify-evenly md:flex-wrap">
          <VideoCard src='https://www.youtube.com/embed/3VWb_U5cJNA?si=CY3qWnyb_OLDBtPh' duration={'200'} />
          <VideoCard src='https://www.youtube.com/embed/VHDjn-gipd8?si=sUS6KI0orN0t481C' duration={'300'}/>
          <VideoCard src='https://www.youtube.com/embed/VvPBramzMZc?si=nIi0REt42dhZQjCN' duration={'400'}/>
      </div>
    </section>

    <section class="bg-white h-40 flex flex-col items-center justify-center">
        <h1 data-aos="fade-up"class="font-roboto text-sm lg:text-lg font-bold py-4">FIQUE POR DENTRO DE NOVOS CONTÉUDOS!</h1>
        <Icons/>
    </section>

    <section id="contato" class="flex flex-col justify-center items-center py-8 px-14 gap-8 lg:flex-row lg:h-[90vh]">
        <img  data-aos="fade-up-right" class='w-60 md:w-[20em] lg:w-[28em]' src={silhueta} alt="">
        <div data-aos="zoom-in" class=" text-white md:w-60">
            <h1 class="jcenter text-xl font-bold md:font-extrabold self-center pb-2">FAÇA UM ORÇAMENTO!</h1>
            <p class="font-roboto text-white text-xs md:text-sm leading-relaxed lg:text-lg lg:leading-normal">Para solicitar é simples, me envie um direct no instagram ou entre em contato através do whatsapp, clicando em um dos ícones abaixo:</p>
            <div class=" mt-2 lg:mt-6 flex justify-evenly items-center">
                <span class="text-white"><a href="https://api.whatsapp.com/send/?phone=554791537104&text=Gostaria+de+solicitar+um+or%C3%A7amento+do+Vini+Marcom&type=phone_number&app_absent=0" target="_blank"><Icon class='white-block transition delay-50 hover:scale-110 ease-in-out' icon="uil:whatsapp-alt" color="" /></a></span>
                <span class="text-white"><a href="https://www.instagram.com/vinimarcom/" target="_blank"><Icon class='white-block transition delay-50 hover:scale-110 ease-in-out' icon="uil:instagram-alt" color="" /></a></span>
            </div>
        </div>
    </section>

    <hr>
    <footer class="h-52 p-5 flex flex-col align-middle justify-end">
        <img class="h-16" src={logo} alt="">
        <Assignature/>
    </footer>
</body>

<style lang='postcss'>
    :global(html) {
    background-color: theme(colors.black);
    box-sizing: border-box;
    padding: 0px;
  }

  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in-out;
}
    /* div :global(.big-icon) {
       font-size: 72px;
   } */
   span :global(svg) {
       font-size: 52px;
       /* line-height: 2em; */
   }
asd
   .jcenter {
    display: flex;
    justify-content: center; 
   }
</style>