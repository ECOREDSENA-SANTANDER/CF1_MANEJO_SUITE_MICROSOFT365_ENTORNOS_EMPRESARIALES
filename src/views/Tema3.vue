<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Outlook 

    .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/1.svg', alt='')
      .col-sm-12.col-lg-10
          p.mb-0 Outlook, anteriormente conocido como Hotmail, es una aplicación desarrollada por Microsoft que permite gestionar de forma integrada el correo electrónico, los calendarios, los contactos, las tareas y las listas de pendientes desde una misma plataforma. Forma parte del paquete Microsoft 365 y se ha consolidado como uno de los clientes de correo electrónico más utilizados y con mayor trayectoria a nivel mundial, destacándose por su funcionalidad, seguridad y compatibilidad con diferentes dispositivos (CIRASYNC, 2025). Se ha convertido en una de las herramientas más representativas del ecosistema Microsoft 365, diseñada para optimizar la comunicación y la gestión del tiempo en entornos empresariales y académicos.


    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/2.png', alt='')  
      .col-sm-12.col-lg-7
        p.mb-4 Más allá del envío y recepción de correos, Outlook favorece la planificación eficiente, ya que integra funciones como la programación de reuniones, recordatorios automáticos y sincronización con Teams y OneDrive. Esto facilita la coordinación de equipos, la administración del tiempo y la productividad personal. Además, ofrece características avanzadas de seguridad, como filtros #[i antiphishing], detección de correos maliciosos, cifrado de mensajes y autenticación multifactorial, garantizando la protección de la información corporativa y la privacidad del usuario.
        .bg-color-3.p-4
          p.mb-0 En consecuencia, Outlook se consolida como una herramienta clave en la comunicación profesional, contribuyendo al flujo de información eficiente, seguro y colaborativo dentro de las organizaciones.

    Separador  
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Funciones del correo electrónico

    p.mb-3(data-aos='fade-right') El correo electrónico en Outlook cumple un papel importante en la comunicación empresarial al permitir el intercambio rápido, organizado y seguro de información. Sus principales funciones van más allá del simple envío y recepción de mensajes, integrando herramientas que optimizan la gestión del trabajo diario.
    p.mb-5(data-aos='fade-right') Entre sus funciones más relevantes se destacan:

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/3.png', alt='')
      .col-sm-12.col-lg-8
         SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/4.svg' alt='')
            p.mb-0.text-center #[b Envío y recepción de mensajes:] permite mantener una comunicación inmediata y formal entre colaboradores, clientes o proveedores.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/5.svg' alt='')
            p.mb-0.text-center #[b Organización por carpetas y categorías:] facilita clasificar los correos por proyectos, departamentos o prioridad, manteniendo una bandeja ordenada.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/6.svg' alt='')
            p.mb-0.text-center #[b Búsqueda avanzada:] ayuda a localizar mensajes antiguos mediante filtros por remitente, fecha, asunto o palabras clave.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/7.svg' alt='')
            p.mb-0.text-center #[b Gestión de contactos:] almacena información de personas y empresas, lo que agiliza la creación de grupos de trabajo y listas de distribución.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/8.svg' alt='')
            p.mb-0.text-center #[b Integración con calendario y tareas:] permite programar reuniones directamente desde el correo y convertir mensajes en tareas pendientes.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/9.svg' alt='')
            p.mb-0.text-center #[b Filtros y reglas automatizadas:] ayudan a clasificar o responder mensajes automáticamente, ahorrando tiempo y evitando la saturación del buzón.

          .tarjeta.bg-color-4.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/10.svg' alt='')
            p.mb-0.text-center #[b Seguridad y confidencialidad:] ofrece protección frente a correos no deseados (#[i spam]) y posibles amenazas cibernéticas.


    p.mb-5(data-aos='fade-right') En conjunto, estas funciones hacen del correo electrónico de Outlook una herramienta estratégica para la comunicación y la productividad empresarial, fortaleciendo la colaboración y la eficiencia organizacional.
    .tarjeta.color-acento-contenido.p-3(data-aos='fade-right')
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/t3/11.svg")
        .col
          p.mb-3 En los siguientes videotutoriales se expone cómo crear una cuenta y aprovechar los recursos de este sistema de correo:
          .row.justify-content-between.align-items-center.mb-2
            .col.mb-3.mb-sm-0
              p.mb-0.fw-bold Creación de cuenta Outlook 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Creacion_de_cuenta_Outlook.mp4')" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.mb-0.fw-bold Conociendo la cuenta Outlook
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Conociendo_la_cuenta_Outlook.mp4')" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video

    Separador  
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Calendario

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-7
        p.mb-4 El calendario de Outlook es una herramienta integral que permite a los usuarios planificar, coordinar y gestionar su tiempo de manera estratégica, tanto en el ámbito personal como empresarial. Su principal función es centralizar la programación de actividades, facilitando la creación de citas, recordatorios, reuniones y eventos con solo unos clics.
        .bg-color-5.px-5.py-4
          p.mb-0 En el entorno empresarial, Outlook ofrece la posibilidad de visualizar la disponibilidad de los miembros del equipo, enviar invitaciones automáticas con confirmación de asistencia y agregar vínculos a reuniones virtuales mediante Microsoft Teams, lo que mejora la organización y reduce la pérdida de tiempo por reuniones duplicadas o mal coordinadas.
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/12.png', alt='')


    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/13.svg', alt='')
      .col-sm-12.col-lg-10
          p.mb-0 Además, su integración con otras aplicaciones de Microsoft 365, como OneDrive y SharePoint, permite adjuntar documentos directamente a las reuniones, compartir información relevante y mantener un registro de actividades sin necesidad de cambiar de plataforma. Los recordatorios inteligentes, la sincronización en tiempo real y la compatibilidad con dispositivos móviles garantizan que los usuarios puedan mantener el control de su agenda desde cualquier lugar y en cualquier momento, fortaleciendo así la eficiencia operativa y la productividad organizacional


    Separador  
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Funciones del calendario 

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-5.mb-5.br-2(data-aos="fade-right")
      .bloque-texto-g__img.br-2.d-none.d-lg-block(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t3/14.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 El calendario de Outlook ofrece una amplia variedad de funciones que facilitan la planificación, gestión del tiempo y coordinación de actividades, tanto individuales como grupales. Estas funciones permiten mantener una organización eficiente de las tareas y una comunicación fluida entre los equipos de trabajo.

    p.mb-5(data-aos='fade-right') Entre sus principales funciones se destacan:
    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-8
        LineaTiempoD.color-acento-botones
          .row.justify-content-center.mb-0(numero="1" titulo="Creación y gestión de eventos o reuniones")
            .col-sm-12.col-lg-12
              p.mb-0 Permite programar citas personales o reuniones laborales, establecer fechas, horarios, lugares y agregar notas o archivos adjuntos.

          .row.justify-content-center.mb-0(numero="2" titulo="Invitación y seguimiento de asistentes")
            .col-sm-12.col-lg-12
              p.mb-0 Outlook envía automáticamente invitaciones y registra las confirmaciones o cancelaciones de los participantes.

          .row.justify-content-center.mb-0(numero="3" titulo="Programación inteligente")
            .col-sm-12.col-lg-12
              p.mb-0 Muestra la disponibilidad de los usuarios dentro de la organización, evitando conflictos de horario y facilitando la coordinación de reuniones.

          .row.justify-content-center.mb-0(numero="4" titulo="Recordatorios y alertas automáticas")
            .col-sm-12.col-lg-12
              p.mb-0 Envía notificaciones antes del inicio de un evento o reunión, ayudando a cumplir compromisos puntualmente.

          .row.justify-content-center.mb-0(numero="5" titulo="Sincronización multiplataforma")
            .col-sm-12.col-lg-12
              p.mb-0 Los cambios realizados se actualizan automáticamente en todos los dispositivos vinculados, garantizando acceso constante a la agenda.

          .row.justify-content-center.mb-0(numero="6" titulo="Visualización personalizada")
            .col-sm-12.col-lg-12
              p.mb-0 Ofrece vistas diarias, semanales o mensuales para organizar las actividades según las necesidades del usuario.

          .row.justify-content-center.mb-0(numero="7" titulo="Integración con otras aplicaciones de Microsoft 365")
            .col-sm-12.col-lg-12
              p.mb-0 Se puede vincular con Teams para agregar enlaces de reuniones virtuales, con OneNote para tomar notas y con OneDrive o SharePoint para adjuntar documentos compartidos.

      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/15.png', alt='')
      

    .row.justify-content-center.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-8.bg-color-4.p-4
        .row.justify-content-center.mb-0.align-items-center
          .col-sm-12.col-lg-2.d-none.d-lg-block
            img.w-75(src='@/assets/curso/temas/t3/16.svg', alt='')
          .col-sm-12.col-lg-10
              p.mb-0 Estas funciones convierten al calendario de Outlook en una herramienta estratégica para optimizar la gestión del tiempo, mejorar la productividad y fortalecer la coordinación dentro de las organizaciones.
          




    Separador  
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Programación de reuniones y eventos
    
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t3/17.png', alt='')
      .col-sm-12.col-lg-7
        .bg-color-5.p-4.mb-4
          p.mb-0 La programación de reuniones y eventos en Outlook es una de las funciones más útiles para la gestión del tiempo y la coordinación de actividades empresariales o académicas. Esta herramienta permite planificar encuentros presenciales o virtuales de forma sencilla, asegurando que todos los participantes reciban la información necesaria y puedan confirmar su asistencia.
        p.mb-0 A través del calendario, el usuario puede crear una reunión, definir el día, hora, duración y lugar, e invitar a los asistentes directamente desde su lista de contactos. Además, Outlook permite adjuntar archivos, incluir una descripción o agenda y agregar un enlace para reuniones virtuales mediante la integración con Microsoft Teams.
    p.mb-5 La herramienta también ofrece funciones adicionales como:
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.bg-color-5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/18.svg')          
        p.mb-0.text-center #[b Comprobación de disponibilidad], que muestra los horarios libres de los participantes antes de enviar la invitación.
    
      .col-md.tarjeta.bg-color-3.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/19.svg')          
          p.mb-0.text-center #[b Recordatorios automáticos], que notifican a los asistentes con antelación sobre el evento programado.
    
    
      .col-md.tarjeta.bg-color-5.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/20.svg')          
          p.mb-0.text-center #[b Actualización dinámica], permitiendo modificar la hora o los detalles del evento sin necesidad de reenviar manualmente toda la información.
    
    
      .col-md.tarjeta.bg-color-3.p-5
          .row.justify-content-center.mb-4
            .col-6
              figure
                img(src='@/assets/curso/temas/t3/21.svg')          
          p.mb-0.text-center #[b Reprogramación automática], si se detectan conflictos de horario con otros compromisos.
    
    
    
    
    p.mb-5 En el entorno organizacional, esta función optimiza la planificación colaborativa, reduce errores en la coordinación de reuniones y mejora la eficiencia en la comunicación interna, al garantizar que todos los miembros del equipo estén informados y sincronizados en tiempo real.
    .tarjeta.color-acento-contenido.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/t3/11.svg")
        .col
          .row.justify-content-between.align-items-center.mb-2
            .col.mb-3.mb-sm-0
              p.mb-3.fw-bold Conociendo calendario Outlook
              p.mb-0 El siguiente videotutorial explica el uso del calendario de Outlook para crear y gestionar eventos y reuniones.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Conociendo_calendario_Outlook.mp4')" target="_blank")
                span Ir al sitio
                i.fas.fa-file-video
</template>

<script>
export default {
  name: 'Tema3',
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
