<script lang="ts">
    import Card from '../components/CardName.svelte';
    import Header from '../components/Header.svelte';
    import Carrousel from '../components/Carrousel.svelte';
    import VideoCard from '../components/VideoCard.svelte';
    import Heading from '../components/font/Heading.svelte'
    import Icons from '../components/Icons.svelte';
    
    //Imagens
    import cantor from '../assets/cantor.svg';
    import silhueta from '../assets/silhueta.png';
    
    let a = 5
    let nomes: any = ['pedro']
    function addOne() {
        nomes.push('nome') 
        nomes = [...nomes];
    }

    //Import Images
    let images = [
      {src: '/src/assets/cantor.svg'},
      {src: '/src/assets/cantor.svg'},
      {src: '/src/assets/cantor.svg'},
      {src: '/src/assets/cantor.svg'},
      {src: '/src/assets/cantor.svg'},
    ]

    //Formatações
    const divFormat = 'flex flex-col w-2/5 p-10 m-auto my-10 bg-gradient-to-r from-pink-300 to-slate-400'
</script>

<Header/>
<body class="">
    <img src={cantor} class="w-full " alt="">
    <section class="h-auto flex-col py-12 px-10 text-sm gap-y-4 animate-duration-75 animate-fade-up">
        <div class="text-white mb-6 font-roboto">
            <Heading contentTitle='A HISTÓRIA'/>
            <p class="text-sm leading-loose">Cantor sertanejo de Indaial SC, deu início à sua carreira profissional em Junho de 2021, desde lá, sempre mantendo seus esforços para trazer o melhor show para o seu público, com seu repertório mesclado entre, sertanejo romântico, sertanejo balada e pisadinha o repertório contém também um momento “Boteco”, com muito modão, sofrência e música gaúcha, assim podendo atender a todos os gostos dentro de seu estilo.</p>
        </div>
        <div class="text-white animate-fade-up font-roboto">
            <h1 class="text-xl flex justify-end font-bold">POR ONDE PASSOU</h1>
            <p class="text-sm leading-loose">Com shows em alguns locais de referência como: Alive (Blumenau); Vidigal (Blumenau); Boteco seu Fulano (Rio do Sul); Kings Gold (Indaial) entre outros. Seu objetivo agora é conseguir abrir portas em outras cidades, assim podendo levar o seu show onde o contratante pode optar por alguns formatos.</p>
        </div>
    </section>

    <Carrousel {images}/>

    <hr class="border-1 border-white-400 my-3"/>

    <section class="w-full flex flex-col justify-center items-center gap-6 ">
      <h1 class='text-white mb-2 font-roboto font-bold'>Meus Shows</h1>
      <VideoCard src='https://www.youtube.com/embed/1GXB1KTzDps?si=5bZqE0YB4nyyL8x-'/>
      <VideoCard src='https://www.youtube.com/embed/1GXB1KTzDps?si=5bZqE0YB4nyyL8x-'/>
    </section>

    <section class="bg-white h-40 flex flex-col items-center justify-center">
        <h1 class="text-sm font-bold py-4">FIQUE POR DENTRO DE NOVOS CONTÉUDOS!</h1>
        <Icons/>
    </section>

    <section>
        <img src={silhueta} alt="">
    </section>
</body>

<style lang='postcss'>
    :global(html) {
    background-color: theme(colors.black);
    box-sizing: border-box;
    padding: 0px;
  }
/* h1{
    color: #b93737;
    
  }

.div-format {
    @apply  
    flex flex-col w-2/5 p-10 m-auto my-10 bg-gradient-to-r from-pink-300 to-slate-400
} */
</style>