--- 
layout: '../../layouts/LayoutNotes.astro'
title: '1. Fundamentos de CSS'
pubDate: 2025-04-03
description: 'Aplicacion para generar y sincronizar las letras de archivos de audio "mp3"'
author: '@angelthz'
tags: ["typescript", "html", "css"]
slug : 'fundamentos-de-css'
category: "css"
---

# Fundamentos de CSS

## 1. Reglas CSS
Una regla consta de dos partes:

1. Selector: Es el elemento html al que le podemos aplicar estilos css.

2. Bloque de declaraciones: atributos a modificar. 

``` css
//sintaxis

selector {
    //css rules
    rule-name : value;
}
```

Ejemplo de regla:

```css
/*ejemplo de regla css sencilla*/
h1 {
    color: orange;
        background-color: skyblue;
}
```

### Formas de invocación CSS

#### Estilos en line (inline)

Estos se aplican dentro de las etiquetas html con el atributo (style).

``` html
<p style="background-color:red">Hola mundo.</p>
```

#### Estilos internos

Se declaran con la etiqueta (style) y por lo general se hace en el head del documento html.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos CSS</title>
    <style>
        h1{
            background-color:red;
        }
        p{
            font-family: JetBrains Mono;
        }
    <style>
</head>
    <body>
    </body>
</html>
```

#### Hojas CSS

Son archivos externos al documento html los cuales contienen todos los estilos a aplicar en un documento html. Se añaden al documento mediante la etiqueta: 
`<link reel="stylesheet" href="styles.css">`

#### Importar hojas CSS dentro de otra

Podemos importar hojas de estilos dentro de una hoja es estilos. Para esto usamos la funcion `url()` de CSS, esta funcion nos permite importar recursos de manera externa mediante la "url" o el "path" del recurso.

**Ejemplo:**

```css
url("./styles/reset.css");

/* css code*/

```

El ejemplo anterior importa la hoja de estilos "reset.css" a nuestra hoja de estilos actual.


## 2. Selectores

### Básicos

#### De Etiquetas o elementos HTML

Nos permite seleccionar elementos html de manera directa mediante el nombre de las etiquetas html. Al usar estos selectores, los estilos se aplica a todos los elementos del mismo tipo.

**Ejemplo:**

```
<p>Hola Mundo</p>
<p>Hello World</p>
```

```
p{
    background-color: red;
    font-size:2rem;
}
```

#### Identificadores (ID's)

Selección mediante el atributo id de los elementos html. Solo se aplica al elemento html que coincide con el valor del atributo id.

>Selector: #

#### Clases

Por medio de clases agregadas a los elementos html mediante el atributo class. Permiten reutilizar codigo CSS, y aplicar los mismos estilos a un conjunto de elementos html asi mismo un elemento puede tener varias clases declaradas en su atributo class.

>Selector: Es el punto .

Para nombrar clases se recomienda que se nombren de acuerdo a lo que hacen las clases.

#### Agrupación de selectores

Como agrupar los elementos css, para agrupar estilos CSS podemos hacerlo declarándolos y separándolos mediante comas.

**Ejemplo:**

```css
h1, h2, p, pre{
    font-family: Jetbrains Mono;
}
```

Cambia el tipo de fuente a los elementos h1,h2,p y pre.

 

### Selectores avanzados

#### Selectores de Hijos

Los selectores de hijos van a aplicar los estilos a los descendientes directos del padre.

#### Hijos directos

Se considera un hijo directo cuando una etiqueta html es descendiente de otra con la cual conviven por ejemplo una lista. En este caso el padre seria la etiqueta "ul o ol" y los hijos directos serian las etiquetas "li".

Con este selector podremos aplicar estilos a todos los elementos descendientes de una etiqueta html.

Para escribir un selector de este tipo usamos:

> ".nombre de la clase padre" + ">" + "nombre del elemento html hijo"

>**Nota:** en el selector del padre podemos utilizar el nombre de la clase, id, del elemento, etc.

**Ejemplo**
Usando directamente los nombres de los elementos html.
``` html
<ul>
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
</ul>
```

```css
ul>li{
    background-color: cadetblue;
}
```

**Usando una clase**
Podemos usar una clase y seleccionar al elemento hijo mediante el nombre de su etiqueta html.

``` html
<ul class="estaciones" >
        <li>Primavera</li>
        <li>Verano</li>
        <li>Otoño</li>
        <li>Invierno</li>
