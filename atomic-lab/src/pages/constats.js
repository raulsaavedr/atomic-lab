export const USER_DATA = {
  name: "JArgoty",
  credits: 1000,
  brands: [
    { id: "1", name: "Pepsi", value: "pepsi", predeterminate: true },
    { id: "2", name: "Coca Cola", value: "cocacola", predeterminate: false },
  ],
  team: [
    {
      id: 1,
      name: "Daniel",
      email: "d@gmail.com",
      rol: "dueño",
      projects: "Todos",
    },
    {
      id: 2,
      name: "Daniel1",
      email: "d1@gmail.com",
      rol: "dueño",
      projects: "Todos",
    },
    {
      id: 3,
      name: "Daniel2",
      email: "d2@gmail.com",
      rol: "dueño",
      projects: "Todos",
    },
  ],

  active_projects: [
    {
      id: 123,
      name: "Manual de marca #1",
      status: 1,
      date_next_review: "2021-01-30",
      private_notes: ["nota1", "nota2", "nota3"],
      view_last_review: "test_review", //imagen sin extension
      review: 2,
      status_test: [
        {
          title: "Tu proyecto ha sido confirmado e iniciado",
          date: "2022-01-18:10:18",
        },
        {
          title: "Tu proyecto ha sido asignado a un gerente de cuentas",
          date: "2022-01-18:10:18",
        },
        {
          title:
            "Tu proyecto ha sido asignado a un diseñador y está en proceso de diseño",
          date: "2022-01-18:10:18",
        },
        {
          title: "La versión 1 de tu proyecto está lista",
          date: "2022-01-18:10:18",
        },
        { title: "Tu proyecto fue finalizado", date: "2022-01-18:10:18" },
        {
          title: "Tu proyecto está listo para ser descargado",
          date: "2022-01-18:10:18",
        },
      ],
    },
    {
      id: 321,
      name: "Manual de marca #1",
      status: 2,
      date_next_review: "2021-01-30",
      private_notes: ["nota1", "nota2", "nota3"],
      view_last_review: "img.png", //imagen sin extension
      review: 3,
    },
  ],
  finish_projects: [
    {
      id: 123,
      name: "Manual de marca #1",
      status: 3,
      date_finish: "2021-10-10",
      private_notes: ["nota1", "nota2", "nota3"],
      view_last_review: "img.png", //imagen sin extension
    },
  ],
};

export const FORM_INPUTS_BRANDS = [
  {
    id: "name_comercial",
    type: "text",
    label: "Nombre comercial",
    required: false,
    className: "input-txt",
  },
  {
    id: "brand",
    type: "text",
    label: "Marca",
    required: false,
    className: "input-txt",
  },
  {
    id: "nit",
    type: "text",
    label: "NIT/Cédula",
    required: false,
    className: "input-txt",
  },
  {
    id: "type",
    type: "text",
    label: "Tipo de compañía/organización",
    required: false,
    className: "input-txt",
  },
  {
    id: "industry",
    type: "text",
    label: "Industria",
    required: false,
    className: "input-txt",
  },
  {
    id: "web_page",
    type: "text",
    label: "Página web (URL)",
    required: false,
    className: "input-txt",
  },
  {
    label: "Redes sociales",
    className: "sub",
    options: [
      {
        id: "linkedin",
        type: "text",
        label: "Linkedin",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "youtube",
        type: "text",
        label: "YouTube",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "twitter",
        type: "text",
        label: "Twitter",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "instagram",
        type: "text",
        label: "Instagram",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "facebook",
        type: "text",
        label: "Facebook",
        required: false,
        className: "input-txt",
        icon: true,
      },
      {
        id: "otros",
        type: "text",
        label: "Otros",
        required: false,
        className: "input-txt",
      },
    ],
  },
  {
    id: "employees",
    type: "number",
    label: "Número de empleados",
    required: false,
    className: "input-txt",
  },
  {
    id: "offers",
    label: "¿Qué ofrece?",
    className: "input-checkbox",
    options: [
      {
        id: "services",
        type: "checkbox",
        label: "Servicios",
        required: false,
        className: "checkbox-txt",
      },
      {
        id: "productos",
        type: "checkbox",
        label: "Productos",
        required: false,
        className: "checkbox-txt",
      },
      {
        id: "ambos",
        type: "checkbox",
        label: "Ambos",
        required: false,
        className: "checkbox-txt",
      },
    ],
  },
  {
    id: "product_services",
    type: "textarea",
    label: "Productos/Servicios",
    required: false,
    className: "input-texarea",
  },
  {
    id: "clients",
    type: "textarea",
    label: "Clientes",
    required: false,
    className: "input-texarea",
  },
  {
    id: "keywords_brands",
    type: "textarea",
    label: "Palabras clave relacionadas con la marca",
    required: false,
    className: "input-texarea",
  },
  {
    id: "mission",
    type: "textarea",
    label: "Misión",
    required: false,
    className: "input-texarea",
  },
  {
    id: "view",
    type: "textarea",
    label: "Visión",
    required: false,
    className: "input-texarea",
  },
  {
    id: "values",
    type: "textarea",
    label: "Valores",
    required: false,
    className: "input-texarea",
  },
  {
    id: "competitors",
    type: "textarea",
    label: "Competidores",
    required: false,
    className: "input-texarea",
  },
];

