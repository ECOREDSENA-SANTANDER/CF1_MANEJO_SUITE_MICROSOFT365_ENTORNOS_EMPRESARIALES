<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Trabajo colaborativo en entornos digitales 
      
   
    Separador  
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Importancia de la nube en la transformación organizacional

   

    Separador  
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Impacto en la productividad
    Separador  
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Impacto en la gestión de la información
   
  </template>

<script>
export default {
  name: 'Tema1',
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