</ul>
```

```css
estaciones>li{
    background-color: cadetblue;
}
```

Aplicaría el cambio de color de fondo de todos los elementos li ya que son hijos directos de la etiqueta ul.
#### Selector de Hijo Descendiente

Este selector consiste en anteponer un espacio en blanco entre el elemento padre y el elemento hijo, va aplicar los estilos al primer elemento html que coincida con el elemento hijo sin importar si se encuentra un elemento antes de este.

```html
<ul class="padre">
    <li class="hijo"> <strong>Primavera</strong> </li>
    <li class="hijo"> <strong>Verano</strong> </li>
    <li class="hijo"> <strong>Otoño</strong> </li>
    <li class="hijo"> <strong>Invierno</strong> </li>
</ol>
```

> ul > padre
> li > hijo directo
> strong > hijo descendiente

```css
//mediante la clase
padre strong{
    background-color: coral;
}
//mediante el elemento html
ul strong{
    background-color: coral;
}
```

 
#### Selectores de Hermanos

Son electores de elementos que están en el mismo nivel del elemento de referencia. Y que **solo permiten aplicar los estilos a los elementos que se encuentra por debajo de la clase o elemento de referencia.**

#### Selector de hermanos (en general)

Aplica los estilos a todos los hermanos en general (elementos que sean del mismo tipo) y que se encuentren por debajo del elemento de referencia.

>💡 El símbolo de este selector es: "~" (teclas: “altGr” y “+”)

Su sintaxis es:

>💡 “. nombre-de-la-clase/elemento” + “~” + “nombre del elemento hermano”


Ejemplo

```css
<ul>
    <li><b>Primavera</b></li>
    <li class="hermanos-general"><b>Verano</b></li>
    <li><b>Otoño</b></li>
    <li><b>Invierno</b></li>
</ul>

/**/
.hermanos-general ~ li{
    background-color: coral;
}
```

El ejemplo anterior solo aplicaría el color de fondo a los elementos otoño e invierno puesto que son todos los hermanos en general del elemento verano el cual tiene la clase “hermanos-general”.

#### **Selector de hermanos adyacentes**

Solo aplica al primer elemento o al elemento inmediato que esta debajo del elemento de referencia.

>💡 El símbolo de este selector es: +

Su sintaxis:

>💡 “.nombre de la clase/elemento de referencia” + “+” + “nombre-del-elemento-hermano”


```css
<ul>
    <li><b>Primavera</b></li>
    <li class="hermanos-adyacentes"><b>Verano</b></li>
    <li><b>Otoño</b></li>
    <li><b>Invierno</b></li>
</ul>

/**/
.hermanos-adyacentes ~ li{
    background-color: coral;
}
```

El ejemplo anterior solo aplicaría color de fondo al elemento otoño puesto que es el primer elemento hermano del elemento con la clase “hermanos-adyacentes”.

### Selectores de atributos

Son aquellos selectores que hacen uso de los atributos de los elementos html para poder aplicarles los estilos, tambien podemos hacer uso de los valores de los atributos para aplicar los estilos.

#### **Selector de atributo**

Este es el selector general para poder aplicar estilos a los elementos html que tengan el atributo indicado entre **[ ]**.

**Ejemplo:**

```css
<ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#contacto">Contacto</a></li>
</ul>

//aplica los estilos al elemento html con el atributo href
.selectores-atributos a[href]{
    color: green;
}
```

#### Selector de valor de atributo

Aplica los estilos a los elementos html que tengan el mismo atributo y el valor especificado entre [].

**Ejemplo:**

```css
<ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#contacto">Contacto</a></li>
</ul>

/*
    Aplica los estilos al elemento html con el atributo href y el valor 
    "inicio"
*/
.selectores-atributos a[href = "inicio"]{
    color: green;
}
```

#### Selector de valor en cualquier posicion

Aplica los estilos a los elementos html que tengan el mismo atributo y que su valor se encuentre en cualquier posición.

>**Comodín:** *

```css
<ul>
    <li><a href="https://www.google.com">Ir a Google</a></li>
    <li><a href="https://www.youtube.com">Youtube</a></li>
</ul>

