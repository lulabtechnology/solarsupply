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
      "Paneles solares para proyectos residenciales, comerciales e industriales, con líneas Trina, Jinko y Canadian que se actualizan según disponibilidad, potencia y ficha técnica vigente.",
    image: "/images/products/card-paneles-solares-roof.webp",
    highlight: "Trina · Jinko · Canadian",
    items: [
      "Trina Solar queda cargado con dos referencias técnicas: Vertex N 610-635W y Vertex N 695-720W.",
      "Canadian Solar queda cargado con la ficha TOPBiHiKu6 600-630W para consulta comercial.",
      "Jinko Solar queda cargado con referencias Tiger Neo N-type 570-590W y 600-620W para consulta comercial."
    ],
    cta: "Consultar paneles solares",
carousel: [
      { name: "Trina Solar", label: "Marca de paneles", image: "/images/products/logo-trina-paneles.svg" },
      { name: "Jinko Solar", label: "Marca de paneles", image: "/images/products/logo-jinko-paneles.svg" },
      { name: "Canadian Solar", label: "Marca de paneles", image: "/images/products/logo-canadian-paneles.svg" }
    ],
    catalogItems: [
      {
        title: "Trina Vertex N TSM-NEG19RC.20 610-635W",
        label: "Panel solar Trina",
        image: "/images/products/catalog-trina-vertex-n-635.webp",
        description:
          "Módulo monocristalino bifacial dual glass N-type i-TOPCon, con potencia máxima de 635W, eficiencia máxima de 23.5% y garantía de potencia a 30 años.",
        specs: ["610-635W", "Hasta 23.5% eficiencia", "N-type i-TOPCon", "Bifacial dual glass", "30 años garantía de potencia"]
      },
      {
        title: "Trina Vertex N TSM-NEG21C.20 695-720W",
        label: "Panel solar Trina",
        image: "/images/products/catalog-trina-vertex-n-720.webp",
        description:
          "Módulo Trina de alta potencia para proyectos de mayor escala, con rango 695-720W, tolerancia positiva 0~+5W y eficiencia máxima de 23.2%.",
        specs: ["695-720W", "0~+5W tolerancia", "Hasta 23.2% eficiencia", "N-type i-TOPCon", "30 años garantía de potencia"]
      },
      {
        title: "Jinko Solar",
        label: "Marca de paneles solares",
        image: "/images/products/logo-jinko-paneles.svg",
        description:
          "Marca incluida como línea visible para cotización de paneles solares según inventario, potencia disponible y requerimientos del proyecto.",
        specs: ["Marca principal", "Cotización por inventario", "Paneles solares", "Uso residencial y comercial"]
      },
      {
        title: "Canadian Solar",
        label: "Marca de paneles solares",
        image: "/images/products/logo-canadian-paneles.svg",
        description:
          "Marca visible dentro del carrusel de paneles solares para presentar alternativas comerciales en proyectos fotovoltaicos.",
        specs: ["Marca principal", "Cotización por proyecto", "Paneles solares", "Uso comercial e industrial"]
      }
    ]
  },
  {
    slug: "microinversores-inversores-rsd",
    title: "Microinversores, inversores y RSD",
    eyebrow: "NEP · FOX ESS",
    summary:
      "Soluciones para conversión, respaldo y seguridad solar: microinversores NEP, inversores FOX ESS, equipos híbridos compatibles con baterías y dispositivos Rapid Shutdown.",
    image: "/images/products/card-microinversores-rsd-static.webp",
    highlight: "NEP · FOX ESS",
    miniLogos: [
      { name: "FOX ESS", label: "Inversores", image: "/images/products/logo-fox-ess-mini.png" },
      { name: "NEP", label: "Microinversores · RSD", image: "/images/products/logo-nep-mini.png" }
    ],
    items: [
      "FOX ESS se presenta como línea de inversores híbridos/AC, inversores monofásicos G Series y baterías compatibles EP6/EP12.",
      "NEP se presenta con microinversores BDM, inversor híbrido BDH, accesorios de instalación y soluciones Rapid Shutdown PVG.",
      "Las fichas visibles pueden actualizarse según inventario, potencia disponible, compatibilidad de baterías y requerimientos del proyecto."
    ],
    cta: "Cotizar inversores y RSD",
    carousel: [
      { name: "NEP", label: "Microinversores · RSD", image: "/images/products/brand-nep.svg" },
      { name: "FOX ESS", label: "Inversores · Híbridos", image: "/images/products/brand-fox-ess.svg" }
    ],
    catalogItems: [
      {
        title: "NEP BDM-1600 / 2000 / 2250",
        label: "Microinversores NEP",
        image: "/images/products/pdf-nep-bdm-cover.webp",
        description:
          "Microinversores NEP para soluciones solares residenciales y de techo, con monitoreo a nivel de panel, comunicación WiFi o PLC e instalación plug and play.",
        specs: ["1600 / 2000 / 2250 VA", "WiFi o PLC", "Plug and play", "Monitoreo por panel", "Garantía 12 años"]
      },
      {
        title: "NEP BDH-8KSP-LB / BDH-10KSP-LB / BDH-12KSP-LB",
        label: "Inversor híbrido NEP",
        image: "/images/products/pdf-nep-bdh-cover.webp",
        description:
          "Inversor híbrido NEP compatible con múltiples aplicaciones: PV, generador, on/off grid y acoplamiento AC/DC, preparado para trabajar con bancos de baterías de 48V.",
        specs: ["8 kW / 10 kW / 12 kW", "Baterías 48V", "Hasta 10 en paralelo", "200A passthrough", "AFCI + RSD integrado"]
      },
      {
        title: "NEP PVG-2 / PVG-3",
        label: "Rapid Shutdown RSD",
        image: "/images/products/pdf-nep-rsd-datasheet-cover.webp",
        description:
          "Dispositivos NEP RSD para apagado rápido a nivel de módulo, con monitoreo, diagnóstico y comunicación PLC de dos vías.",
        specs: ["PVG-2 y PVG-3", "2 o 3 módulos", "Monitoreo por panel", "Comunicación 2-way PLC", "Diagnóstico de servicio"]
      },
      {
        title: "FOX ESS US Series Split-Phase Hybrid/AC",
        label: "Inversor híbrido/AC FOX ESS",
        image: "/images/products/pdf-fox-us-series-cover.webp",
        description:
          "Inversor de almacenamiento monofásico diseñado para aplicaciones con baterías de alto voltaje, respaldo y monitoreo remoto.",
        specs: ["3.8 kW a 11.4 kW", "Hasta 4 unidades en paralelo", "Type 4X exterior", "Monitoreo remoto"]
      },
      {
        title: "FOX ESS G Series G7 / G10",
        label: "Inversores monofásicos FOX ESS",
        image: "/images/products/pdf-fox-g-series-cover.webp",
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
    title: "Estructuras y accesorios eléctricos",
    eyebrow: "CHIKO · montaje · accesorios",
    summary:
      "Familia para estructuras CHIKO, rieles, grapas, soportes, cable solar, conectores MC4, clips, amarres y accesorios eléctricos que completan la instalación solar.",
    image: "/images/products/catalog-chiko-quotation.webp",
    highlight: "CHIKO · montaje solar",
    items: [
      "Se agrega CHIKO como línea principal de estructuras y montaje: Rail #518, L Feet, splices, clamps, grounding clip y grounding lug.",
      "Se incluyen accesorios eléctricos y de instalación: cable solar 6mm² rojo/negro, conectores MC4, cable clips SUS304 y cable ties SUS304.",
      "La subpágina queda organizada con carrusel grande y tarjetas por familia para que se pueda ampliar con nuevos productos sin romper la estructura."
    ],
    cta: "Consultar estructuras y accesorios",
    carousel: [
      { name: "CHIKO L Feet · Rail #518", label: "Lista de compra", image: "/images/products/catalog-chiko-quotation.webp" },
      { name: "Metal Roof L Feet Mount", label: "Estructura para techo metálico", image: "/images/products/catalog-chiko-metal-roof-l-feet.webp" },
      { name: "Classic Rail · clamps", label: "Rieles y grapas", image: "/images/products/catalog-chiko-rail-clamps.webp" },
      { name: "Flat Roof Mount", label: "Estructura para techo plano", image: "/images/products/catalog-chiko-flat-roof.webp" },
      { name: "Ground Mount", label: "Estructura en suelo", image: "/images/products/catalog-chiko-ground-mount.webp" }
    ],
    catalogItems: [
      {
        title: "CHIKO L Feet + Rail #518",
        label: "Estructura de techo metálico",
        image: "/images/products/catalog-chiko-quotation.webp",
        description:
          "Sistema de montaje CHIKO para techo metálico con riel #518, rail splice kit, mid clamp, end clamp, L Feet mount, grounding clip y grounding lug.",
        specs: ["CK-FT-R518B1-4800", "Rail #518 4800mm", "Rail Splice Kit", "Mid/End Clamp 30-40mm", "L Feet Mount"]
      },
      {
        title: "Accesorios eléctricos CHIKO",
        label: "Balance y conexión",
        image: "/images/products/catalog-chiko-quotation.webp",
        description:
          "Accesorios para completar la instalación: cable solar PV 6mm² rojo y negro, conectores MC4 para cable 6mm², clips SUS304 y amarres SUS304.",
        specs: ["PV Cable 6mm² rojo", "PV Cable 6mm² negro", "MC4 6mm²", "SUS304 Cable Clip", "SUS304 Cable Ties"]
      },
      {
        title: "CHIKO Metal Roof Mount Bracket",
        label: "Montaje para techo metálico",
        image: "/images/products/catalog-chiko-metal-roof-l-feet.webp",
        description:
          "Soluciones de montaje para techos trapezoidales y corrugados, incluyendo L Feet, hanger bolt, trapezoidal clamp, rail-free mount y standing seam clamps.",
        specs: ["L Feet Mount", "Hanger Bolt Mount", "Trapezoidal Clamp", "Rail-Free Mount", "Standing Seam Clamps"]
      },
      {
        title: "CHIKO Classic Rail · grapas · empalmes",
        label: "Rieles y fijación",
        image: "/images/products/catalog-chiko-rail-clamps.webp",
        description:
          "Familia de rieles, empalmes, mid clamps, end clamps y grapas ajustables para fijación ordenada de módulos solares.",
        specs: ["Classic Rail", "Rail Splice Kit", "Mid Clamp", "End Clamp", "Adjustable Clamp"]
      },
      {
        title: "CHIKO Flat Roof y Ground Mount",
        label: "Estructuras especiales",
        image: "/images/products/catalog-chiko-flat-roof.webp",
        description:
          "Opciones de montaje para techos planos y aplicaciones en suelo: sistemas ballast, triangular mount y estructuras para proyectos comerciales o industriales.",
        specs: ["Flat roof", "Ballast mount", "Triangular mount", "Ground mount", "Comercial / industrial"]
      }
    ]
  }
];

export const brands = [
  {
    name: "Trina · Jinko · Canadian",
    category: "Paneles Solares",
    description:
      "La categoría de paneles se presenta por marcas visibles y ahora incluye fichas Trina Vertex N para consulta comercial por potencia.",
    products: ["Trina Vertex N 610-635W", "Trina Vertex N 695-720W", "Jinko", "Canadian"]
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
    name: "CHIKO",
    category: "Estructuras y accesorios eléctricos",
    description:
      "CHIKO queda como marca de estructura, rieles, fijaciones, soportes y accesorios eléctricos para completar la instalación solar.",
    products: ["Rail #518", "L Feet", "Clamps", "MC4", "Cable solar 6mm²"]
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
