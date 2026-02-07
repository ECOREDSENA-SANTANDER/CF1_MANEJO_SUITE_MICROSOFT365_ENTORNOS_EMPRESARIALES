<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 OneDrive

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/1.svg', alt='') 
      .col-sm-12.col-lg-10
        .bg-color-6.p-4
          p.mb-0 OneDrive es el servicio de almacenamiento en la nube de Microsoft que forma parte del ecosistema de Microsoft 365, y que permite a los usuarios guardar, sincronizar y compartir archivos de manera segura desde cualquier lugar y dispositivo con conexión a Internet. 
          p.mb-0 En el entorno empresarial, OneDrive se ha convertido en una herramienta esencial para la gestión eficiente de la información, ya que posibilita el trabajo colaborativo, el respaldo automático de documentos y el acceso remoto a los recursos digitales de la organización. Su integración con aplicaciones como Word, Excel, PowerPoint, Teams y SharePoint facilita la edición simultánea de archivos y la comunicación fluida entre los miembros del equipo.
    
    .row.justify-content-center.mb-0.align-items-center(data-aos='fade-right')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/2.png', alt='')
      .col-sm-12.col-lg-7
        p.mb-3  Además, ofrece altos niveles de seguridad y control, incluyendo autenticación multifactorial, cifrado de datos y administración de permisos de acceso, lo que garantiza la protección de la información sensible tanto en tránsito como en reposo.
        .bg-color-3.p-4.mb-0
          p.mb-0 En síntesis, OneDrive no solo representa una solución de almacenamiento digital, sino también una plataforma estratégica para la productividad, la movilidad y la transformación digital dentro de las organizaciones modernas.
    

    Separador  
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Características principales

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/3.svg', alt='')
      .col-sm-12.col-lg-11
          p.mb-0 Conocer las principales funciones y beneficios de OneDrive les permitirá valorar cómo esta herramienta puede optimizar la organización, el trabajo colaborativo y la seguridad de sus archivos digitales. En la siguiente tabla se presentan sus características más relevantes, acompañadas de ejemplos prácticos que ilustran su aplicación en distintos escenarios académicos y profesionales (GoDaddy, 2025).


    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0  #[b Tabla 5.] Principales características de OneDrive con ejemplos
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
      table(alt='La tabla explica las principales características de OneDrive y su aplicación en contextos educativos y laborales. Resalta funciones como la sincronización automática, el trabajo colaborativo, el acceso sin conexión y la integración con otras aplicaciones y el sistema operativo, evidenciando cómo esta herramienta facilita la gestión eficiente, segura y flexible de archivos en la nube.')
        caption #[b Nota.] Adaptado de GoDaddy (2025).
        thead
          tr
            th.w-cus-3.text-center #[b Característica]
            th.text-center #[b Descripción]
            th.text-center #[b Ejemplo práctico]
        tbody
          tr
            td.fw-bold.text-cus-2  Sincronización automática
            td.text-cus-2 Permite mantener los archivos actualizados en todos los dispositivos vinculados, reflejando cualquier cambio realizado de manera inmediata, tanto en la nube como en el equipo local.
            td.text-cus-2 Un docente modifica una guía de clase en su computador y el archivo se actualiza automáticamente en su tableta y en su cuenta de OneDrive.
          tr
            td.fw-bold.text-cus-2 Carpetas compartidas
            td.text-cus-2 Ofrece la posibilidad de compartir carpetas con permisos configurables (lectura o edición), establecer fechas de caducidad y controlar quién puede acceder al contenido.
            td.text-cus-2 Un grupo de estudiantes comparte una carpeta con su tutor para entregar los avances del proyecto de investigación, permitiéndole solo visualizar los documentos.
          tr
            td.fw-bold.text-cus-2 Edición en línea con Office
            td.text-cus-2 Gracias a su integración con Word, Excel y PowerPoint, permite trabajar sobre los archivos directamente desde el navegador sin descargarlos ni instalar Office.
            td.text-cus-2 Un equipo académico edita de forma simultánea una presentación en PowerPoint desde diferentes ubicaciones.
          tr
            td.fw-bold.text-cus-2 Acceso sin conexión #[i (offline)]
            td.text-cus-2 Permite seleccionar archivos o carpetas para mantenerlos disponibles aun cuando no haya conexión a internet, actualizándose automáticamente al reconectarse.
            td.text-cus-2 Una docente descarga su plan de clase antes de viajar y puede modificarlo sin conexión; al volver a tener internet, los cambios se sincronizan.
          tr
            td.fw-bold.text-cus-2 Historial de versiones
            td.text-cus-2 Guarda versiones anteriores de los documentos por un periodo aproximado de 30 días, lo que facilita recuperar información eliminada o reemplazada por error.
            td.text-cus-2 Un investigador recupera una versión anterior de un artículo científico después de haber sobrescrito accidentalmente el archivo original.
          tr
            td.fw-bold.text-cus-2 Integración con el sistema operativo
            td.text-cus-2 Se incorpora de forma nativa en el explorador de archivos de Windows y Mac, permitiendo administrar los documentos como si fueran carpetas locales.
            td.text-cus-2 Un empleado arrastra una carpeta a la sección de OneDrive en su computador y los archivos se suben automáticamente a la nube.
          tr
            td.fw-bold.text-cus-2 Archivos bajo demanda
            td.text-cus-2 Permite visualizar todos los documentos almacenados en la nube sin ocupar espacio físico en el dispositivo, descargándolos únicamente cuando se requiera acceder a ellos.
            td.text-cus-2 Una empresa mantiene todos sus informes disponibles en OneDrive, descargando únicamente los que necesita consultar o actualizar.

    p.mb-0(data-aos='fade-right') Por su versatilidad, facilidad de uso e integración con las aplicaciones de Microsoft, OneDrive se consolida como una herramienta esencial para el trabajo digital colaborativo. Su combinación de seguridad, accesibilidad y eficiencia lo convierte en un recurso imprescindible para la gestión moderna de la información.
    Separador  
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Beneficios del almacenamiento personal en la nube

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-5.mb-cus
        .bg-color-5.p-4
          p.mb-0 El almacenamiento en la nube permite guardar información en servidores remotos accesibles por internet, eliminando la necesidad de hardware físico y facilitando el acceso desde cualquier dispositivo conectado. En este sentido, OneDrive ofrece una solución integral para almacenar, sincronizar, editar y compartir archivos; además su integración con Windows y Microsoft 365, junto con funciones colaborativas en tiempo real y altos estándares de seguridad, lo posicionan como una de las herramientas más utilizadas por empresas y usuarios individuales (GoDaddy, 2025).
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/4.svg', alt='')

      .col-sm-12.col-lg-4
          img.mb-3.w-cus-2.d-none.d-lg-block(src='@/assets/curso/temas/t4/5.svg', alt='')
          p.mb-0 El almacenamiento personal en la nube ofrece múltiples beneficios que optimizan la gestión, seguridad y disponibilidad de la información. Permite guardar archivos sin depender de dispositivos físicos, acceder desde cualquier lugar con conexión a internet y compartir contenido fácilmente con otros usuarios. Además, garantiza copias de seguridad automáticas, sincronización en tiempo real y recuperación de datos ante fallos o pérdidas.

    p.mb-4(data-aos='fade-right') Entre sus principales ventajas se destacan:
    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/8.png', alt='')
      .col-sm-12.col-lg-9
         SlyderF.circl-arrow.mb-4(columnas="col-md-6 col-lg-6 col-xl-4")
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/9.svg' alt='')
            h5.text-center.mb-3 Accesibilidad total
            p.mb-0.text-center Los usuarios pueden acceder a sus archivos desde cualquier dispositivo, en cualquier momento.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/10.svg' alt='')
            h5.text-center.mb-3 Ahorro de espacio físico
            p.mb-0.text-center Elimina la necesidad de discos duros externos o memorias USB.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/11.svg' alt='')
            h5.text-center.mb-3 Sincronización automática
            p.mb-0.text-center Cualquier cambio realizado en un archivo se actualiza en todos los dispositivos vinculados.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/12.svg' alt='')
            h5.text-center.mb-3 Seguridad avanzada
            p.mb-0.text-center Los datos están protegidos mediante cifrado y autenticación.


          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/13.svg' alt='')
            h5.text-center.mb-3 Respaldo continuo
            p.mb-0.text-center Mantiene versiones anteriores y copias de seguridad automáticas.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-7
                img(src='@/assets/curso/temas/t4/14.svg' alt='')
            h5.text-center.mb-3 Colaboración sencilla
            p.mb-0.text-center Permite compartir y editar documentos con otras personas de forma simultánea.









    Separador  
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Gestión de archivos
    
    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/6.svg', alt='')
      .col-sm-12.col-lg-11
          p.mb-0 La gestión de archivos en la nube es el proceso de guardar, organizar y acceder a tus documentos usando servicios como OneDrive. Esto te permite tener tus archivos siempre disponibles desde cualquier dispositivo con Internet.



    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-7
        .bg-color-3.p-4
          p.mb-4 Con esta gestión puedes:
          ul.lista-ul--color.mb-4
            li.d-flex
              i.fas.fa-shield
              p.mb-0 Guardar y clasificar tus trabajos o evidencias en carpetas.
            li.d-flex
              i.fas.fa-shield
              p.mb-0  Buscar archivos fácilmente sin tener que revisar uno por uno.
            li.d-flex
              i.fas.fa-shield
              p.mb-0  Compartir documentos con otras personas sin usar memorias USB.
            li.d-flex
              i.fas.fa-shield
              p.mb-0  Sincronizar tus archivos: lo que cambies en un dispositivo se actualiza en todos.
            li.d-flex
              i.fas.fa-shield
              p.mb-0  Revisar versiones anteriores, por si necesitas recuperar un archivo antes de algún cambio.
            li.d-flex
              i.fas.fa-shield
              p.mb-0  Controlar quién puede ver o editar tus documentos mediante permisos.
          p.mb-0 En conjunto, esto hace que trabajar sea más rápido, seguro y colaborativo, tanto de forma individual como en equipo.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t4/7.png', alt='')


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