/*
    Aplica los estilos al elemento html con el atributo href y el valor 
    se encuentre en cualquier posicion dentro del valor del atributo
*/
.selectores-atributos a[href *= "tube"]{
    color: green;
}
```

#### Selector de atributo al inicio

Aplica los estilos a los elementos html que tengan el mismo atributo y que el valor a buscar se ecuentre al inicio de la cadena.

>**Comodín:** *^*

**Ejemplo**:
```css
<ul>
    <li><a href="https://www.google.com">Ir a Google</a></li>
    <li><a href=#inicio>Inicio</a></li>
</ul>

/*
    Aplica los estilos al elemento html con el atributo href y el valor 
    del atributo a buscar se encuentre al inicio.
*/
.selectores-atributos a[href ^= "https://"]{
    color: green;
}
```

#### Selector de atributo al final
Aplica los estilos a los elementos html que tengan el mismo atributo y que el valor a buscar se ecuentre al final de la cadena.

>**Comodín:** *$*

**Ejemplo**:
```css
<ul>
    <li><a href="https://www.google.com">Ir a Google</a></li>
    <li><a href=#inicio>Inicio</a></li>
</ul>

/*
    Aplica los estilos al elemento html con el atributo href y el valor 
    del atributo a buscar se encuentre al inicio.
*/
.selectores-atributos a[href $= "com"]{
    color: green;
}
```

#### Selector de atributos separados por espacios

Aplica los estilos a los elementos html que tengan el mismo atributo y que el valor a buscar se encuentre separado por espacios dentro de una lista de valores de atributos.

>**Comodín:** *~*

**Ejemplo**:
```css
<ul>
    <li><a class=externos url salida" href="https://www.google.com">Ir a Google</a></li>
    <li><a href=#inicio>Inicio</a></li>
</ul>

/*
    Aplica los estilos al elemento html con el atributo href y el valor 
    del atributo a buscar se encuentre al inicio.
*/
.selectores-atributos a[class ~= "url"]{
    color: green;
}
```


#### Selectores de atributos con guion

Aplica los estilos a los elementos html que tengan el mismo atributo y que el valor a buscar contenga un guion.

>**Comodín:** *|*

**Ejemplo**:
```css
<ul>
    <li><a class=externos url salida" href="https://www.google.com">Ir a Google</a></li>
    <li><a class="pagina-inicio" href=#inicio>Inicio</a></li>
</ul>

/*
    Aplica los estilos al elemento html con el atributo href y el valor 
    del atributo a buscar se encuentre al inicio.
*/
.selectores-atributos a[class |= "inicio"]{
    color: green;
}
```

 
### Selector Universal

El selector universal **"\*\"** tiene la capacidad de aplicar estilos a todos los elementos html. Si se conbina con alguna etiqueta u otro selector va aplicar los estilos a todos los elementos html dentro de dicha etiqueta.

**Sintaxis para todo el documento html**
```css
* {
    //css code
}
```

**Sintaxis para elementos html**

``` html>
<section class="saludos" >
    <article>
        <h3>Inglés</h3>
        <p> Hello world.</p>
    </article>
    <article>
        <h3>Español</h3>
        <p> Hola mundo.</p>
    </article>
    <article>
        <h3>Aleman</h3>
        <p> Hallo welt.</p>
    </article>
