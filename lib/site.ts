export const site = {
  name: "Solar Supply, S.A.",
  shortName: "Solar Supply",
  domain: "https://www.solarsupplysa.com",
  email: "leonor.gomez@solarledpty.com",
  phone: "310-2696",
  whatsappLabel: "6768-1246",
  whatsappNumber: "50767681246",
  address:
    "Plaza Calle 50, Piso 1, Local 1, Calle 50, Urb. Obarrio, Bella Vista, Panamá",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Plaza+Calle+50+Piso+1+Local+1+Calle+50+Obarrio+Bella+Vista+Panama",
  contactPerson: "Leonor Gómez Marín",
  tagline: "Suministro solar confiable con respaldo técnico sólido.",
  market: "Panamá, Centroamérica y Suramérica",
  keywords: [
    "paneles solares",
    "inversores solares",
    "estructuras solares",
    "microinversores",
    "baterías solares",
    "distribuidor solar Panamá"
  ]
};

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Productos", href: "/productos" },
  { label: "Servicios técnicos", href: "/servicios" },
  { label: "Recursos", href: "/recursos" },
  { label: "Contacto", href: "/contacto" }
];

export const productFamilies = [
  {
    slug: "paneles-solares",
    title: "Paneles Solares",
    eyebrow: "Trina · Jinko · Canadian",
    summary:
      "Paneles solares organizados por marca para que el cliente identifique rápidamente las líneas disponibles y pueda consultar potencia, disponibilidad e inventario según proyecto.",
    image: "/images/products/card-paneles-marcas.svg",
    highlight: "Trina · Jinko · Canadian",
    items: [
      "Trina, Jinko y Canadian como marcas principales visibles en la categoría de paneles solares.",
      "Consulta por disponibilidad, potencia, eficiencia y condiciones comerciales vigentes.",
      "Enfoque para proyectos residenciales, comerciales e industriales que requieren selección por marca."
    ],
    cta: "Consultar paneles solares",
    carousel: [
      { name: "Trina Solar", label: "Paneles solares", image: "/images/products/logo-trina.svg" },
      { name: "Jinko Solar", label: "Paneles solares", image: "/images/products/logo-jinko.svg" },
      { name: "Canadian Solar", label: "Paneles solares", image: "/images/products/logo-canadian.svg" }
    ],
    catalogItems: [
      {
        title: "Trina Solar",
        label: "Paneles solares",
        image: "/images/products/logo-trina.svg",
        description:
          "Marca visible para cotizaciones de paneles solares según disponibilidad, potencia requerida y condiciones del proyecto.",
        specs: ["Marca principal", "Consulta por inventario", "Aplicación residencial, comercial e industrial"]
      },
      {
        title: "Jinko Solar",
        label: "Paneles solares",
        image: "/images/products/logo-jinko.svg",
        description:
          "Línea de paneles solares para organizar la oferta por fabricante y facilitar la selección comercial del cliente.",
        specs: ["Marca principal", "Consulta por potencia", "Selección por disponibilidad"]
      },
      {
        title: "Canadian Solar",
        label: "Paneles solares",
        image: "/images/products/logo-canadian.svg",
        description:
          "Marca incluida dentro de la categoría de paneles solares para presentar alternativas claras por fabricante.",
        specs: ["Marca principal", "Cotización por proyecto", "Aplicación solar fotovoltaica"]
      }
    ]
  },
  {
    slug: "microinversores-inversores-rsd",
    title: "Microinversores, inversores y RSD",
    eyebrow: "NEP · FOX ESS",
    summary:
      "Categoría para soluciones NEP y FOX ESS: microinversores, inversores híbridos, equipos AC/híbridos y dispositivos Rapid Shutdown para proyectos solares modernos.",
    image: "/images/products/card-inversores-rsd.svg",
    highlight: "NEP · FOX ESS",
    items: [
      "NEP se presenta como línea para microinversores, soluciones híbridas y Rapid Shutdown.",
      "FOX ESS se presenta con catálogo de inversores híbridos/AC para sistemas con almacenamiento y respaldo.",
      "La categoría permite mostrar marcas por fuera y productos específicos al entrar al detalle."
    ],
    cta: "Cotizar inversores y RSD",
    carousel: [
      { name: "NEP", label: "Microinversores · RSD", image: "/images/products/logo-nep.svg" },
      { name: "FOX ESS", label: "Inversores híbridos", image: "/images/products/logo-fox-ess.svg" },
      { name: "US Series", label: "Hybrid/AC", image: "/images/products/catalog-fox-us-series.webp" }
    ],
    catalogItems: [
      {
        title: "FOX ESS US Series Split-Phase Hybrid/AC",
        label: "Inversor híbrido/AC",
        image: "/images/products/catalog-fox-us-series.webp",
        description:
          "Inversor de almacenamiento monofásico diseñado para aplicaciones con baterías de alto voltaje, respaldo y monitoreo remoto.",
        specs: ["Rango 3.8 kW a 11.4 kW", "Hasta 4 unidades en paralelo", "Type 4X para instalación exterior", "Monitoreo remoto vía app o portal web"]
      },
      {
        title: "NEP Microinversores y RSD",
        label: "Microinversores · Rapid Shutdown",
        image: "/images/products/logo-nep.svg",
        description:
          "Línea NEP para presentar microinversores, equipos híbridos y soluciones de apagado rápido dentro de la misma familia comercial.",
        specs: ["Microinversores", "Solución híbrida", "Rapid Shutdown", "Aplicación en sistemas solares modernos"]
      }
    ]
  },
  {
    slug: "baterias",
    title: "Baterías",
    eyebrow: "FOX ESS EP6 · EP12",
    summary:
      "Baterías FOX ESS de alto voltaje para proyectos que necesitan respaldo energético, almacenamiento escalable y continuidad operativa.",
    image: "/images/products/card-baterias-fox.svg",
    highlight: "EP6 · EP12",
    items: [
      "FOX ESS EP6 como batería de alto voltaje escalable para respaldo y almacenamiento.",
      "FOX ESS EP12 como alternativa de mayor capacidad para proyectos con más demanda energética.",
      "Soluciones orientadas a sistemas híbridos, continuidad energética y eficiencia de almacenamiento."
    ],
    cta: "Consultar baterías",
    carousel: [
      { name: "FOX ESS EP6", label: "Batería alto voltaje", image: "/images/products/catalog-fox-ep6.webp" },
      { name: "FOX ESS EP12", label: "Batería alto voltaje", image: "/images/products/catalog-fox-ep12.webp" },
      { name: "FOX ESS", label: "Almacenamiento", image: "/images/products/logo-fox-ess.svg" }
    ],
    catalogItems: [
      {
        title: "FOX ESS EP6",
        label: "Batería de alto voltaje",
        image: "/images/products/catalog-fox-ep6.webp",
        description:
          "Sistema de almacenamiento de energía escalable y compacto para aplicaciones de respaldo con montaje sobre muro o piso.",
        specs: ["5.76 kWh nominal", "Escalable hasta 23.04 kWh", "90% de profundidad de descarga", "IP65"]
      },
      {
        title: "FOX ESS EP12",
        label: "Batería de alto voltaje",
        image: "/images/products/catalog-fox-ep12.webp",
        description:
          "Sistema de almacenamiento de mayor capacidad para proyectos que requieren más autonomía y escalabilidad.",
        specs: ["11.52 kWh nominal", "Escalable hasta 46.08 kWh", "90% de profundidad de descarga", "IP65"]
      }
    ]
  },
  {
    slug: "estructura-accesorios-electricos",
    title: "Estructura y accesorios eléctricos",
    eyebrow: "Montaje · balance · protección",
    summary:
      "Familia para estructuras, rieles, anclajes, fijaciones, componentes de montaje y accesorios eléctricos que completan la instalación solar.",
    image: "/images/products/card-estructuras-electricas.svg",
    highlight: "Estructura · accesorios",
    items: [
      "Rieles, anclajes, fijaciones y soportes para montaje profesional de paneles solares.",
      "Accesorios eléctricos y componentes complementarios para el balance del sistema.",
      "La categoría queda preparada para incorporar marcas y productos específicos desde los catálogos comerciales."
    ],
    cta: "Consultar accesorios",
    carousel: [
      { name: "Estructuras", label: "Montaje solar", image: "/images/products/logo-structures.svg" },
      { name: "Accesorios", label: "Balance del sistema", image: "/images/structures-accessories.svg" },
      { name: "Eléctricos", label: "Protección y conexión", image: "/images/products/card-estructuras-electricas.svg" }
    ],
    catalogItems: [
      {
        title: "Estructuras de montaje",
        label: "Montaje solar",
        image: "/images/products/logo-structures.svg",
        description:
          "Componentes para montar paneles solares con orden, seguridad y buena terminación en campo.",
        specs: ["Rieles", "Anclajes", "Fijaciones", "Soportes"]
      },
      {
        title: "Accesorios eléctricos",
        label: "Balance del sistema",
        image: "/images/structures-accessories.svg",
        description:
          "Productos complementarios para completar la instalación y mantener una presentación técnica clara.",
        specs: ["Conexión", "Protección", "Orden de instalación", "Componentes complementarios"]
      }
    ]
  }
];

