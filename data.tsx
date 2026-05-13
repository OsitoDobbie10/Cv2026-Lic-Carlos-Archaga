import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Facebook,Rss, 
         Twitch, Crop, NotebookPen, Computer, Book, Rocket, Speech, Braces,
          Video, AppWindow,DatabaseZap,Database} from "lucide-react";
import { title } from "process";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/carlos-antonio-archaga-martinez-b7a494171/",
    },
    {
        id: 2,
        logo: <Twitter size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 3,
        logo: <Rss size={30} strokeWidth={1} />,
        src: "https://github.com/OsitoDobbie10",
    },
    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/profile.php?id=100009068534290&mibextid=ZbWKwL",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/Sobremi",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/Servicios",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portafolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonios",
    },
];

export const dataAboutPage = [
      {
        id: 1,
        title: "Lic. Ciencia y Tecnologia de la Informacion Geografica",
        subtitle: "Universidad Nacional Autonoma de Honduras",
        description: "La Carrera de Ciencia y Tecnologías de la Información Geográfica se ocupa del estudio, la investigación, manejo y generación de información geográfica o geoespacial que constituye  a representación aproximada de los fenómenos geográficos que se producen en el espacio en el que se desarrolla la sociedad, para esto integra el estudio de los  Sistemas de Información Geográfica, la Percepción Remota, Sistemas de Posicionamiento Global y el manejo de bases datos espaciales para el desarrollo de la cartografía y el análisis espacial.",
        date: "Enero 2017-Marzo 2022",
    },
    {
        id: 2,
        title: "Analista GIS",
        subtitle: "TICO CONSULTORES DE INGENERIA Y TOPOGRAFIA",
        description: "Analista SIG en el proyecto reubicación de personas afectadas por los huracanes ETA, IOTA mapeode zonas inundadas con imágenes de RADAR, Fotogrametría obtención en campo vuelo de Drone apoyado con GPS de precisión y productos de interés para la identificación de los zonas de reubicación de las personas afectadas.",
        date: "Feberero 2021-Mayo 2021",
    },
    {
        id: 3,
        title: "Analista y desarrollador GIS",
        subtitle: "INGENERIA GERENCIAL",
        description: `Analista SIG en el departamento de GIS de ingeniería gerencial y desarrollador en la creación de publicaciones de mapas web con tecnología ESRI en un sistema portal de servicios Enterprise de ArcGIS usando las tecnologías esenciales y api de JavaScript, Procesamiento de imágenes de drones con el software Pix4di Mapper y Matic, Automatización de procesos con ARCPY en ARCGISPRO, Creación de caja de herramientas para procesamiento de gran volumen de datos`,
        date: "Junio 2022-Junio 2023",
    },
    {
        id: 4,
        title: "Dibujante y supervisor de construcción",
        subtitle: "TEKCOM",
        description: "Creación de planos de instalación de fibra óptica, aplicaciones enfocadas en coordenadas para visualización de zonas de interés, aplicaciones web de mapas para toma de daciones",
        date: "Agosto 2023-Octubre 2023",
    },
    {
        id: 5,
        title: "Técnico GIS1",
        subtitle: "INE censo nacional agropecuario y vivienda",
        description: "Supervisor en la actualización cartográfica por municipios para la carga y distribución de aplicaciones móvil para cuadrillas de actualización, Creación de herramientas de automatización de digitalización con Python y ModelBuilder",
        date: "Noviembre 2023- Mayo 2024",
    },
    {
        id: 6,
        title: "Operador Servicios Comerciales",
        subtitle: "ENEE Distribucion UTCD",
        description: `Operador de proceso de facturación y recepción de datos en el cobro de energía eléctrica a nivel nacional, monitoreo SQL, Creación de aplicaciones de visualización de los indicadores de a base de datos usando NestJS en el backend y React en el frontEnd conectando a la base de datos de producción de Oracle de UTCD, Monitoreo SQL en la ejecución de pase batch inCMS, creacion de aplicaciones de escritorio con python PYQT6, Pandas, docxs y oraclecsx.`,
        date: "Marzo 2024-Abril 2026",
    },
    {
        id: 7,
        title: "Tecnico Mantenimiento Catastral",
        subtitle: "Gerencia de catastro AMDC",
        description: `Tecnico sectores urbanos catastro AMDC sector 01, 06, 10, 12, 13, 17, 19, 20, 25, 27 y 29 avaluo catastral de bienes inmuebles como lotes baldios, Uso Mixto, propiedad Horizontal, Uso de Autocad, QGIS y Arcgis Pro`,
        date: "Junio 2024-Marzo 2026",
    },
     {
        id: 8,
        title: "Cursando Maestria Ciencia de Datos",
        subtitle: "GEM Educa",
        description: `Programa especializado en ciencia de datos, enfocándose en la aplicación práctica de herramientas como Python, R y SQL para el análisis de grandes volúmenes de datos, Machine Learning y econometría.`,
        date: "Enero 2026-Diciembre 2026",
    }

]

