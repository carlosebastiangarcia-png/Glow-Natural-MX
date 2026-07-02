const products = [
    {
        id: 1,
        nombre: "Bálsamo Multipropósito de Mango Tender Care",
        categoria: "cuidado-piel,nuevos",
        precio: 140.90,
        precioOriginal: null,
        rating: 4.7,
        reviews: 244,
        descripcion: "Bálsamo hidratante multipropósito con aroma a mango.",
        descriptionLarga: "Fórmula nutritiva para labios, cutículas y zonas secas. Compacto y fácil de llevar.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47688%2F47688_1.png&MediaId=20924365&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47688%2F47688_2.png&MediaId=20924366&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Hidratación intensa",
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
        descripcion: "Crema hidratante de larga duración con ingredientes naturales.",
        descriptionLarga: "Proporciona hidratación profunda y luminosidad sin residuos grasos.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47686%2F47686_1.png&MediaId=21013198&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Hidratación 24h",
            "Ingredientes naturales"
        ],
        badge: "nuevo"
    },
    {
        id: 3,
        nombre: "Excite para Él Eau de Toilette",
        categoria: "hombres,nuevos",
        precio: 660.00,
        precioOriginal: null,
        rating: 4.8,
        reviews: 178,
        descripcion: "Fragancia masculina intensa y duradera.",
        descriptionLarga: "Notas de melón, té y musgo para un aroma fresco y sofisticado.",
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
        descripcion: "Aretes elegantes con diseño brillante.",
        descriptionLarga: "Accesorio perfecto para cualquier ocasión especial.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48561%2F48561_3.png&MediaId=21013218&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Diseño moderno",
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
        descripcion: "Limpiadora micelar con aceite de argán puro.",
        descriptionLarga: "Limpia el rostro sin resecar y deja una sensación fresca.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48027%2F48027_4.png&MediaId=21013210&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Suave con la piel",
            "Fórmula equilibrada"
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
            "Larga duración"
        ],
        badge: "nuevo"
    },
    {
        id: 7,
        nombre: "Gel para Después del Afeitado North for Men",
        categoria: "hombres",
        precio: 480.00,
        precioOriginal: null,
        rating: 4.4,
        reviews: 156,
        descripcion: "Gel calmante para después del afeitado.",
        descriptionLarga: "Hidrata la piel y reduce la irritación con una fragancia suave.",
        emoji: "??",
        imagenes: [
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47271%2F47271_1.png&MediaId=20414642&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ],
        caracteristicas: [
            "Calma la piel",
            "Fórmula ligera"
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
            "Fórmula 2 en 1",
            "Ideal para piel sensible"
        ],
        badge: null
    },
    {
        id: 9,
        nombre: "Jabón en Barra Ultimate Balance",
        categoria: "cuidado-piel,hombres",
        precio: 59.90,
        precioOriginal: null,
        rating: 4.9,
        reviews: 421,
        descripcion: "Jabón en barra para piel limpia y suave.",
        descriptionLarga: "Limpia la piel profundamente mientras mantiene hidratación natural.",
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
        nombre: "Gel para Cejas AXIIS Crystal",
        categoria: "maquillaje",
        precio: 319.00,
        precioOriginal: null,
        rating: 4.6,
        reviews: 189,
        descripcion: "Gel transparente para fijar y definir cejas.",
        descriptionLarga: "Mantiene las cejas en su lugar con acabado natural.",
        emoji: "???",
        imagenes: [
            "https://ferja.mx/cdn/shop/files/PRODUCTO_GEL2000x2000_SHP_1.jpg?v=1781467859&width=720"
        ],
        caracteristicas: [
            "Fijación duradera",
            "Acabado natural"
        ],
        badge: null
    }
];