</section>
```

```css
/* 
    Aplicaria los estilos a todos los elementos dentro del elemento
    html section que tiene la clase saludos
*/
saludos *{
    //css code
}
```

 
### Pseudoclases

[Pseudo-classes - CSS | MDN](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes)

Dan estilos dependiendo del estado, posición  o estado del elemento. Se caracterizan por llevar un par de puntos (:) al declararlos.

#### De estado

Este tipo de pseudoclases hacen referencia al estado que pueden tener los elementos HTML, entre estas podemos tener las siguientes:

- **:required**
- **:valid**
- **:invalid**
- **:focus**
- **:disabled**
- **:visited**
- **:hover**
- **:target**

#### De posición

Corresponden a la posición  que ocupa un elemento respecto a su elemento padre o contenedor.

##### :first-child

Aplica los estilos al primer elemento hijo de que se encuentre dentro de un contenedor.

##### :last-child

Aplica el estilo al ultimo hijo de un elemento html que se encuentre dentro de un contenedor.

##### :nth-child(child-position)

Aplica el estilo al elemento especificado entre parentesis, este puede ser un numero que indica la posicion o comodines que indique algun patron en especifico com valores pares, impares, etc.

##### element : first-of-type 

Aplica los estilos al primero elemento de tipo un tipo especificado y que se encuentre dentro de un contenedor.

##### element : last-of-type

Aplica los estilos al ultimo elemento especificado  que se encuentre dentro de un contendor.

##### element : nth-of-type(element position)

Aplica estilos al elemento del tipo especificado que se encuentre en una posicion especificada dentro de los parentesis de este selector.

##### Negar un estilo a un elmento: not(element)

Aplica los estilos excepto al que se indica en los paréntesis.

 

### Pseudoelementos

Se caracterizan por llevar un par de puntos (::) al declararlos. Y porque dentro de las reglas CSS declaradas para su uso, esta la regla "content:" la cual es obligatoria usar para añadir el contenido que deseemos agregar al elemento html a parte de los estilos css. Ademas dependiendo del tipo de pseudoelemento nos permitira agregar contenido antes o despues del elemento html seleccionado.

::before

Aplica los estilos al elemento seleccionado y el contenido lo agrega antes del mismo elemento.

**Ejemplo:**

```html
<section class="saludos" >
    <article>
        <h3>Inglés</h3>
        <p> Hello <span class="tierra">world.</span></p>
    </article>
</section>
```

```css
saludos span[class="tierra"]::before{
    content : "👋",
    //css code
}

```

::after

Aplica los estilos al elemento seleccionado y el contenido lo agrega despues del mismo elemento.

**Ejemplo:**

```html
<section class="saludos" >
    <article>
        <h3>Inglés</h3>
        <p> Hello <span class="tierra">world.</span></p>
    </article>
</section>
```

```css
saludos span[class="tierra"]::after{
    content : "🌐",
    //css code
}
```

::first-letter

Aplica los estilos solo al primer caracter del contenido del elemento html seleccionado.

**Ejemplo:**

```html
<section class="saludos" >
    <article>
        <h3>Inglés</h3>
        <p class="comentario"> Hello <span class="tierra">world.</span></p>
    </article>
</section>
```

```css
saludos span[class="comentario"]::first-letter{
    //css code
    font-size: 2rem;
    font-weight: 800;
}
```

::first-line

Aplica los estilos solamente al contenido dentro de la primer linea del elemento html. Si seleccionaramos un parrafo con multiples lineas de text, los estilos solo aplicarian a la primera linea de texto.

**Ejemplo:**

```html
<section class="saludos" >
    <article>
        <h3>Inglés</h3>
        <p class="coment" >Hello world an explanation of first-line pseudoelement of ccs.</p>
    </article>
