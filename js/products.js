const products = [
    {
        id: 1,
        nombre: "B�lsamo Multiprop�sito de Mango Tender Care",
        categoria: "cuidado-piel,nuevos",
        precio: 140.90,
        precioOriginal: null,
        rating: 4.7,
        reviews: 244,
        descripcion: "B�lsamo hidratante multiprop�sito con aroma a mango.",
        descriptionLarga: "F�rmula nutritiva para labios, cut�culas y zonas secas. Compacto y f�cil de llevar.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47688%2F47688_1.png&MediaId=20924365&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47688%2F47688_2.png&MediaId=20924366&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Hidrataci�n intensa",
            "Uso en labios, manos y zonas secas"
        ],
        badge: "nuevo"
    },
    {
        id: 2,
        nombre: "Crema Facial Iluminadora Antiedad Diamond Cellular",
        categoria: "cuidado-piel,nuevos",
        precio: 840.00,
        precioOriginal: null,
        rating: 4.7,
        reviews: 225,
        descripcion: "Crema hidratante de larga duraci�n con ingredientes naturales.",
        descriptionLarga: "Proporciona hidrataci�n profunda y luminosidad sin residuos grasos.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47686%2F47686_1.png&MediaId=21013198&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Hidrataci�n 24h",
            "Ingredientes naturales"
        ],
        badge: "nuevo"
    },
    {
        id: 3,
        nombre: "Excite para �l Eau de Toilette",
        categoria: "hombres,nuevos",
        precio: 660.00,
        precioOriginal: null,
        rating: 4.8,
        reviews: 178,
        descripcion: "Fragancia masculina intensa y duradera.",
        descriptionLarga: "Notas de mel�n, t� y musgo para un aroma fresco y sofisticado.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45890%2FMX%2F45890_1.png&MediaId=21541294&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Aroma fresco",
            "Ideal para noche"
        ],
        badge: "nuevo"
    },
    {
        id: 4,
        nombre: "Aretes Diamor",
        categoria: "nuevos,joyeria",
        precio: 460.00,
        precioOriginal: null,
        rating: 4.8,
        reviews: 178,
        descripcion: "Aretes elegantes con dise�o brillante.",
        descriptionLarga: "Accesorio perfecto para cualquier ocasi�n especial.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48561%2F48561_3.png&MediaId=21013218&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Dise�o moderno",
            "Acabado brillante"
        ],
        badge: "nuevo"
    },
    {
        id: 5,
        nombre: "Limpiadora Micelar Diamond Cellular",
        categoria: "cuidado-piel,nuevos",
        precio: 299.99,
        precioOriginal: null,
        rating: 4.5,
        reviews: 167,
        descripcion: "Limpiadora micelar con aceite de arg�n puro.",
        descriptionLarga: "Limpia el rostro sin resecar y deja una sensaci�n fresca.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48027%2F48027_4.png&MediaId=21013210&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Suave con la piel",
            "F�rmula equilibrada"
        ],
        badge: "nuevo"
    },
    {
        id: 6,
        nombre: "Polvos Compactos Ever Lasting THE ONE",
        categoria: "maquillaje",
        precio: 480.00,
        precioOriginal: null,
        rating: 4.6,
        reviews: 132,
        descripcion: "Polvos compactos con acabado natural.",
        descriptionLarga: "Perfectos para retocar el maquillaje y controlar el brillo.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F34647%2F34647_1.png&MediaId=14800970&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Acabado natural",
            "Larga duraci�n"
        ],
        badge: "nuevo"
    },
    {
        id: 7,
        nombre: "Gel para Despu�s del Afeitado North for Men",
        categoria: "hombres",
        precio: 480.00,
        precioOriginal: null,
        rating: 4.4,
        reviews: 156,
        descripcion: "Gel calmante para despu�s del afeitado.",
        descriptionLarga: "Hidrata la piel y reduce la irritaci�n con una fragancia suave.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47271%2F47271_1.png&MediaId=20414642&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Calma la piel",
            "F�rmula ligera"
        ],
        badge: null
    },
    {
        id: 8,
        nombre: "Espuma Limpiadora 2-in-1 North for Men",
        categoria: "hombres",
        precio: 480.00,
        precioOriginal: null,
        rating: 4.5,
        reviews: 89,
        descripcion: "Espuma limpiadora y de afeitado para piel masculina.",
        descriptionLarga: "Limpia profundamente y protege la piel antes del afeitado.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47270%2F47270_1.png&MediaId=20414635&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "F�rmula 2 en 1",
            "Ideal para piel sensible"
        ],
        badge: null
    },
    {
        id: 9,
        nombre: "Jabon en Barra Ultimate Balance",
        categoria: "cuidado-piel,hombres",
        precio: 59.90,
        precioOriginal: null,
        rating: 4.9,
        reviews: 421,
        descripcion: "Jabon en barra para piel limpia y suave.",
        descriptionLarga: "Limpia la piel profundamente mientras mantiene hidratacion natural.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43929%2F43929_1.png&MediaId=21561958&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Limpieza profunda",
            "Suave con la piel"
        ],
        badge: null

     },
    {
        id: 10,
        nombre: "Stick para Labios y Mejillas Waunt",
        categoria: "maquillaje",
        precio: 299.90,
        precioOriginal: null,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Una jugosa barra de gelatina para mejillas y labios con una textura suave y elástica. Se funde sin esfuerzo con un color de larga duración y un toque fresco de hidratación. Fresco, ligero, vegano y perfecto para el día a día. Registrado en The Vegan Society™.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_1.png&MediaId=21035451&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_3.png&MediaId=21035452&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_4.png&MediaId=21035441&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_5.png&MediaId=21035434&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_8.png&MediaId=21035447&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_7.png&MediaId=21035449&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Limpieza profunda",
            "Suave con la piel"
        ],
        badge: null

          },
        {
        id: 11,
        nombre: "Godette Ferja - Paleta de sombras",
        categoria: "maquillaje",
        precio: 1085.00,
        precioOriginal: null,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Una jugosa barra de gelatina para mejillas y labios con una textura suave y elástica. Se funde sin esfuerzo con un color de larga duración y un toque fresco de hidratación. Fresco, ligero, vegano y perfecto para el día a día. Registrado en The Vegan Society™.",
        emoji: "??",
        imagenes: [
            "https://ferja.mx/cdn/shop/files/GODETE_1.jpg?v=1770532046&width=720",
            "https://ferja.mx/cdn/shop/files/GODETE_2.jpg?v=1770532046&width=720",
            "https://ferja.mx/cdn/shop/files/GODETE_4.jpg?v=1770532046&width=720",
            "https://ferja.mx/cdn/shop/files/GODETE_3.jpg?v=1770532046&width=720"
  
        ],
        caracteristicas: [
            "Limpieza profunda",
            "Suave con la piel"
        ],
        badge: null

        }, 
        {
        id: 12,
        nombre: "Suplemento Alimenticio con Magnesio, Vitamina B6 y Extracto de Granada",
        categoria: "nutricionn,descuento",
        precio: 429.90,
        precioOriginal: 567.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Una jugosa barra de gelatina para mejillas y labios con una textura suave y elástica. Se funde sin esfuerzo con un color de larga duración y un toque fresco de hidratación. Fresco, ligero, vegano y perfecto para el día a día. Registrado en The Vegan Society™.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_1.png&MediaId=20472842&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_2.png&MediaId=19717107&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_3.png&MediaId=19717109&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_4.png&MediaId=19717108&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_5.png&MediaId=19717106&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_6.png&MediaId=19717105&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_7.png&MediaId=19717103&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
  
        ],
        caracteristicas: [
            "Limpieza profunda",
            "Suave con la piel"
        ],
        badge: null


         }, 
        {
        id: 13,
        nombre: "Pasta de Dientes con Aceites Naturales Optifresh",
        categoria: "descuento",
        precio: 99.90,
        precioOriginal: 150.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Una jugosa barra de gelatina para mejillas y labios con una textura suave y elástica. Se funde sin esfuerzo con un color de larga duración y un toque fresco de hidratación. Fresco, ligero, vegano y perfecto para el día a día. Registrado en The Vegan Society™.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_1.png&MediaId=20702735&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_2.png&MediaId=20702728&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_3.png&MediaId=20702729&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_4.png&MediaId=20702730&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_5.png&MediaId=20702731&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_6.png&MediaId=20702732&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
  
        ],
        caracteristicas: [
            "Refresca el aliento con aceites de hierbas naturales",
            "Contiene tecnología Protect Shield",
            "Favorece la salud de toda la boca"
        ],
        badge: null

          }, 
        {
        id: 14,
        nombre: "Eclat Femme Eau de Toilette",
        categoria: "descuento,perfumes",
        precio: 479.90,
        precioOriginal: 770.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Hermosa y radiante Eau de Toilette con el poderoso y a la vez delicado aroma de las mejores flores de Jazmín.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42507%2F42507_1.png&MediaId=14990562&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42507%2F42507_2.png&MediaId=16166430&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebPP"
         
        ],
        caracteristicas: [
            "Aroma con una delicada belleza y potencia",
            "Corazón de flores de Jazmín radiante y noble",
            "Cultivado en la cuna de la fragancia - Grasse en Francia"
        ],
        badge: null

           }, 
        {
        id: 15,
        nombre: "Spray Antitranspirante para Pies Control de Olores 48h Feet Up Expert",
        categoria: "descuento",
        precio: 199.90,
        precioOriginal: 350.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Manténgase fresco y seco durante 48H con este spray antitranspirante para pies, diseñado para combatir el sudor y el olor mientras mantiene sus pies cómodos.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46982%2F46982_1.png&MediaId=19976997&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46982%2F46982_2.png&MediaId=19977002&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46982%2F46982_3.png&MediaId=19977001&Version=4&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
         
        ],
        caracteristicas: [
            "Control del olor clínicamente probado durante 48 horas",
            "Proporciona una sensación de frescor y frescura instantánea en la piel",
            "Efecto de secado rápido"
        ],
        badge: null

        }, 
        {
        id: 16,
        nombre: "Every Me Sweetheart Rose Eau de Toilette",
        categoria: "descuento,perfumes",
        precio: 199.90,
        precioOriginal: 350.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Manténgase fresco y seco durante 48H con este spray antitranspirante para pies, diseñado para combatir el sudor y el olor mientras mantiene sus pies cómodos.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_1.png&MediaId=19885244&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_2.png&MediaId=19884928&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_3.png&MediaId=19884929&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_4.png&MediaId=19885240&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_6.png&MediaId=19885242&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_7.png&MediaId=19885243&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f46793%2f46793_8.mp4&MediaId=19917292&Version=2#t=0.001"
        ],
        caracteristicas: [
            "Control del olor clínicamente probado durante 48 horas",
            "Proporciona una sensación de frescor y frescura instantánea en la piel",
            "Efecto de secado rápido"
        ],
        badge: null

          }, 
        {
        id: 17,
        nombre: "Sérum Nocturno para Cabello Bond Repair DUOLOGI",
        categoria: "descuento",
        precio: 390.00,
        precioOriginal: 350.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "ALCOHOL DENAT., AQUA, PARFUM, HYDROXYCITRONELLAL, CITRONELLOL, LIMONENE, LINALOOL",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47262%2F47262_1.png&MediaId=20204711&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47262%2F47262_2.png&MediaId=20204712&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47262%2F47262_3.png&MediaId=20204713&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47262%2F47262_4.png&MediaId=20204714&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47262%2F47262_5.png&MediaId=20204715&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Dimensiones: Longitud 65mm, Altura 112mm, Profundidad 32mm, Peso 0.161g",
            "Nombre completo del producto: Every Me Sweetheart Rose Eau de Toilette"
        ],
        badge: null

        }, 
        {
        id: 18,
        nombre: "Eclat Femme Weekend Riviera Eau de Toilette",
        categoria: "descuento,perfumes",
        precio: 199.90,
        precioOriginal: 350.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Este tratamiento capilar nocturno penetra hasta el córtex capilar para nutrir y reparar los enlaces internos rotos y conseguir un cabello más fuerte, suave y brillante",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46792%2F46792_2.png&MediaId=19936054&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_2.png&MediaId=19884928&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_3.png&MediaId=19884929&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_4.png&MediaId=19885240&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_6.png&MediaId=19885242&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_7.png&MediaId=19885243&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
         ],
        caracteristicas: [
            "El cabello se siente más resistente a la rotura",
            "Efecto de brillo resplandeciente",
            "Con tecnología Bond Repair, betaína y complejo de brillo"
        ],
        badge: null

        }, 
        {
        id: 19,
        nombre: "Eclat Homme Weekend Azur Eau de Toilette",
        categoria: "descuento,perfumes",
        precio: 379.90,
        precioOriginal: 770.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Stick para labios y mejillas con textura jugosa.",
        descriptionLarga: "Una refinada fragancia masculina que canaliza el vibrante litoral de la Costa Azul, con notas mediterráneas bañadas por el sol, elegantes maderas y facetas de cuero salado y mineral que navegan con la brisa marina.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_1.png&MediaId=19936105&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_2.png&MediaId=19936100&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_3.png&MediaId=19936101&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_4.png&MediaId=19936102&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_5.png&MediaId=19936103&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_6.png&MediaId=19936104&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f46795%2f46795_7.mp4&MediaId=20342055&Version=2#t=0.001"
         ],
        caracteristicas: [
            "TOP: Pimienta rosa, jengibre, mandarina",
            "CORAZÓN: Acorde Côte d'Azur, Madera de Cedro, Madera de Higuera",
            "BASE: Acorde Cuero Mineral, Acorde Haba Tonka, Almizcle Brillante"
        ],
        badge: null

            }, 
        {
        id: 20,
        nombre: "Crema Rica Antimanchas Even Out Optimals",
        categoria: "descuento,cuidado-piel",
        precio: 229.90,
        precioOriginal: 415.90,
        rating: 4.9,
        reviews: 421,
        descripcion: "Esta crema hidratante, rica y nutritiva, con extracto de algas arco iris, niacinamida y paraprobióticos, hidrata y combate la hiperpigmentación y favorece la salud y la función de la barrera cutánea, para una piel luminosa y radiante.",
        descriptionLarga: "Esta crema hidratante, rica y nutritiva, con extracto de algas arco iris, niacinamida y paraprobióticos, hidrata y combate la hiperpigmentación y favorece la salud y la función de la barrera cutánea, para una piel luminosa y radiante.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_1.png&MediaId=20200747&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_2.png&MediaId=20200742&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_3.png&MediaId=20200743&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_4.png&MediaId=20200744&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_5.png&MediaId=20200745&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_6.png&MediaId=20200746&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
            
         ],
        caracteristicas: [
            "Mejora la luminosidad de la piel y potencia su resplandoa",
            "Piel más radiante desde elprimer us",
            "Ideal para pieles secas"
        ],
        badge: null

             }, 
        {
        id: 21,
        nombre: "Parches Faciales Hydra-Glow Optimals",
        categoria: "descuento,maquillaje,cuidado-piel",
        precio: 99.90,
        precioOriginal: 180.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Parches de gel intensamente hidratantes con ácido hialurónico y niacinamida que rellenan, alisan, refrescan y revitalizan al instante la piel cansada y deshidratada. Adecuados para su uso en la frente, debajo de los ojos, mejillas y papada.",
        descriptionLarga: "Parches de gel intensamente hidratantes con ácido hialurónico y niacinamida que rellenan, alisan, refrescan y revitalizan al instante la piel cansada y deshidratada. Adecuados para su uso en la frente, debajo de los ojos, mejillas y papada.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_1.png&MediaId=20200759&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_2.png&MediaId=20200754&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_3.png&MediaId=20200755&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_4.png&MediaId=20200756&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_5.png&MediaId=20200757&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_6.png&MediaId=20200758&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f47437%2f47437_7.mp4&MediaId=20412573&Version=2#t=0.001"
         ],
        caracteristicas: [
            "Ilumina los ojos cansados",
            "Reduce la hinchazón y la aparición de ojeras",
            "Suaviza la apariencia de las líneas de expresión"
        ],
        badge: null


           }, 
        {
        id: 22,
        nombre: "Ampolletas de Péptidos Exprés Proceuticals NovAge+",
        categoria: "maquillaje",
        precio: 99.90,
        precioOriginal: 180.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Ampolletas dosificadas con precisión y cargadas de péptidos que potencian el colágeno. Eleva, reafirma y alisa la piel al instante en un tratamiento intensivo de 7 días",
        descriptionLarga: "Ampolletas dosificadas con precisión y cargadas de péptidos que potencian el colágeno. Eleva, reafirma y alisa la piel al instante en un tratamiento intensivo de 7 día",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_1.png&MediaId=20903778&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_2.png&MediaId=20903771&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_3.png&MediaId=20903772&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_4.png&MediaId=20903773&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_5.png&MediaId=20903774&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_6.png&MediaId=20903775&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_7.png&MediaId=20903776&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f47105%2f47105_8.mp4&MediaId=21210444&Version=2#t=0.001"
         ],
        caracteristicas: [
            "Efecto lifting instantáneo*.",
            "El 89% notó la piel más tensa en 1 semana*",
            "La piel se siente tonificada y elástica*."
        ],
        badge: null

              }, 
        {
        id: 23,
        nombre: "Repuesto de Jabón Líquido para Manos y Cuerpo con Amapola y Vainilla Essense & Co",
        categoria: "descuento",
        precio: 240.00,
        precioOriginal: null,
        rating: 4.9,
        reviews: 421,
        descripcion: "Ampolletas dosificadas con precisión y cargadas de péptidos que potencian el colágeno. Eleva, reafirma y alisa la piel al instante en un tratamiento intensivo de 7 días",
        descriptionLarga: "Ampolletas dosificadas con precisión y cargadas de péptidos que potencian el colágeno. Eleva, reafirma y alisa la piel al instante en un tratamiento intensivo de 7 día",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47450%2F47450_1.png&MediaId=20440350&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47450%2F47450_2.png&MediaId=20440336&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47450%2F47450_3.png&MediaId=20440337&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47450%2F47450_4.png&MediaId=20440338&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47450%2F47450_5.png&MediaId=20440339&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
         ],
        caracteristicas: [
            "76% menos de plástico que una botella de 300 ml",
            "Botella antigua Essence & Co fácil de rellenar",
            "Perfumado con Amapola radiante y Vainilla cálida"
        ],
        badge: null

        
              }, 
        {
        id: 24,
        nombre: "Possess Eau de Parfum",
        categoria: "descuento",
        precio: 689.90,
        precioOriginal: 990.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Conviértete en un experto en el cuidado de los pies en casa con este suero suavizante para pies. Gracias al ácido salicílico, reduce rápidamente las callosidades y asperezas en 1 semana.",
        descriptionLarga: "Conviértete en un experto en el cuidado de los pies en casa con este suero suavizante para pies. Gracias al ácido salicílico, reduce rápidamente las callosidades y asperezas en 1 semana.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42519%2F42519_1.png&MediaId=14571789&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42519%2F42519_2.png&MediaId=16166732&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f42519%2f42519_3.mp4&MediaId=20432658&Version=2#t=0.001"
         ],
        caracteristicas: [
            "Las callosidades y durezas se reducen al cabo de 1 semana",
            "Fórmula concentrada para resultados mejores y más rápidos",
            "El aspecto de la piel dura mejora tras la primera aplicación"
        ],
        badge: null

              }, 
        {
        id: 25,
        nombre: "Gel de Ducha y Shampoo North For Men Subzero",
        categoria: "descuento",
        precio: 179.90,
        precioOriginal: 270.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Conviértete en un experto en el cuidado de los pies en casa con este suero suavizante para pies. Gracias al ácido salicílico, reduce rápidamente las callosidades y asperezas en 1 semana.",
        descriptionLarga: "Conviértete en un experto en el cuidado de los pies en casa con este suero suavizante para pies. Gracias al ácido salicílico, reduce rápidamente las callosidades y asperezas en 1 semana.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46631%2F46631_1.png&MediaId=19264587&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46631%2F46631_2.png&MediaId=19264579&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46631%2F46631_3.png&MediaId=19264581&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46631%2F46631_4.png&MediaId=19264580&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46631%2F46631_5.png&MediaId=19264585&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
           
         ],
        caracteristicas: [
            "Las callosidades y durezas se reducen al cabo de 1 semana",
            "Fórmula concentrada para resultados mejores y más rápidos",
            "El aspecto de la piel dura mejora tras la primera aplicación"
        ],
        badge: null

              }, 
        {
        id: 26,
        nombre: "Jabón en Barra Milk & Honey Gold",
        categoria: "descuento",
        precio: 59.90,
        precioOriginal: 135.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Esta pastilla de jabón ultra cremosa está enriquecida con extractos orgánicos de leche y miel. Limpia sin resecar para dejar la piel suave, tersa y delicadamente perfumada.",
        descriptionLarga: "Esta pastilla de jabón ultra cremosa está enriquecida con extractos orgánicos de leche y miel. Limpia sin resecar para dejar la piel suave, tersa y delicadamente perfumada.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46971%2F46971_1.png&MediaId=19555076&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46971%2F46971_2.png&MediaId=19554927&Version=4&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46971%2F46971_3.png&MediaId=19554928&Version=4&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46971%2F46971_4.png&MediaId=19669447&Version=4&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46971%2F46971_5.png&MediaId=19554929&Version=7&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f46971%2f46971_8.mp4&MediaId=19998818&Version=5#t=0.001"
            
           
         ],
        caracteristicas: [
            "Las callosidades y durezas se reducen al cabo de 1 semana",
            "Fórmula concentrada para resultados mejores y más rápidos",
            "El aspecto de la piel dura mejora tras la primera aplicación"
        ],
        badge: null

               }, 
        {
        id: 27,
        nombre: "Spray Refrescante Antitranspirante Feet Up Everyday Tamaño JUMBO",
        categoria: "descuento",
        precio: 249.90,
        precioOriginal: 550.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Esta pastilla de jabón ultra cremosa está enriquecida con extractos orgánicos de leche y miel. Limpia sin resecar para dejar la piel suave, tersa y delicadamente perfumada.",
        descriptionLarga: "Dimensiones: Longitud 52mm, Altura 221mm, Profundidad 52mm, Peso 0.207gNombre completo del producto: Spray Refrescante Antitranspirante Feet Up Everyday Tamaño JUMBO",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46376%2F46376_1.png&MediaId=18479056&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46376%2F46376_5.png&MediaId=18479053&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46376%2F46376_4.png&MediaId=18479052&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46376%2F46376_3.png&MediaId=18479051&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
         
            
           
         ],
        caracteristicas: [
            "Dimensiones: Longitud 52mm, Altura 221mm, Profundidad 52mm, Peso 0.207g",
          
        ],
        badge: null

        }, 
        {
        id: 27,
        nombre: "Mascarilla Capilar Reparación Intensa",
        categoria: "descuento",
        precio: 219.90,
        precioOriginal: 310.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Esta pastilla de jabón ultra cremosa está enriquecida con extractos orgánicos de leche y miel. Limpia sin resecar para dejar la piel suave, tersa y delicadamente perfumada.",
        descriptionLarga: "Mascarilla de Rescate Reparación Intensa para mejorar al instante el estado del cabello seco y dañado. Los ingredientes de cuidado de la piel ayudan a fortalecer el cabello desde la raíz, para nutrirlo profundamente y rejuvenecerlo como parte de tu rutina semanal de cuidado del cabello.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44963%2F44963_1.png&MediaId=17121221&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44963%2F44963_2.png&MediaId=17121216&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44963%2F44963_3.png&MediaId=17862054&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44963%2F44963_5.png&MediaId=17121218&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f44963%2f44963_9.mp4&MediaId=17514158&Version=5#t=0.001"
       
            
           
         ],
        caracteristicas: [
            "Suaviza, protege y repara el cabello dañado, con proteínas de Queratina y Lípidos Nutritivos de Avena.",
            "Reduce el quiebre del cabello en un 86% tras 1 uso, evitando las puntas abiertas.",
            "Peina el cabello 8 veces más fácilmente, para desenredarlo sin esfuerzo."
        ],
        badge: null

         }, 
        {
        id: 28,
        nombre: "Crema Protectora para Manos y Uñas con Aceite de Macadamia Orgánico",
        categoria: "descuento,cuidado-piel",
        precio: 270.00,
        precioOriginal: 500.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Esta pastilla de jabón ultra cremosa está enriquecida con extractos orgánicos de leche y miel. Limpia sin resecar para dejar la piel suave, tersa y delicadamente perfumada.",
        descriptionLarga: "Esta crema para manos es altamente valorada por su capacidad para hidratar profundamente y dejar la piel suave sin sensación grasosa. Los usuarios destacan su rápida absorción y su aroma agradable, describiéndola también como una excelente opción para el cuidado de las uñas. Además, su relación entre calidad y precio es muy apreciada, convirtiéndola en una elección recurrente para muchos.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45425%2F45425_1.png&MediaId=17468145&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45425%2F45425_2.png&MediaId=17468144&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            
            
           
         ],
        caracteristicas: [
            "Dimensiones: Longitud 62mm, Altura 176mm, Profundidad 41mm, Peso 0.163g",
            "Nombre completo del producto: Crema Protectora para Manos y Uñas con Aceite de Macadamia Orgánico"
           
        ],
        badge: null

        }, 
        {
        id: 28,
        nombre: "Repuesto de Shampoo Reparación Intensa DUOLOGI",
        categoria: "descuento,cuidado-piel",
        precio: 460.00,
        precioOriginal: 800.00,
        rating: 4.9,
        reviews: 421,
        descripcion: "Esta pastilla de jabón ultra cremosa está enriquecida con extractos orgánicos de leche y miel. Limpia sin resecar para dejar la piel suave, tersa y delicadamente perfumada.",
        descriptionLarga: "Un recambio de shampoo hidratante para cabellos secos y dañados. Sus ingredientes hidratantes limpian suavemente y fortalecen el cabello desde la raíz, reparando los daños y reduciendo la roturra",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44957%2F44957_1.png&MediaId=17499680&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44957%2F44957_2.png&MediaId=17498718&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44957%2F44957_3.png&MediaId=17498719&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44957%2F44957_6.png&MediaId=17869727&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productVideo?externalMediaId=product-management-media%2fProducts%2f44957%2f44957_10.mp4&MediaId=17514157&Version=6#t=0.001"
            
            
           
         ],
        caracteristicas: [
            "77% menos plástico que dos envases de 250ml",
            "Alisa, protege y repara el cabello dañado con Proteínas de Queratina y Lípidos de Avena Nutritivos",
            "Repara los daños en la cutícula, alisando las fisuras"
           
        ],
        badge: null
        

        










