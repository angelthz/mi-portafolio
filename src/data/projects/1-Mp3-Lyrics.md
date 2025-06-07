---
title: 'MP3 Lyrics'
pubDate: 2025-04-03
description: 'Aplicacion para generar y sincronizar las letras de archivos de audio "mp3"'
author: '@angelthz'
imagen:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'El logotipo completo de Astro.'
icon:
    src: "../../assets/icons/lyrics.png"
    alt: 'Icono del ejercicio'
tags: ["typescript", "html", "css"]
slug : 'mp3-lyrics'
---

# MP3 Lyrics

Una herramienta web que te permite obtener y sincronizar las letras de canciones en formato ".mp3", asi mismo te 
ofrece la capacidad de editar las etiquetas de los ficheros manualmente.

<a class="squared-button" href="https://mp3-lyrics.vercel.app/" target="_blank">
    <div>
        <span>Live Preview</span>
        <i><svg width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right"><title>Open Deploy</title><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 7l-10 10" /><path d="M8 7l9 0l0 9" /></svg></i>
    </div>
</a>

![Mp3 Lyrics Web Screenshoot](./images/mp3/mp3-1.png)

Una de las caracteristicas mas conocidas de los ficheros de audio ".mp3" es la capacidad de almacenar los metadatos
o etiquetas con la información sobre dicho fichero de audio que despues pueden ser visualizados por el reproductor de 
audio que utilizemos. Su uso mas comun es para mostrar la informacion del artista relacionado a dicho fichero de audio.

![Mp3 snapshoot dos](./images/mp3/mp3-3.png)

## Problematica

A pesar de que muchos archivos ".mp3" contienen etiquetas con información relevante, no siempre incluyen las letras de las canciones o estas no están sincronizadas correctamente. Además, editar o agregar letras sincronizadas manualmente puede ser un proceso tedioso y poco intuitivo para usuarios sin conocimientos técnicos. Esto dificulta la experiencia de quienes desean visualizar las letras mientras escuchan música o mantener organizada su biblioteca de audio con metadatos completos y precisos.

![Mp3 snapshoot dos](./images/mp3/mp3-4.png)


## Solucion

La aplicación MP3 Lyrics resuelve estos problemas proporcionando una interfaz intuitiva para extraer, editar y sincronizar letras de canciones en archivos ".mp3". Permite:

- Cargar archivos de audio y visualizar sus metadatos existentes.
- Editar o agregar letras de manera manual o automática.
- Sincronizar las letras con la reproducción de la canción, facilitando la creación de archivos LRC.
- Exportar los archivos con las letras y metadatos actualizados para su uso en cualquier reproductor compatible.

De esta manera, los usuarios pueden mantener organizada su biblioteca musical y disfrutar de una experiencia enriquecida al escuchar sus canciones favoritas.