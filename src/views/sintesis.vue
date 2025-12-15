<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p En la siguiente estructura se integra el uso de Microsoft 365 como herramienta clave para fortalecer la gestión digital en las organizaciones. A partir de sus ideas centrales (cultura digital, Microsoft 365, Outlook y OneDrive), se evidencian los aportes de esta suite en aspectos como la productividad, la comunicación, el trabajo colaborativo y el manejo seguro de la información. Esta organización temática permite comprender cómo cada elemento contribuye a mejorar los procesos institucionales y a impulsar prácticas más eficientes en entornos digitales.
    .row.justify-content-center.mb-5
      .col-lg-9.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza los temas del componente Gestión digital con Microsoft 365, enfocados en la comunicación y gestión de la información organizacional. Incluye cuatro ejes principales: cultura digital, Microsoft 365, Outlook y OneDrive, desarrollados a partir de conceptos como productividad, colaboración, almacenamiento en la nube, comunicación y gestión eficiente de archivos.")
    
    .row.justify-content-center  
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