export const brands = [
  {
    name: "Trina · Jinko · Canadian",
    category: "Paneles Solares",
    description:
      "La categoría de paneles queda presentada por marcas visibles para que el cliente consulte disponibilidad, potencia y oferta vigente.",
    products: ["Trina", "Jinko", "Canadian"]
  },
  {
    name: "NEP · FOX ESS",
    category: "Microinversores, inversores y RSD",
    description:
      "La web muestra las marcas por fuera y, al entrar, presenta productos o catálogos específicos como FOX ESS US Series y soluciones NEP.",
    products: ["Microinversores", "Inversores", "RSD"]
  },
  {
    name: "FOX ESS EP6 · EP12",
    category: "Baterías",
    description:
      "Baterías de alto voltaje para almacenamiento y respaldo energético, presentadas con referencia visual de catálogo.",
    products: ["EP6", "EP12", "Alto voltaje"]
  },
  {
    name: "Estructura y accesorios eléctricos",
    category: "Montaje y balance del sistema",
    description:
      "Categoría preparada para rieles, anclajes, fijaciones, soportes, protecciones y accesorios que lleguen desde los catálogos comerciales.",
    products: ["Montaje", "Accesorios", "Eléctricos"]
  }
];

export const valuePillars = [
  {
    title: "Suministro con criterio técnico",
    text: "Solar Supply no solo despacha equipos: orienta al instalador y a la empresa para seleccionar productos coherentes con cada proyecto."
  },
  {
    title: "Costo competitivo",
    text: "La oferta se enfoca en productos de buena calidad y precio atractivo, capaces de competir frente a opciones de costo mucho mayor."
  },
  {
    title: "Catálogo flexible",
    text: "La estructura comercial está preparada para incorporar nuevas marcas, baterías, lámparas, accesorios y líneas complementarias cuando sea necesario."
  },
  {
    title: "Visión internacional",
    text: "La marca se presenta con una imagen corporativa capaz de atender Panamá, Centroamérica y Suramérica con seriedad y proyección."
  }
];

