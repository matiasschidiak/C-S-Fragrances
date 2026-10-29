/* =====================================================
   CATÁLOGO
   -----------------------------------------------------
   Para cambiar un precio o el stock, editá la línea del
   perfume. Para agregar uno, copiá una línea y poné la
   foto en img/productos/.
   genero: "hombre", "mujer" o "unisex" (aparece en los dos)
   disponible: true = "Disponible", false = "Consultar stock"
   ===================================================== */

const WHATSAPP = "5492994154002";

const PRODUCTOS = [
    { nombre: "Afnan 9PM", genero: "hombre", precio: 71900, disponible: true, imagen: "9pm.webp" },
    { nombre: "Lattafa Khamrah", genero: "hombre", precio: 82900, disponible: false, imagen: "khamrah.webp" },
    { nombre: "Lattafa Asad", genero: "hombre", precio: 60900, disponible: true, imagen: "asad-lattafa.webp" },
    { nombre: "Lattafa Fakhar Black", genero: "hombre", precio: 72900, disponible: true, imagen: "lattafa-fakhar-black.webp" },
    { nombre: "Lattafa Bade'e Al Oud Oud for Glory", genero: "hombre", precio: 60900, disponible: true, imagen: "lattafa-bade-e-al-oud-oud-for-glory.webp" },
    { nombre: "Maison Alhambra Zaffiro Regale", genero: "hombre", precio: 59900, disponible: true, imagen: "maison-alhambra-zaffiro-regale.webp" },
    { nombre: "Maison Alhambra Salvo Elixir", genero: "hombre", precio: 59900, disponible: false, imagen: "maison-alhambra-salvo-elixir.webp" },
    { nombre: "Bharara King", genero: "hombre", precio: 109900, disponible: false, imagen: "bharara-king.webp" },
    { nombre: "Armaf Club de Nuit Intense", genero: "hombre", precio: 72900, disponible: false, imagen: "club-de-nuit-intense.webp" },
    { nombre: "Lattafa His Confession", genero: "hombre", precio: 72900, disponible: false, imagen: "lattafa-his-confession.webp" },
    { nombre: "Lattafa Ana Abiyedh Leather", genero: "unisex", precio: 61900, disponible: false, imagen: "lattafa-ana-abiyedh.webp" },
    { nombre: "Pandora Solitude for Man", genero: "hombre", precio: 71900, disponible: false, imagen: "pandora-solitude-for-man.webp" },
    { nombre: "Asten Selfish", genero: "hombre", precio: 73900, disponible: true, imagen: "asten-selfish.webp" },
    { nombre: "Al Haramain Amber Oud Gold", genero: "hombre", precio: 112900, disponible: false, imagen: "al-haramain-amber-oud-gold.webp" },
    { nombre: "Afnan 9PM Rebel", genero: "hombre", precio: 77900, disponible: true, imagen: "afnan-9pm-rebel.webp" },
    { nombre: "Afnan 9AM Dive", genero: "hombre", precio: 73900, disponible: true, imagen: "afnan-9am-dive.webp" },
    { nombre: "Kit Asad + Zanzibar", genero: "hombre", precio: 100900, disponible: true, imagen: "kit-asad-zanzibar.webp" },

    { nombre: "Lattafa Yara", genero: "mujer", precio: 73000, disponible: true, imagen: "lattafa-yara.webp" },
    { nombre: "Lattafa Yara Candy", genero: "mujer", precio: 59000, disponible: true, imagen: "lattafa-yara-candy.webp" },
    { nombre: "Maison Alhambra Vivacite Intense", genero: "mujer", precio: 62900, disponible: false, imagen: "maison-alhambra-vivacite-intense.webp" },
    { nombre: "Lattafa Ajwad", genero: "mujer", precio: 59900, disponible: true, imagen: "lattafa-ajwad.webp" },
    { nombre: "Yata Tous", genero: "mujer", precio: 62900, disponible: true, imagen: "yata-tous.webp" },
    { nombre: "Lattafa Her Confession", genero: "mujer", precio: 73900, disponible: false, imagen: "lattafa-her-confession.webp" },
    { nombre: "Lattafa Haya", genero: "mujer", precio: 64900, disponible: false, imagen: "lattafa-haya.webp" },
    { nombre: "Paris Corner Qissa Pink", genero: "mujer", precio: 71900, disponible: false, imagen: "paris-corner-qissa-pink.webp" },
    { nombre: "La Rouge Baroque Extreme", genero: "mujer", precio: 61900, disponible: false, imagen: "la-rouge-baroque-extreme.webp" },
    { nombre: "Lattafa Ana Abiyedh Coral", genero: "mujer", precio: 61900, disponible: false, imagen: "lattafa-ana-abiyedh-coral.webp" },
    { nombre: "Lattafa Bade'e Al Oud Noble Blush", genero: "mujer", precio: 64900, disponible: true, imagen: "lattafa-bade-e-al-oud-noble-blush.webp" },
    { nombre: "Paris Corner Taskeen Marina", genero: "mujer", precio: 69900, disponible: true, imagen: "paris-corner-taskeen-marina.webp" },
    { nombre: "Paris Corner Qissa Delicious", genero: "mujer", precio: 71900, disponible: false, imagen: "paris-corner-qissa-delicious.webp" },
    { nombre: "Paris Corner Marshmallow", genero: "mujer", precio: 101900, disponible: false, imagen: "paris-corner-marshmallow.webp" },
    { nombre: "Paris Corner Rose Petals", genero: "mujer", precio: 101900, disponible: false, imagen: "paris-corner-rose-petals.webp" },
    { nombre: "Paris Corner Ophidian Mango Bliss", genero: "mujer", precio: 101900, disponible: false, imagen: "paris-corner-ophidian-mango-bliss.webp" },
    { nombre: "Lattafa Fakhar Mujer", genero: "mujer", precio: 73900, disponible: true, imagen: "lattafa-fakhar-mujer.webp" },
    { nombre: "Lattafa Bade'e Al Oud Amethyst", genero: "mujer", precio: 73900, disponible: true, imagen: "badee-al-oud-amethyst.webp" },
    { nombre: "Afnan 9PM Pour Femme", genero: "mujer", precio: 73900, disponible: true, imagen: "afnan-9pm-pour.webp" },
    { nombre: "Lattafa Eclaire", genero: "mujer", precio: 73900, disponible: true, imagen: "lattafa-eclaire.webp" },
    { nombre: "Lattafa Fakhar Extrait", genero: "mujer", precio: 73900, disponible: true, imagen: "fakhar-extrait.webp" }
];