export const FORM_INPUTS_PROFILE = [
  {
    id: "name",
    type: "text",
    label: "Nombres(s)",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "last_name",
    type: "text",
    label: "Apellido",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "email",
    type: "text",
    label: "Email",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "email_corporate",
    type: "text",
    label: "Email corporativo",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cell_phone",
    type: "text",
    label: "Celular",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "cell_phone_corporate",
    type: "text",
    label: "Teléfono corporativo",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "id",
    type: "text",
    label: "Cédula",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "password",
    type: "password",
    label: "Nueva contraseña",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
  {
    id: "password_confirm",
    type: "password",
    label: "Confirmar contraseña",
    placeholder: "",
    required: false,
    className: "input-txt",
  },
];

export const FORM_INPUTS = {
  name: {
    type: "text",
    label: "¿Qué nombre le quieres dar al proyecto? *",
    placeholder:
      "Tip: Incluye el tipo de diseño en el nombre (logo, post, etc.)",
    required: true,
    className: "input-txt",
  },
  public: {
    type: "text",
    label: "¿Cual es tu público objetivo?",
    placeholder:
      "Ej. Edad (adultos, millenials, etc.), género, ocupación, industria/sector, etc.",
    required: false,
    className: "input-texarea",
  },
  palete_colors: {
    type: "text",
    label: "¿Tienes preferencia de colores o una paleta de colores?",
    placeholder: "Ej",
    required: false,
    className: "input-texarea",
  },
  reference: {
    type: "text",
    label: "De éste ejemplo/referencia, ¿Qué fue lo que te gustó y por qué?",
    placeholder:
      "Ej. Preferencias de estilos, muestras, referencias, ejemplos, bosquejos/borradores, URLs, etc.",
    required: false,
    className: "input-texarea",
    maxlength: 280,
  },
  idea: {
    type: "text",
    label: "¿Cuál es la idea que quieres desarrollar?",
    placeholder: "",
    required: false,
    className: "input-texarea",
    maxlength: 280,
  },
  image_include: {
    type: "text",
    label: "Imagen a incluir",
    placeholder: "Ej. Objetivo de la imagen, etc.",
    required: false,
    className: "input-texarea",
    maxlength: 280,
  },
  text_include: {
    type: "text",
    label: "Texto a incluir",
    placeholder: "Escribe el texto tal cual como lo quieres o adjúntalo. ",
    required: false,
    className: "input-texarea",
    maxlength: 280,
  },
};

export const FROM_BRAND_TABLES = [
  { title: "Manual de marca" },
  { title: "Logo (en formato editable)" },
  { title: "Paleta de colores" },
  { title: "Tipografía" },
  { title: "Brandboard (guía de estilo)" },
  { title: "Otros" },
];

export const STATUS_TABLES = (page) => {
  const listContent = [
    { title: "Estado", isActive: true },
    { title: "Fecha y Hora", isActive: true },
    { title: "Ver proyecto", isActive: true },
  ];
  return listContent.filter((item) => item.isActive === true);
};

export const FINISH_TABLES = (page) => {
  const listContent = [
    { title: "Nombre del proyecto", isActive: true },
    { title: "Estado", isActive: true },
    { title: "Fecha finalización", isActive: true },
    { title: "Mis notas privadas", isActive: page === "home" ? false : true },
    { title: "Visualizar diseño final", isActive: true },
    { title: "Comentarios finales", isActive: page === "home" ? false : true },
    { title: "Descargar", isActive: true },
    { title: "", isActive: true },
  ];
  return listContent.filter((item) => item.isActive === true);
};

export const ACTIVE_TABLES = (page) => {
  const listContent = [
    { title: "Nombre del proyecto", isActive: true },
    { title: "Estado", isActive: true },

    { title: "Fecha estimada próx. revisión", isActive: true },
    { title: "Mis notas privadas", isActive: page === "home" ? false : true },
    { title: "Más Información", isActive: page === "home" ? true : false },
    {
      title: "Visualizar última versión",
      isActive: page === "home" ? false : true,
    },
    { title: "Revisión", isActive: page === "home" ? false : true },
    { title: "Retroalimentación revisiones", isActive: true },
    { title: "", isActive: true },
  ];
  return listContent.filter((item) => item.isActive === true);
};

export const TYPE_PUBLICATION_DATA = {
  Post: {
    options: ["Post", "Carrusel"],
  },
  "Publicidad (Ad)": { options: ["Publicidad (Ad)", "Link", "Carrusel"] },
  Cover: { options: ["Cover", "Page", "Event", "Group", "Video", "Highlight"] },
  Story: { options: ["Post", "Video"] },
  Header: { options: ["Header"] },
};

export const SERVICES_DATA = [
  {
    status: "active",
    title: "Redes sociales",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: [
        {
          name: "Costo base del proyecto",
          price: 100,
        },
        {
          name: "Tiempo de entrega",
          price: 0,
        },
        {
          name: "Formato de entrega",
          price: 0,
        },
        {
          name: "Modificaciones",
          price: 0,
        },
        {
          name: "Tamaño",
          price: 0,
        },
        {
          name: "Archivos editables",
          price: 0,
        },
      ],
      complete: "$300",
    },
    description_page:
      "Revisa las especificaciones y elige que clase de publicación necesitas",
    specs: [
      {
        id: "1",
        title: "¿Para cuales redes sociales?",
        options: [
          "Facebook.",
          "Instagram.",
          "Linkedin.",
          "Próximamente más...",
        ],
      },
      {
        id: "2",
        title: "¿Qué te vamos a entregar?",
        options: [
          "Publicaciones únicas creadas desde cero, con el fin de tener mayor visibilidad y que puedas conectar con tu comunidad generando valor",
        ],
      },
      {
        id: "3",
        title: "¿Qué Incluye?",
        options: [
          "Diseño de post.",
          "Fotos de libre licencia/uso comercial.",
          "Imagen/ilustración de la publicación optimizada para redes.",
          "Diagramación.",
          "Diseño tipográfico",
        ],
      },
      {
        id: "4",
        title: "¿Qué NO incluye?",
        options: [
          "Fotografias",
          "Creacióm de textos",
          "Redaccióm de contenido",
          "Retoque fotográfico",
          "Realización de reels y videos",
        ],
      },
      {
        id: "5",
        title: "¿Qué nos tienes que entregar?",
        options: [
          "Contenido del texto (si aplica).",
          "Fotos/imágenes (si aplica).",
          "Estilos/ejemplos/referencias.",
        ],
      },

      {
        id: "6",
        title: "Extras",
        options: ["Si no tienes fotos nosotros las ponemos a un precio extra"],
      },
    ],
    publication_type: {
      title: "¿Qué tipo de publicación quieres?",
      options: ["Post", "Publicidad (Ad)", "Cover", "Story", "Header"],
    },
    social_network: {
      title: "¿Para cual red social quieres tu diseño?",
      options: [
        { name: "Facebook", status: "active" },
        { name: "Instagram", status: "active" },
        { name: "Linkedin", status: "active" },
        { name: "Youtube", status: "inactive" },
        { name: "Twitter", status: "inactive" },
        { name: "Pinterest", status: "inactive" },
        { name: "Twitch", status: "inactive" },
        { name: "Tumblr", status: "inactive" },
        { name: "Otra ¿Cuál?", status: "inactive" },
      ],
    },
  },
  {
    status: "coming-soon",
    title: "Impresion",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Papeleria",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Diseño web",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Infografias",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Presentaciones",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },

  {
    status: "coming-soon",
    title: "Manual de marca",
    description: "Contenido compartido en las redes sociales",
    description_page:
      "<p>Un manual de marca (o de identidad) es un documento que recoge los principales elementos gráficos de la marca y explica cómo deben aplicarse visualmente. Tanto online como offline</p><p>Revisa las especificaciones y elige que clase de publicación necesitas</p><p>Los siguientes parámetros aplican para ambos manuales de marca</p> ",
    price: {
      basic: [
        {
          name: "Costo base del proyecto",
          price: 100,
        },
        {
          name: "Tiempo de entrega",
          price: 0,
        },
        {
          name: "Formato de entrega",
          price: 0,
        },
        {
          name: "Modificaciones",
          price: 0,
        },
        {
          name: "Tamaño",
          price: 0,
        },
        {
          name: "Archivos editables",
          price: 0,
        },
      ],
      complete: "$300",
    },
    specs: [
      {
        id: "1",
        title: "¿Cuál marca vas a utilizar?",
        options: ["SELECT DE BRAND."],
      },
      {
        id: "2",
        title: "¿Qué incluye?",
        options: [
          "Diseño del manual según especificaciones.",
          "Pdf en alta resolución.",
        ],
      },
      {
        id: "3",
        title: "¿Qué nos tienes que entregar?",
        options: [
          "Logotipo editable.",
          "Información existente sobre aplicaciones del logotipo.",
        ],
      },
      {
        id: "4",
        title: "¿Cuál es el alcance/objetivo?",
        options: [
          "Vas a contar con un manual de marca que permitirá a la compañía destacarse e impulsar su crecimiento.",
        ],
      },
      {
        id: "5",
        title: "¿Qué NO incluye?",
        options: [
          "Creación de textos.",
          "Fotografías.",
          "Artes finales de aplicaciones.",
        ],
      },
    ],
    types_manuals: [
      {
        title: "Manual de identidad básico",
        options: [
          "Color CMYK/RGB/Hex",
          "Version horizontal y vertical del logotipo",
          "Paleta de color principal y secundaria",
          "Tipografias",
        ],
        price: 100,
      },
      {
        title: "Manual de identidad completo",
        options: [
          "Color CMYK/RGB/Hex",
          "Version horizontal y vertical del logotipo",
          "Paleta de color principal y secundaria",
          "Tipografias",
          "Planimetria",
          "Áreas de reserva y tamaños minimos",
          "Versión blanco y negro",
          "Positivo y negativo",
          "Usos incorrectos",
          "Gráfica secundaria (iconos y otros elementos)",
        ],
        price: 120,
      },
    ],
  },
  {
    status: "coming-soon",
    title: "Logotipo",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
  {
    status: "coming-soon",
    title: "Otros",
    description: "Contenido compartido en las redes sociales",
    price: {
      basic: "$100",
      complete: "$300",
    },
  },
];
