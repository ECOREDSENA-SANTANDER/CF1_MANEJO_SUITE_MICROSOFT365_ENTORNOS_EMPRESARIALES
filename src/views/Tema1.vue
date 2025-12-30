<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Cultura digital
      
    .bloque-texto-g.bloque-texto-g--inverso.bg-color-1.p-3.p-sm-4.p-md-5.mb-5.br-2(data-aos="fade-right")
      .bloque-texto-g__img.br-2.d-none.d-lg-block(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se ha convertido en un componente esencial de la vida cotidiana y del funcionamiento de las organizaciones. No solo implica el uso de herramientas tecnológicas, sino una transformación profunda en la forma de pensar, trabajar, comunicarse y aprender. A continuación, se presenta una síntesis estructurada de los elementos clave que definen este concepto y su impacto en los entornos personales y empresariales.

    SlyderF(columnas="col-lg-4 col-md-6" data-aos="fade-right").mb-5
      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/2.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 ¿Qué es la cultura digital?
        p.mb-0.text-center Es el conjunto de #[b saberes, habilidades, actitudes y valores] que permiten a las personas comunicarse, interactuar y producir en entornos mediados por las TIC.


      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/3.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 Una nueva forma de vivir y trabajar
        p.mb-0.text-center Implica cambiar la manera de #[b relacionarse, pensar y resolver problemas], porque lo digital transforma los procesos sociales, educativos, empresariales y formativos.

      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/4.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 También llamada “cibercultura”
        p.mb-0.text-center Este término se utiliza como equivalente de cultura digital y se centra en #[b mejorar y transformar modelos, procesos, estructuras y sistemas] existentes mediante tecnología.

      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/5.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 Un cambio de mentalidad impulsado por las organizaciones
        p.mb-0.text-center La transformación digital no es solo técnica; requiere una #[b nueva visión organizacional] que promueva adaptación, innovación y gestión eficiente del cambio (HUB Consultores, 2022).

      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/6.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 Cómo se refleja en las personas
        p.mb-3.text-center La cultura digital se evidencia en la forma en que las personas:
        ul.lista-ul--color.mb-0
          li.d-flex
            i.fas.fa-circle.icon-list
            p.mb-0  Utilizan herramientas tecnológicas en su trabajo. 
          li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Integran lo digital a su vida cotidiana. 
          li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Toman decisiones apoyadas en información digital.

      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/7.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 En el entorno empresarial
        p.mb-3.text-center Se refiere a la integración de las tecnologías en procesos como:
        ul.lista-ul--color.mb-0
            li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Gestión y operación estratégica. 
            li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Comunicación interna y externa. 
            li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Trabajo colaborativo. 
            li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Toma de decisiones basada en datos. 
            li.d-flex
                i.fas.fa-circle.icon-list
                p.mb-0 Diseño de procesos innovadores.

      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/8.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 Inclusión y fortalecimiento de competencias digitales
        p.mb-0.text-center La cultura digital permite que las personas desarrollen habilidades para desempeñarse adecuadamente en la sociedad del conocimiento, impulsando la participación y la actualización permanente.

      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/9.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 Beneficios para las empresas ya que favorece
        ul.lista-ul--color.mb-0
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Adopción de herramientas digitales. 
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Optimización de flujos de trabajo. 
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Agilidad en la comunicación. 
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Mayor capacidad de adaptación al entorno.

      .tarjeta.bg-fondo-1.p-4
        .row.justify-content-center.mb-3
          .col-4.col-lg-5.col-md-5
            img(src='@/assets/curso/temas/t1/10.svg' alt='')
        .bg-color-2.px-1.py-1.mb-3
          h4.text-center.mb-0 ¿Cómo se evidencia en la vida diaria?
        p.mb-3.text-center A través de actividades que antes eran físicas y ahora son digitales, como:
        ul.lista-ul--color.mb-0
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Firmar y enviar documentos.
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Coordinar reuniones virtuales.
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Almacenar y compartir archivos en la nube.
          li.d-flex
              i.fas.fa-circle.icon-list
              p.mb-0 Trabajar de forma colaborativa en línea.


    p.mb-5(data-aos="fade-right") A continuación, se presentan algunos ejemplos que permiten evidenciar cómo diversas actividades cotidianas y laborales han evolucionado desde su ejecución tradicional hasta su realización mediante recursos digitales. Esta comparación facilita comprender el impacto de la cultura digital en los procesos de comunicación, gestión documental, formación y vida diaria.
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0  #[b Tabla 1.]  Lista comparativa de actividades
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
      table(alt="La tabla compara las diferencias entre las prácticas tradicionales y las actuales mediadas por recursos digitales en diversos ámbitos de la vida personal, laboral y educativa. Resalta cómo las herramientas tecnológicas han transformado la comunicación, la gestión documental, la formación y las transacciones financieras, promoviendo la inmediatez, la colaboración y la eficiencia en los procesos cotidianos y organizacionales.")
        thead
          tr
            th.w-25 Aspecto
            th Sin recursos digitales (forma tradicional)
            th Con recursos digitales (actualmente)
        tbody
          tr
            td.text-cus-1 Comunicación personal y laboral
            td.text-cus-2 La comunicación se haría a través de cartas, llamadas telefónicas convencionales o reuniones presenciales, generando mayores costos, demoras y limitaciones de tiempo.
            td.text-cus-2 Las personas se comunican mediante plataformas como Microsoft Teams, Outlook o WhatsApp, enviando mensajes, archivos y realizando videollamadas en tiempo real desde cualquier lugar.

          tr
            td.text-cus-1 Gestión de documentos y archivos
            td.text-cus-2 Los documentos se guardarían en carpetas físicas o dispositivos portátiles como memorias USB, dificultando el acceso remoto, la actualización de versiones y la seguridad.
            td.text-cus-2 Los usuarios almacenan, comparten y editan documentos en la nube con herramientas como OneDrive o SharePoint, accediendo desde cualquier dispositivo y colaborando en simultáneo.

          tr
            td.text-cus-1 Educación y formación continua
            td.text-cus-2 La formación se desarrollaría únicamente de manera presencial, usando textos impresos y exámenes físicos, lo que reduciría la flexibilidad y las oportunidades de aprendizaje en línea.
            td.text-cus-2 Los estudiantes acceden a clases virtuales, materiales educativos y evaluaciones en plataformas como Microsoft Teams o Moodle, facilitando el aprendizaje remoto y flexible.

          tr
            td.text-cus-1 Vida cotidiana y transacciones financieras
            td.text-cus-2 Los pagos y transferencias se harían de forma presencial en bancos o establecimientos, implicando desplazamientos, uso de efectivo y mayor consumo de tiempo.
            td.text-cus-2 Las personas realizan pagos, transferencias y compras a través de plataformas digitales como Nequi, Daviplata o PSE, evidenciando la adopción de la banca digital y la confianza en los servicios en línea.

    Separador  
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Importancia de la nube en la transformación organizacional

    p.mb-5(data-aos="fade-right") En este apartado, lo primero es comprender qué es la nube y qué se entiende por computación en la nube, de manera que posteriormente se pueda reconocer su importancia en los procesos de transformación organizacional. Por ello, a continuación, se presentan estos dos conceptos:

    .tarjeta.bg-fondo-2.p-5.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-8
            h4 Nube (#[i Cloud])
            p.mb-3 Se conoce como el espacio de almacenamiento y servicios en línea que brinda a las personas y a las empresas servicios como el uso de aplicaciones, almacenamiento de archivos, acceso a recursos informáticos, desde cualquier lugar donde tenga conexión a internet (Microsoft, 2025). En otras palabras, la nube es un entorno para guardar datos y aplicaciones que pueden ser usados o consultados en línea.
            .bg-color-3.px-3.py-4.mb-0.br-1
              p.mb-0 #[b Ejemplo:] cuando una persona guarda fotos o documentos en OneDrive o Google Drive, está usando la nube para almacenamiento.

          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/11.png', alt='')

        .row.justify-content-center.mb-0
          .col-sm-12.col-lg-8
            h4 Computación en la nube (#[i Cloud Computing])
            p.mb-3 Son los servicios y recursos tecnológicos como almacenamiento, capacidad de procesamiento o servidores que se ofrecen por medio de internet, de manera flexible y bajo demanda; evitando que las personas o las empresas tengan que adquirir y mantener una infraestructura física, lo que les beneficia al utilizar solo los servicios que necesiten, pagando únicamente por el consumo de lo utilizado (Google Cloud, 2021). Estos servicios van más allá del solo almacenamiento, permitiendo además ejecutar programas, desarrollar aplicaciones, crear servidores virtuales, entre otros servicios, y todo esto sin utilizar una infraestructura física propia.
            .bg-color-3.px-3.py-4.mb-0.br-1
              p.mb-0 #[b Ejemplo:] cuando una empresa utiliza Microsoft Azure o Amazon Web Services (AWS) para ejecutar sus aplicaciones o procesar datos, está usando computación en la nube.

          .col-sm-12.col-lg-4.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/12.png', alt='')


    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/13.png', alt='')
      .col-sm-12.col-lg-7
        .row.justify-content-center.mb-3
          .col-sm-12.col-lg-1.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/14.svg', alt='')
          .col-sm-12.col-lg-11
              p.mb-0 La nube constituye un recurso fundamental para la transformación organizacional, ya que permite a las empresas operar con mayor flexibilidad, eficiencia y capacidad de colaboración. Su uso facilita el acceso a la información y a múltiples aplicaciones desde cualquier dispositivo y ubicación con conexión a internet, reduciendo la dependencia de infraestructura física y servidores locales. Gracias a su adopción, las organizaciones pueden almacenar grandes volúmenes de datos, compartir archivos en tiempo real, optimizar costos tecnológicos y mejorar la productividad mediante procesos más ágiles y conectados.
        p.mb-0 Del mismo modo, la implementación de servicios en la nube impulsa la transformación digital al favorecer la automatización de procesos y la utilización de herramientas colaborativas como Microsoft 365. En conjunto, estos elementos permiten modificar paradigmas culturales y tecnológicos, fortaleciendo la competitividad, fomentando la innovación y apoyando la adaptación rápida frente a los desafíos del entorno actual propio de la era del conocimiento. 

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-5.bg-color-4.br-1.justify-content-center.align-items-center.mb-cus
        .p-4
          p.mb-0 En esencia, la nube se convierte en la columna vertebral de la transformación digital, al posibilitar la optimización de procesos, la mejora de la comunicación y la gestión efectiva de la información. Al adoptarla, las organizaciones disminuyen la dependencia de infraestructuras tradicionales y acceden a recursos tecnológicos más flexibles y escalables.
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/15.svg', alt='')
      .col-sm-12.col-lg-4
        p.mb-0 Herramientas como Microsoft 365, OneDrive y SharePoint son ejemplos claros de cómo las empresas pueden aprovechar los servicios en la nube para promover la colaboración en tiempo real, el trabajo remoto y la continuidad operativa. Adicionalmente, la nube ofrece mayores niveles de seguridad, mejora la disponibilidad de la información y favorece la consolidación de modelos organizacionales ágiles, competitivos e innovadores.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-8
        p.mb-3 La nube brinda muchos beneficios en la productividad organizacional, al brindarle recursos a las personas y a las empresas para que accedan a información, aplicaciones y servicios desde cualquier lugar y en el momento en que se necesite flexibilizando los procesos y eliminando barreras físicas y temporales, facilitando que los equipos de trabajo puedan ser más dinámicos y apoyarse en forma ágil y colaborativa.
        .row.justify-content-center.mb-3
          .col-sm-12.col-lg-3.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/17.svg', alt='')
          .col-sm-12.col-lg-9
              p.mb-0 Al centralizar la información y aportar recursos integrados, la nube evita que se duplique el trabajo, así mismo optimiza procesos y reduce el tiempo que se invierte en tareas administrativas u otras actividades que rigen la operativa del negocio. Entre las más usuales en el grueso de las organizaciones está la  posibilidad de compartir y editar documentos en tiempo real, realizar reuniones virtuales o automatizar procesos, lo cual incrementa la eficiencia en el uso de los recursos.

        .bg-color-5.p-4.br-1
          p.mb-0 La nube no solo mejora la gestión del tiempo y la comunicación, adicional a ello, ayudan a impulsar la innovación, al permitir que los colaboradores puedan enfocarse en actividades estratégicas y de mayor valor agregado para la organización.
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/16.png', alt='')
    Separador  
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Impacto en la productividad
    p.mb-0(data-aos="fade-right") La nube impacta directa y positivamente en la productividad empresarial, aportando beneficios que se transforman en mejoras significativas en las organizaciones (SYCOD, 2025): 
    .bg-full-width.bg-fondo-3(data-aos="fade-right")
        .p-full-width 
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-10
              .titulo-sexto.color-acento-contenido
                  p.mb-0  #[b Tabla 2.] Impacto de la nube en las empresas
              .tabla-a.color-acento-contenido.mb-5
                table(alt="La tabla expone las principales ventajas del uso de la nube en el entorno empresarial, destacando su impacto en la flexibilidad laboral, la colaboración, la escalabilidad, la reducción de costos y la seguridad de la información. Estas características permiten a las organizaciones optimizar recursos, mejorar la productividad y garantizar la continuidad de sus operaciones.")
                  caption Nota. Adaptado de SYCOD (2025).
                  thead
                    tr
                      th.w-25 Ventaja
                      th Descripción
                      th Impacto en la empresa
                  tbody
                    tr
                      td.text-cus-1 Acceso remoto y movilidad
                      td.text-cus-2 Permite a los empleados trabajar desde cualquier lugar con conexión a Internet.
                      td.text-cus-2 Aumenta la flexibilidad, la eficiencia y la satisfacción laboral.

                    tr
                      td.text-cus-1 Colaboración en tiempo real
                      td.text-cus-2 Facilita el trabajo simultáneo y la edición compartida de documentos entre equipos.
                      td.text-cus-2 Mejora la comunicación, acelera procesos y promueve la innovación.

                    tr
                      td.text-cus-1 Escalabilidad y flexibilidad
                      td.text-cus-2 Los recursos se ajustan según las necesidades del negocio.
                      td.text-cus-2 Permite crecer sin grandes inversiones y adaptarse a cambios del mercado.

                    tr
                      td.text-cus-1 Costos reducidos
                      td.text-cus-2 Elimina la necesidad de infraestructura física y reduce gastos operativos.
                      td.text-cus-2 Optimiza los recursos financieros y mejora la rentabilidad.

                    tr
                      td.text-cus-1 Seguridad y respaldo de datos
                      td.text-cus-2 Incluye medidas de seguridad avanzadas y copias automáticas de información.
                      td.text-cus-2 Protege los datos empresariales y asegura la continuidad operativa.


    
    Separador  
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Impacto en la gestión de la información
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-1.d-none.d-lg-block
        img(src='@/assets/curso/temas/t1/18.svg', alt='')
      .col-sm-12.col-lg-11
          p.mb-0 Gracias al uso de la nube y a la adopción de la cultura digital, la gestión de la información organizacional ha experimentado una transformación significativa que fortalece la disponibilidad, la integridad y la trazabilidad de los datos. A continuación, se presentan algunos aspectos que consolidan esta gestión y permiten evidenciar cómo se materializa en los entornos empresariales:
  
    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
        p.mb-0  #[b Tabla 3.]  Aspectos de la nube que fortalecen la gestión de la información en las empresas
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
      table(alt="La tabla presenta los aspectos clave de la computación en la nube que fortalecen la gestión de la información en las empresas. Explica cómo el acceso inmediato, la colaboración en tiempo real, la organización estructurada, la trazabilidad, el respaldo, el análisis de datos y la gobernanza contribuyen a mejorar la eficiencia operativa, la seguridad documental y la toma de decisiones estratégicas.")
        thead
          tr
            th.w-25 Aspecto
            th Descripción
            th Ejemplo práctico empresarial
        tbody
          tr
            td.text-cus-1 Acceso y disponibilidad inmediata
            td.text-cus-2 Permite consultar documentos y datos desde cualquier dispositivo o ubicación, reduciendo tiempos de búsqueda y respuesta.
            td.text-cus-2 Un equipo comercial accede a cotizaciones y contratos almacenados en OneDrive mientras visita clientes fuera de la oficina, agilizando el proceso de ventas.

          tr
            td.text-cus-1 Control de versiones y colaboración
            td.text-cus-2 Posibilita la edición simultánea y el mantenimiento de versiones controladas, evitando duplicidades y conflictos en los documentos.
            td.text-cus-2 Varios empleados editan de forma conjunta una presentación en PowerPoint alojada en Microsoft 365, sin necesidad de enviar archivos por correo electrónico.

          tr
            td.text-cus-1 Organización y clasificación eficiente
            td.text-cus-2 Facilita el uso de metadatos y estructuras compartidas (carpetas, bibliotecas, etiquetas) para localizar y gestionar información.
            td.text-cus-2 El departamento de recursos humanos organiza hojas de vida y documentos en carpetas compartidas de SharePoint clasificadas por área o cargo.

          tr
            td.text-cus-1 Trazabilidad y auditoría
            td.text-cus-2 Registra cambios, accesos y acciones sobre los archivos, mejorando la rendición de cuentas y la gestión de incidentes.
            td.text-cus-2 El sistema registra qué usuario modificó un informe financiero y cuándo lo hizo, lo que permite identificar responsabilidades ante errores.

          tr
            td.text-cus-1 Respaldo y recuperación
            td.text-cus-2 Asegura copias automáticas y procedimientos de restauración que protegen la continuidad operativa ante pérdidas o fallos.
            td.text-cus-2 Tras un daño en un equipo, los documentos de la empresa se restauran fácilmente desde la copia de seguridad automática en la nube.

          tr
            td.text-cus-1 Soporte a la toma de decisiones
            td.text-cus-2 Centraliza y consolida información actualizada, favoreciendo análisis oportunos y decisiones basadas en datos.
            td.text-cus-2 Los gerentes consultan reportes actualizados en línea desde Power BI o Excel online para decidir sobre estrategias de producción o ventas.

          tr
            td.text-cus-1 Cumplimiento y gobernanza
            td.text-cus-2 Aplica políticas de retención, acceso y conservación que facilitan el cumplimiento normativo y la gestión documental.
            td.text-cus-2 El área jurídica configura políticas de acceso y tiempos de retención en SharePoint para garantizar la protección de contratos y documentos legales.
          
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
