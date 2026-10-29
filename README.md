# C&S Fragrances

Catálogo web de perfumes: https://matiasschidiak.github.io/C-S-Fragrances/

## Cómo actualizar el catálogo

Todo se edita en **`js/productos.js`**, una línea por perfume:

```js
{ nombre: "Lattafa Yara", genero: "mujer", precio: 73000, disponible: true, imagen: "lattafa-yara.webp" },
```

- **Cambiar un precio:** modificá `precio` (sin puntos ni `$`).
- **Cambiar el stock:** `disponible: true` muestra «Disponible»; `false` muestra «Consultar stock».
- **Agregar un perfume:** copiá una línea, cambiá los datos y subí la foto a `img/productos/`.
  Conviene que la foto sea liviana (`.webp` o `.jpg`, menos de 100 KB).
- **Sacar un perfume:** borrá su línea.
- `genero` puede ser `"hombre"`, `"mujer"` o `"unisex"` (aparece en los dos).

El número de WhatsApp está al principio del mismo archivo (`WHATSAPP`), en formato
internacional sin `+` (549 + código de área + número).

Después de guardar, subí los cambios a GitHub y la página se actualiza sola en uno o
dos minutos.