export const services = [
  {
    title: "Confección de planos",
    text: "Servicio técnico adicional para clientes que compran productos con Solar Supply y requieren documentación formal para desarrollar su proyecto."
  },
  {
    title: "Permisología",
    text: "Acompañamiento en procesos de permisos vinculados al proyecto solar, cotizado según alcance, complejidad y requisitos específicos."
  },
  {
    title: "Orientación técnica",
    text: "Soporte para instaladores y empresas que desean validar una selección de equipos, entender nuevas tecnologías o definir una propuesta adecuada."
  }
];

export const resourceItems = [
  {
    title: "Fichas técnicas de productos",
    text: "Atención comercial para compartir fichas de paneles, inversores, microinversores, baterías, RSD, estructuras y accesorios según la necesidad del proyecto.",
    action: "Solicitar fichas"
  },
  {
    title: "Disponibilidad y oferta comercial",
    text: "Consulta inventario, líneas activas y opciones recomendadas para cada tipo de sistema solar, con enfoque práctico para instaladores y empresas.",
    action: "Consultar disponibilidad"
  },
  {
    title: "Aplicaciones y referencia de uso",
    text: "Solar Supply puede apoyar la conversación comercial con referencias técnicas, fotografías de aplicación y orientación para respaldar la decisión de compra.",
    action: "Solicitar información"
  }
];

export const faqs = [
  {
    question: "¿Solar Supply instala sistemas solares?",
    answer:
      "El enfoque principal es el suministro de productos. Los servicios de planos y permisología se ofrecen como costo adicional únicamente a clientes que compran productos."
  },
  {
    question: "¿Los paneles solares serán siempre de las mismas marcas?",
    answer:
      "No necesariamente. La sección está diseñada para manejar paneles por marca y actualizar la oferta según disponibilidad comercial y condiciones del mercado."
  },
  {
    question: "¿Pueden ayudar si el instalador no conoce un producto nuevo?",
    answer:
      "Sí. Solar Supply busca afianzar al instalador con orientación técnica y respaldo para que pueda evaluar productos nuevos con mayor confianza."
  },
  {
    question: "¿Manejan productos para proyectos internacionales?",
    answer:
      "La visión comercial contempla Panamá, Centroamérica y Suramérica, con una imagen corporativa preparada para crecer y atender oportunidades regionales."
  }
];

export function whatsappUrl(message = "Hola Solar Supply, quiero cotizar productos para un sistema solar.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
