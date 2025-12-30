export default {
  global: {
    Name: 'Gestión digital con Microsoft 365',
    Description:
      'En este componente formativo se promueve la cultura digital y el uso básico de Microsoft 365 como herramienta clave para mejorar la comunicación, la productividad y la gestión de la información. Asimismo, fomenta la apropiación de tecnologías en la nube que optimizan los procesos laborales, fortalecen la colaboración y facilitan la adaptación a entornos organizacionales digitales e innovadores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Cultura digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Importancia de la nube en la transformación organizacional',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Impacto en la productividad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Impacto en la gestión de la información',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Microsoft 365',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Propósito',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Beneficios en el almacenamiento digital',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Beneficios en la comunicación',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Beneficios en el trabajo en equipo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Outlook',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Funciones del correo electrónico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Calendario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Funciones del calendario',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Programación de reuniones y eventos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'OneDrive',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'OneDrive',
      referencia:
        'CM CONSULTING. (2025). ¿Cómo usar Microsoft OneDrive para almacenamiento y cómo compartir archivos?.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KWTDopHFOjw',
    },

    {
      tema: 'Microsoft 365',
      referencia:
        'TecnoMáticas. (2023). Todo sobre Microsoft 365: ¿Qué es y cómo se usa?.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sfYeYLnvABg',
    },

    {
      tema: 'Outlook',
      referencia:
        'Gauging Gadgets. (2025). How to Change Outlook View Back to Normal - 2025.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=kAOsGljcQXc',
    },

    {
      tema: 'Outlook',
      referencia:
        'liberbiz. (2023). Descubre cómo organizar tu correo en Outlook.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=thCWn6Sh3V4',
    },

    {
      tema: 'Outlook',
      referencia:
        'Solvetic.com. (2024). Cambiar vista  outlook.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vFkfaLFlXC4',
    },

    {
      tema: 'Outlook',
      referencia:
        'Carlos Castro - Herramientas de Productividad. (2025). Cómo usar el calendario de Outlook.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=CUPJpFlpZwE',
    },
  ],
  glosario: [
    {
      termino: 'Acceso remoto',
      significado:
        'Capacidad de ingresar y utilizar sistemas, archivos o aplicaciones desde cualquier lugar con conexión a Internet, lo que facilita la continuidad de las operaciones y el teletrabajo en entornos empresariales.',
    },
    {
      termino: 'Almacenamiento digital',
      significado:
        'Proceso de guardar información en medios electrónicos o en la nube, permitiendo conservar, organizar y acceder fácilmente a los datos sin depender de dispositivos físicos.',
    },
    {
      termino: 'Colaboración en tiempo real',
      significado:
        'Interacción simultánea entre varios usuarios en un mismo documento o proyecto, favoreciendo la comunicación, la eficiencia y la toma de decisiones colectivas.',
    },
    {
      termino: 'Computación en la nube (<i>cloud computing</i>)',
      significado:
        'Modelo tecnológico que permite acceder bajo demanda a recursos como servidores, almacenamiento o <i>software</i> a través de Internet, sin necesidad de infraestructura local.',
    },
    {
      termino: 'Cultura digital',
      significado:
        'Conjunto de conocimientos, actitudes y prácticas que surgen del uso de tecnologías digitales, transformando la forma en que las personas se comunican, aprenden y trabajan.',
    },
    {
      termino: 'Gestión de la información',
      significado:
        'Conjunto de procesos destinados a recopilar, organizar, almacenar y distribuir datos de forma eficiente para apoyar la toma de decisiones y la productividad organizacional.',
    },
    {
      termino: 'Microsoft 365',
      significado:
        'Plataforma en línea de Microsoft que integra herramientas como Word, Excel, PowerPoint, Outlook y OneDrive, orientadas a la productividad, colaboración y gestión empresarial.',
    },
    {
      termino: 'Nube (<i>cloud</i>)',
      significado:
        'Infraestructura virtual que permite almacenar, procesar y acceder a información o servicios a través de Internet, eliminando la dependencia de equipos locales.',
    },
    {
      termino: 'OneDrive',
      significado:
        'Servicio de almacenamiento en la nube de Microsoft que permite guardar, sincronizar y compartir archivos de forma segura, integrado con las aplicaciones de Microsoft 365.',
    },
    {
      termino: 'Outlook',
      significado:
        'Aplicación de Microsoft para la gestión del correo electrónico, calendario y contactos, que facilita la comunicación y organización personal o corporativa.',
    },
    {
      termino: 'Productividad organizacional',
      significado:
        'Capacidad de una empresa para optimizar sus recursos humanos y tecnológicos con el fin de alcanzar metas de manera eficiente y con resultados sostenibles.',
    },
    {
      termino: 'Transformación digital',
      significado:
        'Proceso mediante el cual las organizaciones integran tecnologías digitales en sus operaciones, modificando su estructura, cultura y modelos de negocio para innovar y mejorar su desempeño.',
    },
    {
      termino: 'Trabajo colaborativo',
      significado:
        'Modalidad de organización en la que varias personas contribuyen con sus habilidades y conocimientos para alcanzar objetivos comunes, aprovechando herramientas tecnológicas compartidas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cira Apps Limited. (2025). ¿Qué es Microsoft Outlook: Características, precios, Gmail, tips y más? CIRASYNC.',
      link:
        'https://cirasync.com/es/articulos-blog/microsoft-outlook-caracteristicas',
    },
    {
      referencia:
        'GoDaddy. (2025). OneDrive: ¿Qué es y cómo funciona el almacenamiento en la nube de Microsoft? GoDaddy Resources - LATAM.',
      link:
        'https://www.godaddy.com/resources/latam/tecnologia/guardar-archivos-en-la-nube-con-microsoft-office',
    },
    {
      referencia: 'Google Cloud. (2021). ¿Qué es la computación en la nube?',
      link: 'https://cloud.google.com/learn/what-is-cloud-computing?hl=es-4190',
    },
    {
      referencia: 'HUB Consultores. (2022). Cultura digital.',
      link: 'https://hubconsultores.com/blog/cultura-digital',
    },
    {
      referencia: 'Microsoft. (2025). ¿Qué es la nube?',
      link:
        'https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-the-cloud',
    },
    {
      referencia:
        'SYCOD. (2025). Impacto de la nube en la productividad empresarial.',
      link: 'https://www.sycod.com/blog/productividad-empresarial',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Armando Javier López Sierra',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '-- ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