</section>
```

```css
saludos span[class="coment"]::first-line{
    //css code
    font-size: 1rem;
    color:red;
}
```

::selection

Aplica estilos a la seleccion de texto por parte del usuario. Si lo lo aplicamos a un selector especifico actuara sobre dicho elemento pero mediante el selector universal podemos hacer que se aplique a todo el documento html.
```css
*::selection{
    //css code
}
```

::placeholder

Aplica estilos a los elementos de tipo input con la propiedad placeholder.

## 3. Algoritmo de CSS


CSS aplica los estilos por medio de un algoritmo en el cual toma como referencia ciertas reglas establecidas. Estas son la cascada y la espcifidad.
### Cascada

Los primeros estilos que aplica css a un documento html estan definidos por el comportamiento de cascada el cual sigue un orden especifico:

1. Primero aplica los estilos que el navegador aplica a los elementos html por defecto.
2. Segundo: aplica los estilos que en los cuales el usuario puede estar involucrado como el tema claro/oscuro o debido a acciones que realiza el mismo.
3. Tercero y ultimo: aplica los estilos definidos por el desarrollador, es decir, los estilos que el desarrollador aplica a los elementos html.

Y se aplican de arriba hacia abajo (up to down).
### Especificidad

**Especificidad**: La especificidad tiene que ver con el modo en que CSS determina como aplicar los estilos dependiendo del selector especificado, por lo que dependiendo del selector implementado los estilos podrán aplicarse o no ya que unos tienen mayor peso que otros por lo que css al final va aplicar los estilos con mayor peso. A continuación mostramos el peso de los elementos, es decir, quien tiene mayor prioridad al momento de que css elige que estilos aplicar.

- !important, es un atributo que se especifica en el valor de una regla css para especificar que dicha regla va a tener la prioridad mas alta sobre otras. En una escala nuemrica estos tienen el valor mas alto por lo que ningun otro tipo de especifidad esta encima de esta.
- Estilos inline: los estilos inline son los de segundo mayor peso. En una escala numerica estos se representan por medio de millares (1000) son los estilos que aplicamos direcamente a los elementos html mediante el atributo "style".
- Estilos de ID: los selectores definidos por medio de ID tiene mayor peso que los de clase y elemento, En una escala numerica estos se representan por medio de centenas (100)
- Estilos de Clase: Son los estilos definidos por medio de selectores de clases, en una escala numérica estos se representan por medio de decenas (10).
- Estilos de elemento/pseudoelementos: Son los estilos definidos por medio de selectores de elemento html y por ende los de menor peso, en una escala numérica estos representa unidades.

| Selector                   | Valor | Posicion |
|:        -- |  -- |   -- |
| Etiquetas y Pseudolementos | 1     | 0,0,0,1  |
| Clases y Pseudoelementos   | 10    | 0,0,1,0  |
| ID's                       | 100   | 0,1,0,0  |
| Estilos Inline             |       |          |
| !important                 |       | 1,0,0,0  |


La combinación de diferentes tipos de selectores de acuerdo a su especificad da como resultado que tengan mayor o menor peso de acuerdo a la combinación por ejemplo:

> Un selector de clase va a ser menor que un selector de clase y uno de elemento porque su peso total seria: selector de clase (1,0) mientras que el selector de clase y elemento seria (1,1).

### Herencia

Herencia: Son los estilos que se pueden heredar de un elemento padre a un elemento hijo por medio del valor inherit.

```
.test {
    background-color: inherit;
}
```

Hay que tomar en cuenta que no todos los elementos html pueden heredar sus estilos CSS.

## 4. Reseteo de estilos

## 5. Prefijos de navegadores

## 6. Modelo de caja

CSS define un modelo el cual determina que todo elemento en CSS tiene una caja alrededor, comprender estas cajas es la clave para poder crear diseños con CSS o para alinear elementos  con otros elementos.

Una caja en es cualquier elemento html que sea renderizado en el navegador.

### Cajas en bloque (block) y en linea (inline)

En CSS hay dos tipos de cajas: en bloque y en linea, estas se refieren al modo en que se comporta la caja en terminos de flujo y relacion con otras cajas.

### **Cajas de bloque**

- La caja fuerza un salto de línea al llegar al final de la línea.
- La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.
- Se respetan las propiedades `[width](https://developer.mozilla.org/es/docs/Web/CSS/width)` y `[height](https://developer.mozilla.org/es/docs/Web/CSS/height)`.
- El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.

Elementos como ``<h1>`` y ``<p>`` son elementos de bloque por defecto.

### **Cajas en linea**

- La caja no fuerza ningún salto de línea al llegar al final de la línea.
- Las propiedades `[width](https://developer.mozilla.org/es/docs/Web/CSS/width)` y `[height](https://developer.mozilla.org/es/docs/Web/CSS/height)` no se aplican.
- No tiene efecto sobre ellos las propiedades margin y padding verticales.
- Solo tiene efecto sobre ellos las propiedades margin y padding horizontales.
- Solo ocupan el espacio de su contenido.

Elementos como ``<a>, <span>, <em>, <strong>, <audio>, <video>``, entre otras son elementos en linea por defecto.

Podemos modificar el tipo de caja con la propiedad **display**, la cual permite definir el valor block para que un elemento se comporte como bloque o inline para que un elemento se comporte como en linea.

### Tipos de visualización: Interna y Externa

La visualización externa se refiere al comportamiento que tiene la caja al exterior, es decir, si se comporta de manera inline o block.

Mientras que la visualizacion interna se refiere al hecho de que todas las cajas tienen una visualización interna que determina como se disponen los elementos dentro de ella ya sean mas elementos html o texto. Los elementos dentro de una caja se presentan en **[flujo normal](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout/Normal_Flow)**
, lo que significa que se comportan como otros elementos de tipo en bloque o en línea (como se explicó anteriormente).

Podemos cambiar el tipo de visualizacion interna cambiando los valores de la propiedad display. Si en un elemento establecemos `display: flex;` , el tipo de visualización externa es de tipo bloque (`block`), pero el tipo de visualización interna cambia a flexible (`flex`). Cualquier elemento que sea hijo directo de esta caja pasará a comportarse como un elemento de tipo flex.

La disposición en bloque y en línea es la forma predeterminada cómo se comportan las cosas en la web, es decir, el comportamiento por defecto de los elementos html se comportan en bloque o en linea mientras el desarrollador no cambie su comportamiento manualmente.

### ¿Qué es el modelo de cajas de CSS?

El modelo define cómo funcionan juntas las diferentes partes de una caja (margen, borde, relleno y contenido) para crear una caja que puedas ver en tu página.

**Partes de una caja**

- **Contenido de la caja** (o *content box*): Es el área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como **widht** y ***height****.
- **Relleno de la caja** (o *padding box*): Es el relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad [padding](https://developer.mozilla.org/es/docs/Web/CSS/padding) y otras propiedades relacionadas.
- **Borde de la caja** (o *border box*): Es el borde de la caja, este envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad [border](https://developer.mozilla.org/es/docs/Web/CSS/border) y otras propiedades relacionadas.
- **Margen de la caja**(o *margin box*): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad [margin](https://developer.mozilla.org/es/docs/Web/CSS/margin) y otras propiedades relacionadas.

![Diagrama del model de caja estandar.](../blog/images/Untitled.png)

Diagrama del model de caja estandar.

En el modelo de cajas estandar cuando establecemos el tamaño de una caja con las propiedades (width y heigth), el tamaño total de una caja, será igual a:

>💡 anchoTotal = ancho del contenido + (left-padding+right-padding) + (border-width*\2)


>💡 largoTotal = largo del contenido + (top-padding+bottom-padding) (border-width*\2)


Por lo que si a un elemento le definimos las siguientes propiedades:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

Sus medidas totales serian:

Ancho: 350px + (25px+25px) + (5px*2) = 410px.

Alto: 150px + (25px + 25px) + (5px * 2) =210px.

![El elemento tiene definido un ancho de 350px y un alto de 150px, pero en total ocupa el espacio de 410px y 210px.](../blog/images/Untitled%201.png)

El elemento tiene definido un ancho de 350px y un alto de 150px, pero en total ocupa el espacio de 410px y 210px.

### **El modelo de cajas CSS alternativo**

CSS introdujo un modelo de caja alternativo, con este modelo, cualquier ancho es el ancho de la caja visible en la página, por lo tanto, el ancho del área de contenido es ese ancho menos el ancho para el relleno y el borde. El mismo CSS que hemos usado antes daría entonces el resultado siguiente (ancho = 350 px, altura = 150 px), el tamaño de la caja en el modelo alternativo es el tamaño definido por las propiedades width y height.

Para activar el modelo de cajas alternativo para un elemento, hazlo aplicando la siguiente propiedad:

>`box-sizing: border-box`

Con ello, le dices al navegador que tome como el borde de la caja el área definida por cualquier tamaño que establezcas.

**Demostracion**

En este ejemplo vemos como la caja que hace uso del modelo estándar ocupa mayor espacio debido a que para obtner el tamaño total toma en cuenta el borde y el padding, mientras que en el modelo alternativo la caja ocupa el espacio que se definió con las propiedades width y height. Es por esto que una es mucho mas grande que la otra.

![imf](../blog/images/Untitled%202.png)

## 7. Propiedades de una caja.

### **Margenes**

El margen es un espacio invisible que hay alrededor de la caja. Aleja el resto de los elementos de la caja. Los márgenes pueden tener valores positivos o negativos

![En este ejemplo podemos ver que el margen esta representado por el color amarillo y cubre al elemento desde su borde hacia afuera.](../blog/images/Untitled%203.png)

En este ejemplo podemos ver que el margen esta representado por el color amarillo y cubre al elemento desde su borde hacia afuera.

Colapso de los margenes

[Entendiendo el colapso de margen - CSS | MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)

###**Relleno**

![En este ejemplo podemos ver que el margen esta representado por el color amarillo y cubre al elemento desde su borde hacia afuera.](../blog/images/Untitled%203.png)

El relleno o ***padding*** esta representado en la imagen por el área de sombreada de color lila. Representa el espacio entre el contenido del elemento y el borde.

### **Bordes**
![En este ejemplo podemos ver que el margen esta representado por el color amarillo y cubre al elemento desde su borde hacia afuera.](../blog/images/Untitled%203.png)

Los margenes están representados por el area sombreada de color gris, representa la frontera entre el margen y padding del elemento html.

### Display

#### display: none

Oculta el elemento html al cual se le aplica esta propiedad css.
#### display: visibility

Oculta el elemento html al cual se le aplica esta propiedad css pero nos permite conservar el espacio, es decir, oculta el contenido pero no el espacio que ocupa.

### Overflow

### Colapso de Márgenes

#### Vertical

Al aplicar margenes verticales mediante las propiedade margin-top y margin-bottom, ambos margenes se superpondran uno con el otro de tal manera que visualemente solamente podremos observar una sola medida del margen, es decir, no se sumaran ambos margenes para tener un margen mayor.

#### Horizontal

Al aplicar margenes horizontales mediente las propiedades (margin-left y margin-right) ambos margens no se superpondran, de tal manera que podremos visualizar el espacio entre ambos margenes ya que se suman creando un margen de mayor tamaño.


### Centrado de cajas

Para centrar contenido/cajas lo podemos hacer mediante las propiedades de **margenes horizontales** (margin-left/margin-right)

## 8. Posicionamiento

Las propiedades de posicionamiento nos permiten, como su nombre lo dice posicionar los elementos html a traves del viewport disponible.

Existen dos propiedaes:

* position: Le indica al elemento html como ha de posicionarse existen cinco valores disponibles: static, relative, absolute, fixed y sticky.
* left,top,right,bottom: Indica la posicion en la cual ha de ubicarse el elemento html, podemos expresar dicho psicionamiento en pixeles.

### static

El elemento es posicionado de acuerdo al flujo normal del documento. Las propiedades top, right, bottom, left, and z-index no tienen efecto. Este es el valor por defecto.

### relative

El elemento es posicionado de acuerdo al flujo normal del documento, y luego es desplazado con relación a sí mismo, con base en los valores de top, right, bottom, and left. El desplazamiento no afecta la posición de ningún otro elemento; por lo que, el espacio que se le da al elemento en el esquema de la página es el mismo como si la posición fuera static (se conserva el espacio el elemento deja despues de posicionarlo). Este valor crea un nuevo contexto de apilamiento, donde el valor de z-index no es auto.

![[Pasted image 20240819213531.png|450]]

En el ejemplo anterior la caja relativa uno tiene posicionamiento **relativo**, toma como referencia su posicion original dentro del flujo del documento para posicionarse y deja disponible es espacio que ocupaba originalmente.

### absolute

El elemento es removido del flujo normal del documento, sin crearse espacio alguno para el elemento en el esquema de la página. Es posicionado relativo a su ancestro posicionado más cercano, si lo hay; _de lo contrario, se ubica relativo al bloque contenedor inicial_. Su posición final está determinada por los valores de top, right, bottom, y left.

![[Pasted image 20240819220204.png]]

Vemos como _absolut box_ toma como referencia el posicionamiento dentro del flujo del documento donde fue declarado pero NO genera el espacio que ocupaba orignalemente el elemento. Es decir el espacio que ocupaba originalmente puede ser ocupado por otros elementos.

![[Pasted image 20240819220538.png]]

Vemos como la caja morada puede ocupar el espacio disponible el cual le pertencia originalmente a _absolute box_, y como _absolute box_ toma como posicion de referencia para ubicarse la posicion donde estaba ubicada originalmente, en este caso porque no tiene un ancestro directo.

### fixed

El elemento es removido del flujo normal del documento, sin crearse espacio alguno para el elemento en el esquema de la página. Es posicionado con relación al bloque contenedor inicial establecido por el viewport, excepto cuando uno de sus ancestros tiene una propiedad transform, perspective, o filter establecida en algo que no sea none (ver CSS Transforms Spec), en cuyo caso ese ancestro se comporta como el bloque contenedor. 

### sticky


Se comporta de igual manera que el posicionamiento fixed con la caracteristica adicional que solo es fixed a determinada posicion de scroll determinada por alguna de las propiedades (left-top-right-bottom) cuando alcance dicha valor de scroll se va a comportar como fixed tomando como referencia su propia posicion en el flujo donde fue declarado, mientras el scroll no alcance dicho valor el elemento se va a comportar de manera static.
