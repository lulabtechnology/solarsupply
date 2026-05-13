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
      "Trina, Jinko y Canadian quedan como marcas principales visibles en el carrusel de paneles solares.",
      "La categoría permite cotizar por marca, potencia, disponibilidad y necesidad técnica del proyecto.",
      "Pensado para proyectos residenciales, comerciales e industriales donde el cliente necesita comparar opciones por fabricante."
    ],
    cta: "Consultar paneles solares",
    carousel: [
      { name: "Trina Solar", label: "Paneles solares", image: "/images/products/brand-trina.svg" },
      { name: "Jinko Solar", label: "Paneles solares", image: "/images/products/brand-jinko.svg" },
      { name: "Canadian Solar", label: "Paneles solares", image: "/images/products/brand-canadian.svg" }
    ],
    catalogItems: [
      {
        title: "Trina Solar",
        label: "Paneles solares",
        image: "/images/products/brand-trina.svg",
        description:
          "Marca visible dentro de la familia de paneles solares para cotizar según potencia, inventario y alcance del proyecto.",
        specs: ["Marca principal", "Consulta por inventario", "Proyectos residenciales, comerciales e industriales"]
      },
      {
        title: "Jinko Solar",
        label: "Paneles solares",
        image: "/images/products/brand-jinko.svg",
        description:
          "Línea de paneles solares organizada por fabricante para facilitar la selección comercial y técnica del cliente.",
        specs: ["Marca principal", "Consulta por potencia", "Selección por disponibilidad"]
      },
      {
        title: "Canadian Solar",
        label: "Paneles solares",
        image: "/images/products/brand-canadian.svg",
        description:
          "Marca incluida para presentar alternativas claras dentro de la familia de paneles solares.",
        specs: ["Marca principal", "Cotización por proyecto", "Aplicación fotovoltaica"]
      }
    ]
  },
  {
    slug: "microinversores-inversores-rsd",
    title: "Microinversores, inversores y RSD",
    eyebrow: "NEP · FOX ESS",
    summary:
      "Categoría para soluciones NEP y FOX ESS: microinversores, inversores híbridos, inversores monofásicos, accesorios para micros y dispositivos Rapid Shutdown.",
    image: "/images/products/card-inversores-rsd.svg",
    highlight: "NEP · FOX ESS",
    items: [
      "NEP queda segmentado en microinversores BDM, inversores híbridos BDH, RSD PVG y accesorios para microinversores.",
      "FOX ESS queda segmentado en inversores híbridos/AC US Series y monofásicos G Series G7/G10.",
      "El carrusel principal muestra marcas y catálogos grandes; al entrar al detalle se ven los productos que se venden dentro de esta familia."
    ],
    cta: "Cotizar inversores y RSD",
    carousel: [
      { name: "NEP", label: "Microinversores · Híbridos · RSD", image: "/images/products/brand-nep.svg" },
      { name: "NEP BDM", label: "Microinversores", image: "/images/products/catalog-nep-bdm-2250.webp" },
      { name: "NEP BDH", label: "Inversor híbrido", image: "/images/products/catalog-nep-hybrid-bdh.webp" },
      { name: "NEP PVG", label: "Rapid Shutdown", image: "/images/products/catalog-nep-rsd-pvg.webp" },
      { name: "FOX ESS", label: "Marca / catálogo", image: "/images/products/brand-fox-ess.svg" },
      { name: "FOX ESS US Series", label: "Híbrido / AC", image: "/images/products/catalog-fox-us-series.webp" },
      { name: "FOX ESS G Series", label: "G7 / G10 monofásicos", image: "/images/products/catalog-fox-g-series.webp" }
    ],
    catalogItems: [
      {
        title: "NEP BDM-1600 / 2000 / 2250",
        label: "Microinversores NEP",
        image: "/images/products/catalog-nep-bdm-2250.webp",
        description:
          "Microinversores NEP para soluciones solares residenciales y de techo, con monitoreo a nivel de panel, comunicación WiFi o PLC e instalación plug and play.",
        specs: ["1600 / 2000 / 2250 VA", "WiFi o PLC", "Plug and play", "Monitoreo por panel", "IP66/IP67"]
      },
      {
        title: "NEP BDH-8KSP-LB / BDH-10KSP-LB / BDH-12KSP-LB",
        label: "Inversor híbrido NEP",
        image: "/images/products/catalog-nep-hybrid-bdh.webp",
        description:
          "Inversor híbrido NEP compatible con múltiples aplicaciones: PV, generador, on/off grid y acoplamiento AC/DC, preparado para trabajar con bancos de baterías de 48V.",
        specs: ["8 kW / 10 kW / 12 kW", "Baterías 48V", "Hasta 10 en paralelo", "200A passthrough", "AFCI + RSD integrado"]
      },
      {
        title: "NEP PVG-2 / PVG-3",
        label: "Rapid Shutdown RSD",
        image: "/images/products/catalog-nep-rsd-pvg.webp",
        description:
          "Dispositivos NEP RSD para apagado rápido a nivel de módulo, diseñados para trabajar con inversores NEP y también con inversores de otras marcas mediante transmisor/gateway.",
        specs: ["PVG-2 y PVG-3", "2 o 3 módulos", "Monitoreo por panel", "Comunicación 2-way PLC", "Servicio y diagnóstico"]
      },
      {
        title: "Accesorios NEP para microinversores",
        label: "Accesorios de instalación",
        image: "/images/products/catalog-nep-accessories.webp",
        description:
          "Accesorios comerciales para completar la instalación de microinversores NEP: cable troncal, end cap, módulos BDNZ-Wifi y herramientas de desconexión.",
        specs: ["BDM-2000", "Trunk cable 2.4 m 10AWG", "End cap", "BDNZ-Wifi", "Tools"]
      },
      {
        title: "FOX ESS US Series Split-Phase Hybrid/AC",
        label: "Inversor híbrido/AC FOX ESS",
        image: "/images/products/catalog-fox-us-series.webp",
        description:
          "Inversor de almacenamiento monofásico diseñado para aplicaciones con baterías de alto voltaje, respaldo y monitoreo remoto.",
        specs: ["3.8 kW a 11.4 kW", "Hasta 4 unidades en paralelo", "Type 4X exterior", "Monitoreo remoto"]
      },
      {
        title: "FOX ESS G Series G7 / G10",
        label: "Inversores monofásicos FOX ESS",
        image: "/images/products/catalog-fox-g-series.webp",
        description:
          "Inversores monofásicos G Series con tres MPPT, monitoreo remoto, protección IP65 y eficiencia máxima de 97.8%.",
        specs: ["G7 y G10", "Three MPPT", "IP65", "Eficiencia máx. 97.8%", "Monitoreo por app o portal"]
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
      "FOX ESS EP6 queda dentro de baterías como solución de alto voltaje escalable.",
      "FOX ESS EP12 queda dentro de baterías como alternativa de mayor capacidad para proyectos con más demanda energética.",
      "Ambas referencias se presentan con imágenes de catálogo y datos técnicos resumidos para cotización."
    ],
    cta: "Consultar baterías",
    carousel: [
      { name: "FOX ESS", label: "Baterías de alto voltaje", image: "/images/products/brand-fox-ess.svg" },
      { name: "FOX ESS EP6", label: "Escalable a 23.04 kWh", image: "/images/products/catalog-fox-ep6.webp" },
      { name: "FOX ESS EP12", label: "Escalable a 46.08 kWh", image: "/images/products/catalog-fox-ep12.webp" }
    ],
    catalogItems: [
      {
        title: "FOX ESS EP6",
        label: "Batería de alto voltaje",
        image: "/images/products/catalog-fox-ep6.webp",
        description:
          "Sistema de almacenamiento de energía escalable y compacto para aplicaciones de respaldo con montaje sobre muro o piso.",
        specs: ["5.76 kWh nominal", "Escalable a 23.04 kWh", "90% DOD", "IP65"]
      },
      {
        title: "FOX ESS EP12",
        label: "Batería de alto voltaje",
        image: "/images/products/catalog-fox-ep12.webp",
        description:
          "Sistema de almacenamiento de mayor capacidad para proyectos que requieren más autonomía y escalabilidad.",
        specs: ["11.52 kWh nominal", "Escalable a 46.08 kWh", "90% DOD", "IP65"]
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
      "La categoría queda lista para agregar marcas chicas y productos específicos según el catálogo comercial."
    ],
    cta: "Consultar accesorios",
    carousel: [
      { name: "Estructuras", label: "Montaje solar", image: "/images/products/brand-structures.svg" },
      { name: "Accesorios eléctricos", label: "Balance del sistema", image: "/images/products/brand-electrical.svg" },
      { name: "Componentes de instalación", label: "Protección y conexión", image: "/images/products/card-estructuras-electricas.svg" }
    ],
    catalogItems: [
      {
        title: "Estructuras de montaje",
        label: "Montaje solar",
        image: "/images/products/brand-structures.svg",
        description:
          "Componentes para montar paneles solares con orden, seguridad y buena terminación en campo.",
        specs: ["Rieles", "Anclajes", "Fijaciones", "Soportes"]
      },
      {
        title: "Accesorios eléctricos",
        label: "Balance del sistema",
        image: "/images/products/brand-electrical.svg",
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
      "La categoría de paneles se presenta por marcas visibles para que el cliente consulte disponibilidad, potencia y oferta vigente.",
    products: ["Trina", "Jinko", "Canadian"]
  },
  {
    name: "NEP",
    category: "Microinversores, inversores y RSD",
    description:
      "NEP se presenta con microinversores BDM, inversores híbridos BDH, soluciones RSD PVG y accesorios de instalación para micros.",
    products: ["BDM", "BDH", "PVG/RSD", "Accesorios"]
  },
  {
    name: "FOX ESS",
    category: "Microinversores, inversores y RSD",
    description:
      "FOX ESS queda como línea de inversores híbridos/AC y monofásicos; sus baterías EP6 y EP12 permanecen separadas en la familia Baterías.",
    products: ["US Series", "G Series", "G7", "G10"]
  },
  {
    name: "FOX ESS EP6 · EP12",
    category: "Baterías",
    description:
      "Las baterías FOX ESS EP6 y EP12 quedan en la familia de almacenamiento de alto voltaje.",
    products: ["EP6", "EP12", "Alto voltaje"]
  },
  {
    name: "Estructuras · accesorios eléctricos",
    category: "Estructura y accesorios eléctricos",
    description:
      "Sección preparada para marcas chicas, estructuras, balance del sistema y productos del catálogo comercial.",
    products: ["Rieles", "Anclajes", "Protección", "Conexión"]
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