export const dataCounter = [
    {
        id: 0,
        endCounter: 4,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 200,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 40,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 2,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
     {
        id: 4,
        endCounter: 16,
        text: "Certificados obtenidos",
        lineRight: false,
        lineRightMobile: false,
    }
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Book />,
        title: "Analisis SIG",
        description: "Analisis de datos espaciales enfocada en tematicas como Percepcion remota, catastro, cartografia, gestion de riesgo de desastres, hidrologia, geoestadistica y analisis de redes",
    },
    {
        icon: <Rocket />,
        title: "Analisis de datos",
        description: "Analisis, representacion y almancenamiento de datos, depuracion y limpieza de datos, analisis estadistico y modelo de datos SQL ",
    },
    {
        icon: <Rocket />,
        title: "Business Intelligence",
        description: "Programacion Python enfocado a datos, SQL, power Bi con DAX y computacion en la nube",
    },
       {
        icon: <NotebookPen />,
        title: "Levantamientos Topograficos",
        description: "Levantamiento GPS diferencial con equipos de alta precision, procesamiento de datos con software de fotogrametria y manejo de sofyware de CAD para la creacion de planos topograficos",
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "IDESGC",
        image: "/web1.PNG",
        urlGithub: "https://github.com/OsitoDobbie10/web-demo-idesgc",
        urlDemo: "https://web-sig-demo.netlify.app/",
    },
    {
        id: 2,
        title: "Aplicacion de vista de peliculas YT Movies",
        image: "/MovieYT.png",
        urlGithub: "https://github.com/OsitoDobbie10/MoviesYT_APP_React",
        urlDemo: "https://superb-sunburst-bdc8cf.netlify.app/",
    },
    {
        id:3,
        title:"Aplicacion de monitoreo SQL InCMS solo Vista Front primera version sin vista a datos de produccion",
        image:"/Web4.PNG",
        urlGithub:"https://github.com/OsitoDobbie10/pasebatch-hn",
        urlDemo:"https://vistapasebatch.netlify.app/"
    },
    
     {
        id:4,
        title:"Dashboard AMDC para visualizar uso de graficos con content HTML",
        image:"/Vista Para CV 1.png",
        urlGithub:"https://github.com/OsitoDobbie10/MoviesYT_APP_React",
        urlDemo:"https://app.powerbi.com/view?r=eyJrIjoiNjU5YmM0YTEtNWU3ZS00NGI0LTgzYjgtYTRjNWJhMDM3ZTY2IiwidCI6ImMxYjIyNzEzLWUwMTUtNDQ5Ny04YWY3LWFjNzY4MDNmZGFjNSIsImMiOjR9"
    },
    {
        id:5,
        title:"Dashboard para recursos humanos vista",
        image:"/Vista Para CV 2.png",
        urlGithub:"https://github.com/OsitoDobbie10/MoviesYT_APP_React",
        urlDemo:"https://app.powerbi.com/view?r=eyJrIjoiNzM1ODUwZDItYjNmYS00MTIwLTlmMjAtZjFmMzkyYWFjYzE4IiwidCI6ImMxYjIyNzEzLWUwMTUtNDQ5Ny04YWY3LWFjNzY4MDNmZGFjNSIsImMiOjR9"
    }
];

export const dataTestimonials = [
           {
        id: 1,
        name: "Analisis de datos y ciencia de datos",
        description:
            "Analisis de datos enfocada a la inteligencia de negocios y manipulacion de datos usando Python, Base de datos con SQL, Visualizacion con PowerBi, excel y Python, webscrapping, manejo de Fabric de office y computacion en la nube con Azure",
        imageUrl: "/Ecosistema-analisisdatos.webp",
      },
    {
        id: 2,
        name: "Arcgis PRO, entorno web de Arcgis online y entherprise",
        description:"Manejo en el ecosistema de ESRI desde arcgis desktop y pro, arcgis online y portal para entherprise, manejo de aplicaciones escenciales y customizacion con esri developer usando la api de Javascript y React",
        imageUrl: "/ESRI-ecosistema.jpg",
    },
    {
        id: 3,
        name: "QGIS y desarrollo GIS opensource",
        description:
            "Manejo del software QGIS, cliente web leaflet,mapbox y open layers, despliegue y mantenimiento de servicios GIS web con geoserver, mapstore, geonetwork y postgis como gestor de base de datos",
        imageUrl: "/GIS-OPEN.png",
    },
    {
        id: 4,
        name: "Desarrollo web",
        description:
            "Esquema de desarrollo enfocado en Javascript usando como cliente ReactJS con NextJS14, backend uso NestJS, Supabase con PostgresSQL y Strapi con PostgresSQL",
        imageUrl: "/Ecosistema-JS.jpg",
    },
    {
        id: 5,
        name: "Topografia, CAD y fotogametria",
        description:
            "Manejo de software CAD, Civil CAD y software para procesamiento de fotogametria y nube densa de puntos como pix4di y pix4matic y open source open drone map",
        imageUrl: "/Fotogametria.webp",
    }

];   
