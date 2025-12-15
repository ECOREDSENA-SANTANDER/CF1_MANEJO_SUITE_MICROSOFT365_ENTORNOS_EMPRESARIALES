<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Colaboración digital con Microsoft 365',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos sobre cultura digital, computación en la nube y el uso de las principales herramientas de Microsoft 365 para la comunicación, el almacenamiento y la gestión eficiente de la información organizacional.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La cultura digital se limita únicamente al uso de redes sociales y plataformas de entretenimiento.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'La cultura digital implica la integración de herramientas tecnológicas en la vida cotidiana y laboral para optimizar tareas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'La computación en la nube requiere disponer de servidores físicos locales para su funcionamiento.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'Microsoft 365 es un conjunto de aplicaciones de escritorio sin conexión que no dependen de la nube. ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'Entre los beneficios de Microsoft 365 se encuentran el almacenamiento en la nube, la comunicación unificada y el trabajo colaborativo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'Outlook permite gestionar únicamente correos electrónicos, sin incluir calendarios ni tareas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'Outlook forma parte del ecosistema Microsoft 365, lo que facilita la sincronización con otras herramientas como Teams y OneDrive.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'OneDrive permite almacenar, compartir y sincronizar archivos en la nube con acceso desde cualquier dispositivo.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'Los archivos almacenados en OneDrive no cuentan con medidas de seguridad ni cifrado de datos.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'La computación en la nube elimina la necesidad de infraestructura física, permitiendo que las empresas escalen recursos según su demanda y reduzcan costos operativos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Su respuesta refleja una comprensión sólida de los conceptos relacionados con la cultura digital, la nube y las herramientas de Microsoft 365, evidenciando su capacidad para aplicar estos conocimientos en la comunicación, la colaboración y la gestión eficiente de la información en entornos empresariales modernos. ',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        'Ha comprendido con claridad los conceptos de cultura digital, uso de la nube y herramientas de Microsoft 365 para la comunicación y gestión de la información. ¡Felicitaciones por su compromiso con el aprendizaje!',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
