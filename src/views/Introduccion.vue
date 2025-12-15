<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción    

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-11
          p.mb-0 Este espacio de aprendizaje busca fortalecer la cultura digital de los aprendices mediante la apropiación de herramientas basadas en la nube, esenciales para el funcionamiento de organizaciones modernas, ágiles e interconectadas. A través del uso de aplicaciones como Outlook y OneDrive, se promueve el desarrollo de habilidades para gestionar datos, favorecer la comunicación, dinamizar la productividad y potenciar el trabajo colaborativo en entornos empresariales digitales.
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.svg', alt='')

 
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/2.png', alt='')
      .col-sm-12.col-lg-8
          p.mb-0 El contenido se estructura de manera progresiva, iniciando con los fundamentos de la cultura digital y su importancia en la transformación organizacional, para posteriormente abordar las funcionalidades, beneficios y aplicaciones prácticas de Microsoft 365, con énfasis en la gestión del correo electrónico, la organización del tiempo, el almacenamiento en la nube y la administración eficiente de archivos. De este modo, los aprendices podrán aplicar conocimientos y competencias que respondan a las demandas tecnológicas actuales, contribuyendo al mejoramiento continuo de los procesos laborales y al fortalecimiento de la innovación organizacional.


    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
