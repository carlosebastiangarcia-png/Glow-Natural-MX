// =================== PRODUCTOS ===================
const products = [
  {
 id:1,
  nombre:"Bálsamo Multipropósito de Mango Tender Care", 
  categoria:"cuidado-piel,nuevos", 
  precio:140.90,
  precioOriginal:null,
  rating:4.7,
  reviews:244,
  descripcion:"Bálsamo hidratante multipropósito con aroma a mango.", 
  descriptionLarga:"Fórmula nutritiva para labios, cutículas y zonas secas. Compacto y fácil de llevar.",
  emoji:"🧴",
  imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47688%2F47688_1.png&MediaId=20924365&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47688%2F47688_2.png&MediaId=20924366&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
   caracteristicas:["Hidratación intensa","Uso en labios, manos y zonas secas"],
   badge:"nuevo" },


  { 
  id:2,
   nombre:"Crema Facial Iluminadora Antiedad Diamond Cellular", 
  categoria:"cuidado-piel,nuevos",
  precio:840.00, 
  precioOriginal:null,
  rating:4.7,
  reviews:225,
  descripcion:"Crema hidratante de larga duración con ingredientes naturales.",
  descriptionLarga:"Proporciona hidratación profunda y luminosidad sin residuos grasos.", 
  emoji:"🧴",
 imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47686%2F47686_1.png&MediaId=21013198&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"], 
  caracteristicas:["Hidratación 24h","Ingredientes naturales"], 
  badge:"nuevo" },

  {
 id:3,
  nombre:"Excite para él Eau de Toilette", 
  categoria:"hombres,nuevos", 
  precio:660.00,
  precioOriginal:null,
  rating:4.8,
  reviews:178,
  descripcion:"Fragancia masculina intensa y duradera.",
  descriptionLarga:"Notas de melón, té y musgo para un aroma fresco y sofisticado.", 
  emoji:"🧔",
  imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45890%2FMX%2F45890_1.png&MediaId=21541294&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"], 
  caracteristicas:["Aroma fresco","Ideal para noche"],
  badge:"nuevo" },

  { 
  id:4,
   nombre:"Aretes Diamor",
   categoria:"nuevos,joyeria", 
   precio:460.00,
   precioOriginal:null,
   rating:4.8,
   reviews:178,
   descripcion:"Aretes elegantes con diseño brillante.",
   descriptionLarga:"Accesorio perfecto para cualquier ocasión especial.",
   emoji:"💍",
   imagenes:[
  "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48561%2F48561_3.png&MediaId=21013218&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
   caracteristicas:[
    "Diseño moderno",
    "Acabado brillante"
    ], badge:"nuevo" },

  {
  id:5, 
  nombre:"Limpiadora Micelar Diamond Cellular", 
  categoria:"cuidado-piel,nuevos",
  precio:299.99,
  precioOriginal:null, 
  rating:4.5, 
  reviews:167,
  descripcion:"Limpiadora micelar con aceite de argán puro.", 
  descriptionLarga:"Limpia el rostro sin resecar y deja una sensación fresca.", 
  emoji:"🧴",
  imagenes:[
  "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48027%2F48027_4.png&MediaId=21013210&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
  caracteristicas:["Suave con la piel","Fórmula equilibrada"],
  badge:"nuevo" },

  { 
  id:6,
   nombre:"Polvos Compactos Ever Lasting THE ONE",
   categoria:"maquillaje",
   precio:480.00,
   precioOriginal:null, 
   rating:4.6,
   reviews:132,
   descripcion:"Polvos compactos con acabado natural.", 
   descriptionLarga:"Perfectos para retocar el maquillaje y controlar el brillo.",
   emoji:"💄", 
  imagenes:[
  "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F34647%2F34647_1.png&MediaId=14800970&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
 caracteristicas:["Acabado natural","Larga duración"],
  badge:"nuevo" },

  { 
  id:7,
   nombre:"Gel para Después del Afeitado North for Men", 
  categoria:"hombres", 
  precio:480.00, 
  precioOriginal:null,
  rating:4.4, 
  reviews:156,
  descripcion:"Gel calmante para después del afeitado.",
  descriptionLarga:"Hidrata la piel y reduce la irritación con una fragancia suave.", 
  emoji:"🧔",
 imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47271%2F47271_1.png&MediaId=20414642&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"], 
caracteristicas:["Calma la piel","Fórmula ligera"],
 badge:null },

  { 
  id:8,
   nombre:"Espuma Limpiadora 2-in-1 North for Men",
   categoria:"hombres",
   precio:480.00,
   precioOriginal:null,
   rating:4.5,
   reviews:89,
   descripcion:"Espuma limpiadora y de afeitado para piel masculina.",
   descriptionLarga:"Limpia profundamente y protege la piel antes del afeitado.", 
   emoji:"🧔", 
   imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47270%2F47270_1.png&MediaId=20414635&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
   caracteristicas:["Fórmula 2 en 1","Ideal para piel sensible"], 
   badge:null },

  { 
  id:9,
   nombre:"Jabón en Barra Ultimate Balance",
  categoria:"cuidado-piel,hombres",
  precio:59.90, 
  precioOriginal:null, 
  rating:4.9, 
  reviews:421, 
  descripcion:"Jabón en barra para piel limpia y suave.",
  descriptionLarga:"Limpia la piel profundamente mientras mantiene hidratación natural.",
  emoji:"🧴", 
  imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F43929%2F43929_1.png&MediaId=21561958&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
  caracteristicas:["Limpieza profunda","Suave con la piel"], 
  badge:null },

  { id:10,
   nombre:"Stick para Labios y Mejillas Waunt", 
    categoria:"maquillaje",
    precio:299.90, 
    precioOriginal:null,
    rating:4.9,
    reviews:421,
    descripcion:"Stick para labios y mejillas con textura jugosa.",
    descriptionLarga:"Una jugosa barra de gelatina para mejillas y labios. Se funde sin esfuerzo con un color de larga duración y un toque fresco de hidratación. Vegano y perfecto para el día a día.", 
    emoji:"💄", 
   imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_1.png&MediaId=21035451&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP","https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_3.png&MediaId=21035452&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP","https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47842%2F47842_4.png&MediaId=21035441&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
   caracteristicas:["Larga duración","Fórmula vegana"],
    badge:null },

  { id:11,
    nombre:"Godette Ferja - Paleta de sombras", 
    categoria:"maquillaje", 
    precio:1085.00, 
    precioOriginal:null,
    rating:4.9, 
    reviews:421,
    descripcion:"Paleta de sombras de lujo.", 
    descriptionLarga:"Paleta de sombras de alta pigmentación con colores versátiles para cualquier look.",
    emoji:"💄",
    imagenes:["https://ferja.mx/cdn/shop/files/GODETE_1.jpg?v=1770532046&width=720","https://ferja.mx/cdn/shop/files/GODETE_2.jpg?v=1770532046&width=720","https://ferja.mx/cdn/shop/files/GODETE_4.jpg?v=1770532046&width=720","https://ferja.mx/cdn/shop/files/GODETE_3.jpg?v=1770532046&width=720"], 
    caracteristicas:["Alta pigmentación","Colores versátiles"], 
    badge:null },

  { 
    id:12,
    nombre:"Suplemento con Magnesio, Vitamina B6 y Granada",
   categoria:"bienestar,descuento",
    precio:429.90,
     precioOriginal:567.00,
      rating:4.9,
       reviews:421, 
       descripcion:"Suplemento alimenticio con magnesio, vitamina B6 y extracto de granada.", 
       descriptionLarga:"Suplemento alimenticio premium con magnesio, vitamina B6 y extracto de granada para el bienestar diario.", 
       emoji:"💊", 
       imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_1.png&MediaId=20472842&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP","https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44221%2FMX%2F44221_2.png&MediaId=19717107&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
       caracteristicas:["Bienestar diario","Fórmula con magnesio"],
        badge:"descuento" },

  { id:13,
   nombre:"Pasta de Dientes con Aceites Naturales Optifresh",
    categoria:"descuento", 
    precio:99.90, 
    precioOriginal:150.00, 
    rating:4.9, 
    reviews:421, 
    descripcion:"Pasta de dientes con aceites naturales.", 
    descriptionLarga:"Refresca el aliento con aceites de hierbas naturales. Contiene tecnología Protect Shield.",
    emoji:"✨",
    imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_1.png&MediaId=20702735&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP","https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F49129%2F49129_2.png&MediaId=20702728&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"], 
    caracteristicas:["Refresca el aliento con aceites naturales","Favorece la salud de toda la boca"],
     badge:"descuento" },

  { id:14,
   nombre:"Eclat Femme Eau de Toilette",
    categoria:"descuento,perfumes",
     precio:479.90,
    precioOriginal:770.00, 
    rating:4.9,
    reviews:421, 
    descripcion:"Hermosa y radiante Eau de Toilette con el aroma de las mejores flores de Jazmín.",
    descriptionLarga:"Hermosa y radiante Eau de Toilette con el poderoso y a la vez delicado aroma de las mejores flores de Jazmín.",
    emoji:"🌸", 
   imagenes:[
   "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42507%2F42507_1.png&MediaId=14990562&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ],
    caracteristicas:["Aroma con una delicada belleza y potencia",
    "Corazón de flores de Jazmín radiante y noble"],
     badge:"descuento" },

  { id:15,
   nombre:"Spray Antitranspirante para Pies 48h Feet Up Expert",
    categoria:"descuento",
     precio:199.90, 
     precioOriginal:350.00,
      rating:4.9,
       reviews:421, 
      descripcion:"Control del olor 48H para pies.", 
      descriptionLarga:"Manténgase fresco y seco durante 48H. Diseñado para combatir el sudor y el olor mientras mantiene sus pies cómodos.", 
      emoji:"✨",
       imagenes:[
        "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46982%2F46982_1.png&MediaId=19976997&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
        "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46982%2F46982_2.png&MediaId=19977002&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"], 
       caracteristicas:
       [
      "Control del olor 48 horas",
      "Efecto de secado rápido"
    ], badge:"descuento" },

  { id:16,
   nombre:"Every Me Sweetheart Rose Eau de Toilette", 
   categoria:"descuento,perfumes", 
   precio:199.90, 
   precioOriginal:350.00, 
   rating:4.9, 
   reviews:421, 
   descripcion:"Fragancia floral delicada y romántica.",
    descriptionLarga:"Una fragancia floral delicada y romántica, perfecta para el día a día.",
     emoji:"🌸",
      imagenes:
      ["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_1.png&MediaId=19885244&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46793%2F46793_2.png&MediaId=19884928&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
       caracteristicas:
       ["Fragancia floral",
        "Ideal para uso diario"
      ],
        badge:"descuento" },


  { id:17, 
  nombre:"Sérum Nocturno para Cabello Bond Repair DUOLOGI",
   categoria:"descuento,cabello", 
   precio:390.00, 
   precioOriginal:350.00, 
   rating:4.9,
    reviews:421, 
    descripcion:"Tratamiento nocturno para cabello.",
     descriptionLarga:"Tratamiento capilar nocturno que penetra hasta el córtex capilar para nutrir y reparar. Cabello más fuerte, suave y brillante.",
      emoji:"✨",
     imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47262%2F47262_1.png&MediaId=20204711&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47262%2F47262_2.png&MediaId=20204712&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
       caracteristicas:["Reparación nocturna",
        "Cabello más fuerte y brillante"
      ], 
       badge:null },

  { id:18, 
  nombre:"Eclat Femme Weekend Riviera Eau de Toilette", 
  categoria:"descuento,perfumes", 
  precio:199.90,
   precioOriginal:350.00,
    rating:4.9,
     reviews:421, 
     descripcion:"Fragancia femenina fresca y veraniega.", 
     descriptionLarga:"Fragancia femenina inspirada en la Riviera francesa con notas frescas y florales.",
      emoji:"🌸", 
      imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46792%2F46792_2.png&MediaId=19936054&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ], 
    caracteristicas:
    ["Notas frescas y florales",
      "Inspirada en la Riviera francesa"
    ], 
    badge:"descuento" },

  { id:19, 
    nombre:"Eclat Homme Weekend Azur Eau de Toilette", 
    categoria:"descuento,perfumes", 
    precio:379.90, 
    precioOriginal:770.00, 
    rating:4.9,
     reviews:421,
      descripcion:"Fragancia masculina mediterránea.", 
      descriptionLarga:"Una refinada fragancia masculina que canaliza el vibrante litoral de la Costa Azul, con notas mediterráneas.", 
      emoji:"🌸", 
      imagenes:
      [
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_1.png&MediaId=19936105&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46795%2F46795_2.png&MediaId=19936100&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ], 
    caracteristicas:
    ["TOP: Pimienta rosa, jengibre, mandarina",
    "CORAZÓN: Acorde Côte d'Azur, Cedro, Higuera"
  ], badge:"descuento" 
},

  { id:20,
   nombre:"Crema Rica Antimanchas Even Out Optimals",
    categoria:"descuento,cuidado-piel",
     precio:229.90,
     precioOriginal:415.90,
      rating:4.9,
       reviews:421, 
       descripcion:"Crema hidratante rica que combate la hiperpigmentación.", 
       descriptionLarga:"Esta crema hidratante con extracto de algas arco iris, niacinamida y paraprobióticos, hidrata y combate la hiperpigmentación para una piel luminosa y radiante.",
        emoji:"🧴", 
        imagenes:
        [
          "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_1.png&MediaId=20200747&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
          "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45245%2F45245_2.png&MediaId=20200742&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ], 
        caracteristicas:
        ["Mejora la luminosidad de la piel",
          "Ideal para pieles secas"
        ],
         badge:"descuento" },

  { id:21,
   nombre:"Parches Faciales Hydra-Glow Optimals",
    categoria:"descuento,maquillaje,cuidado-piel",
     precio:99.90, 
     precioOriginal:180.00,
      rating:4.9,
       reviews:421,
       descripcion:"Parches de gel intensamente hidratantes.",
        descriptionLarga:"Parches de gel hidratantes con ácido hialurónico y niacinamida que rellenan, alisan y revitalizan al instante la piel cansada.",
         emoji:"💄",
         imagenes:
         [
          "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_1.png&MediaId=20200759&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
          "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47437%2F47437_2.png&MediaId=20200754&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
        ], 
        caracteristicas:
        [
        "Ilumina los ojos cansados",
        "Reduce la hinchazón y ojeras"
      ]
        , badge:"descuento" },


  
  { id:22,
   nombre:"Ampolletas de Péptidos Exprés Proceuticals NovAge+",
    categoria:"maquillaje,cuidado-piel",
     precio:99.90,
      precioOriginal:180.00, 
      rating:4.9,
       reviews:421,
        descripcion:"Ampolletas dosificadas con péptidos que potencian el colágeno.",
         descriptionLarga:"Ampolletas dosificadas con péptidos que potencian el colágeno. Eleva, reafirma y alisa la piel en un tratamiento intensivo de 7 días.", 
         emoji:"💄",
          imagenes:
          ["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_1.png&MediaId=20903778&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
            "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47105%2F47105_2.png&MediaId=20903771&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
          ],
           caracteristicas:
           [
            "Efecto lifting instantáneo",
            "El 89% notó la piel más tensa en 1 semana"
          ], 
          badge:null },

  { id:23, 
  nombre:"Jabón Líquido Amapola y Vainilla Essense & Co", 
  categoria:"descuento,cuidado-piel", 
  precio:240.00,
   precioOriginal:null, 
   rating:4.9, 
   reviews:421,
    descripcion:"Jabón líquido perfumado con Amapola y Vainilla.",
     descriptionLarga:"Repuesto ecológico con 76% menos plástico. Jabón líquido perfumado con Amapola radiante y Vainilla cálida.",
      emoji:"✨",
       imagenes:
       [
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F47450%2F47450_1.png&MediaId=20440350&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
     caracteristicas:
     [
    "76% menos plástico",
    "Perfumado con Amapola y Vainilla"
  ], 
  badge:null },

  { id:24,
   nombre:"Possess Eau de Parfum", 
   categoria:"descuento,perfumes",
    precio:689.90,
     precioOriginal:990.00, 
     rating:4.9, 
     reviews:421, 
     descripcion:"Eau de Parfum intenso y seductor.", 
     descriptionLarga:"Fragancia de alta concentración con una presencia intensa y seductora. Larga duración garantizada.",
      emoji:"✨", 
      imagenes:
      [
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42519%2F42519_1.png&MediaId=14571789&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F42519%2F42519_2.png&MediaId=16166732&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ], 
    caracteristicas:
    [
    "Alta concentración",
    "Larga duración"
  ],
     badge:"descuento" },

  { id:25,
   nombre:"Gel de Ducha y Shampoo North For Men Subzero",
    categoria:"descuento,hombres",
     precio:179.90, 
     precioOriginal:270.00,
      rating:4.9, 
      reviews:421, 
      descripcion:"Gel de ducha y shampoo 2 en 1 para hombre.",
       descriptionLarga:"Gel de ducha y shampoo 2 en 1 con efecto refrescante Subzero. Limpieza profunda y sensación revitalizante.", 
       emoji:"✨",
       imagenes:
       [
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46631%2F46631_1.png&MediaId=19264587&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46631%2F46631_2.png&MediaId=19264579&Version=1&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ],
     caracteristicas:
     [
    "Fórmula 2 en 1",
    "Efecto Subzero refrescante"
  ],
   badge:"descuento" },

  { id:26, 
  nombre:"Jabón en Barra Milk & Honey Gold",
   categoria:"descuento,cuidado-piel",
    precio:59.90, 
    precioOriginal:135.00, 
    rating:4.9,
     reviews:421, 
     descripcion:"Jabón ultra cremoso con leche y miel orgánica.", 
     descriptionLarga:"Esta pastilla de jabón ultra cremosa está enriquecida con extractos orgánicos de leche y miel. Limpia sin resecar.", 
     emoji:"✨",
     imagenes:
     [
     "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46971%2F46971_1.png&MediaId=19555076&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
     "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46971%2F46971_2.png&MediaId=19554927&Version=4&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ], 
    caracteristicas:
    [
      "Ultra cremoso",
      "Enriquecido con leche y miel"
    ], badge:"descuento" },

  { id:27,
   nombre:"Spray Refrescante Antitranspirante Feet Up Jumbo",
    categoria:"descuento,cuidado-piel",
     precio:249.90,
      precioOriginal:550.00,
       rating:4.9,
        reviews:421,
         descripcion:"Spray para pies tamaño JUMBO.", 
         descriptionLarga:"Spray refrescante antitranspirante para pies en tamaño jumbo. Mayor duración y eficacia."
         , emoji:"✨",
          imagenes:["https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F46376%2F46376_1.png&MediaId=18479056&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
           caracteristicas:
           [
            "Tamaño JUMBO",
            "Larga duración"
          ],
           badge:"descuento" },

  { id:28,
   nombre:"Mascarilla Capilar Reparación Intensa", 
   categoria:"descuento,cabello",
    precio:219.90, 
    precioOriginal:310.00,
     rating:4.9,
      reviews:421, 
      descripcion:"Mascarilla de reparación intensa para cabello seco y dañado.",
     descriptionLarga:"Mascarilla de Rescate Reparación Intensa para el cabello seco y dañado. Fortalece el cabello desde la raíz con proteínas de Queratina y Lípidos de Avena."
     , emoji:"✨",
      imagenes:
      [
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44963%2F44963_1.png&MediaId=17121221&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44963%2F44963_2.png&MediaId=17121216&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ],
   caracteristicas:
   [
    "Reduce el quiebre en un 86%",
    "Peina 8 veces más fácilmente"
 ], 
 badge:"descuento" },



  { id:29,
   nombre:"Crema Protectora Manos y Uñas con Macadamia Orgánico", 
   categoria:"descuento,cuidado-piel",
    precio:270.00,
     precioOriginal:500.00, 
     rating:4.9,
      reviews:421, 
      descripcion:"Crema para manos con aceite de macadamia orgánico.", 
      descriptionLarga:"Crema altamente hidratante que deja la piel suave sin sensación grasosa. Rápida absorción y aroma agradable.",
       emoji:"🧴",
        imagenes:
        [
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F45425%2F45425_1.png&MediaId=17468145&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"],
       caracteristicas:
       ["Hidratación rápida",
        "Sin sensación grasosa"
      ], 
      badge:"descuento" },

  { id:30,
   nombre:"Repuesto de Shampoo Reparación Intensa DUOLOGI",
   categoria:"descuento,cabello", 
   precio:460.00, 
   precioOriginal:800.00,
    rating:4.9,
     reviews:421, 
     descripcion:"Recambio de shampoo hidratante para cabellos secos y dañados.", 
     descriptionLarga:"Un recambio de shampoo hidratante para cabellos secos y dañados. Sus ingredientes limpian suavemente y fortalecen el cabello, reparando los daños.",
      emoji:"✨",
       imagenes:
       [
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44957%2F44957_1.png&MediaId=17499680&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
      "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F44957%2F44957_2.png&MediaId=17498718&Version=5&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ],
     caracteristicas:
     [
    "77% menos plástico",
    "Repara los daños en la cutícula"
  ], 
  badge:"descuento" },

  { id:31,
   nombre:"Gel para Cejas AXIIS Crystal",
    categoria:"maquillaje", 
    precio:319.00,
     precioOriginal:null,
      rating:4.6, 
      reviews:189, 
      descripcion:"Gel transparente para fijar y definir cejas.",
     descriptionLarga:"Mantiene las cejas en su lugar con acabado natural.", 
     emoji:"💄", 
     imagenes:
     [
      "https://ferja.mx/cdn/shop/files/PRODUCTO_GEL2000x2000_SHP_1.jpg?v=1781467859&width=720"
     ],
      caracteristicas:
      [
      "Fijación duradera",
      "Acabado natural"],
       badge:null
       },

  { id:32,
   nombre:"Máscara para Pestañas Giordani Gold Iconic Golden", 
   categoria:"descuento,maquillaje",
    precio:370.00, 
    precioOriginal:null,
    rating:4.9,
    reviews:421, 
    descripcion:"Celebrando 50 años de excelencia en belleza, esta máscara de pestañas de edición limitada está diseñada para proporcionar volumen, longitud, rizo y una definición impactante, a la vez que está impregnada de aceites y vitaminas fortalecedores y nutritivos.",
    descriptionLarga:"Celebrando 50 años de excelencia en belleza, esta máscara de pestañas de edición limitada está diseñada para proporcionar volumen, longitud, rizo y una definición impactante, a la vez que está impregnada de aceites y vitaminas fortalecedores y nutritivos."
    ,emoji:"✨",
    imagenes:
    [
    "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48645%2F48645_1.png&MediaId=20696989&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
    "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48645%2F48645_2.png&MediaId=20696981&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
    "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48645%2F48645_3.png&MediaId=20696982&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
    "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48645%2F48645_4.png&MediaId=20696983&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
    "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48645%2F48645_5.png&MediaId=20696984&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
    "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48645%2F48645_6.png&MediaId=20696985&Version=3&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP",
    "https://media-cdn.oriflame.com/productImage?externalMediaId=product-management-media%2FProducts%2F48645%2F48645_7.png&MediaId=20696986&Version=2&w=1000&bc=%23f5f5f5&ib=%23f5f5f5&q=90&imageFormat=WebP"
    ],
   caracteristicas:
   [
    "Diseñado para un volumen, longitud, rizo y definición excepcionales.",
    "Sus cuidadosos ingredientes ayudan a fortalecer las pestañas en cada pasada.",
    "Proporciona 16 horas de larga duración sin manchas, grumos ni escamas."
 ], 
 badge: "descuentos",
 },

        










