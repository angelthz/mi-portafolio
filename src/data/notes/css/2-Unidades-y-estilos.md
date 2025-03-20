---
title: '2. Unidades y estilos'
pubDate: 2025-04-03
description: 'Aplicacion para generar y sincronizar las letras de archivos de audio "mp3"'
author: '@angelthz'
tags: ["typescript", "html", "css"]
slug : 'unidades-y-estilos'
category: "css"
---

# 1. Color

## 1.1 Sistemas

- Hexadecimal: #ffffff
- RGB: rgb(255,255,255) Para medios digitales
- CMK: Para medios impresos
- hsl:

## 1.2 Transparen y currentColor

**background-color: transparent;**
Aplica un nivel de opacidad equivalente al 100% solamente al elemento html seleccionado.

**backgroun-color: currentColor**;
Hereda el valor de la prop color del elemento, si no tiene definida
la prop color heredara dicha prop del su ancestro mas cercano.

## 1.3 Opacity

Aplica el mismo nivel de opacidad a todos los elementos html.



---
# 2. Unidades de medida en CSS

Se clasifican en dos absolutas y relativas.



## 2.1 Absolutas

Son medidas que se caracterizan porque no cambian en su valor, como los cm, mm, pulgadas(in), punto(pt) y pixeles (px).

Recomendadas para estilos de impresión.

- pt (punto)
- px (pixeles)

## 2.2 Relativas

Su valor es relativo a un contexto y su vez estas se clasifican de acuerdo al tamaño de la fuente y el porcentaje de su contenedor.


### 2.2.1 El tamaño de la fuente

Basan su tamaño tomando como referencia la medida de la fuente.
- em: Toma como referencia en cuanto a medida la anchura de la letra "m" de la fuente del elemento que contenga al elemento que le apliquemos una medida con esta unidad. Es decir: El elemento hijo toma como referencia el tamaño de letra del elemento padre.
- rem (Root EM): Toma como referencia en cuanto a medida la anchura de la letra "m" de la fuente del elemento raiz, es decir, de la etiqueta html.
- ex: Basado en la altura de la letra "x" del elemento.
- ch: Basado en la anchura del "0" del elemento, 1ch seria equivalente a un caracter. Nos permite especificar el tamaño para un numero determinado de caracteres.
### 2.2.2 El tamaño de su contenedor (porcentajes %)

Basan su tamaño tomando en cuenta el tamaño de su contenedor. Estas medidas son:

#### Porcentajes
>Son relativos al tamaño de su contenedor.

Basan sus medidades en base a porcentajes tomando como referencia las medidas de su contenedor padre.

- width: %. Los elementos html de bloque con medidas basadas en su porcentaje toman como referencia todo el ancho que ocupan en pantalla.
- height: %: Si aplicamos une heigth basado en porcentajes no tendrá ningun efecto ya que el height porcentual toma como referencia el tamaño del contenido y en caso de que su elemento padre tenga una medida con un height en valor absoluto tomara a este como referencia.

#### Viewport

Toman como referencia el tamaño del viewport parte del navegador donde se renderiza el contenido html.

- vw (viewport width): Toma como referencia el ancho del viewport, va de 1 a 100.
- vh (viewport heigth): Toma como referencia la altura del viewport, va de 1 a 100;
- vmax: Toma el valor mas grande entre vw y vh.
- vmin: Toma el valor mas grande entre vw y vh.


---

# 3. Funciones y variables

## Variables



### Custom properties y funcion var()

Podemos definir variables dentro de los selectores de CSS para usarlo en todo el selector solo que estaran disponibles en ese selector.

Para definir una variable usamos dos guiones al comienzo de su definicion + el nombre de la variable y por ultimo el valor que le asignaremos a dicha variable que puede ser cualquier valor que admita una propiedad css.

Para poder usar una variable usaremos la funcion var();************ que recibe como parametro el nombre de nuestra variable de CSS.

>Sintaxis: --var-name: property-value;

>Uso: property: var(var-name);

```css
h1{
//declaracion de la variable
	--my-color-var : red;
//uso de la variable
	background-color: var(--my-color-var);
}
```

Si queremos declarar variables de manera global, las declararemos en el selector **root{}.**

```css
//root tiene mayor especifidad que html
:root{
	--my-var-color: red;
}

html{
	--my-var-color: red;
}
```

De esta manera podemos acceder a nuestras variables desde cualquier selector de CSS.

---

## 4. Funciones

### @import url()

Nos sirve para cargar contenido externo como imagenes, fuentes, u otras hojas de estilos CSS.

### var()

Nos permite usar las variables que hayamos definido en nuestro archivo CSS.

### url()

Nos sirve para cargar contenido externo como archivos tipograficos o imagenes.

### calc()

Nos permite realizar calculos aritmeticos. Al usar esta funcion debemos dejar espacios entre los operandos y operadores para que no tengamos errores de calculos.

### min() y max()

La funcion `min()` aplica el valor mas pequeño que se le haya pasado como parametro.

La funcion `max()` aplica el valor mas grande que se le haya pasado como paremtero.

```css
//aqui la funcion min elegira el tamaño mas pequeño entre los parametros
width: min(240px, 20vw, 10rem);

//
height: max(400px, 30vh, 5rem);
```

### clamp()

Es una funcion que nos permite establecer un tamaño depeniedno de los parametros que le pasemos.

Esta función recibe tres parámetros:
- El tamaño minimo
- El tamaño ideal
- El tamaño maximo

También permite hacer operaciones dentro de la funcion.

```css
{
	//
	font-size: clamp(1rem, 1.2rem, 4rem)
}
```

---
# 5. Estilos de texto

Permiten establecer los estilos a las fuentes tipograficas.

## font

La propiedad font es un shorthand, nos permite establecer varios aspectos de la funete en una sola liena de codigo.

### font-family

Permite establecer el conjunto de fuentes tipograficas correspondientes a una familia tipografica.

### font-size
Establece el tamaño de la fuente. Puede establecerse con cualquiera de las unidades de medida.

### font-weight
Establece el grosor de la fuente. Se establece mediante los valores de 100 a 900, cada uno representa un grosor.

### font-style
Establece el estilo de la fuente. normal, italic, oblique.

### font-variant
No es tan usada xd pero permite establcere un estilo de fuente alternativo.

### line-heigth
Tamaño del interlineado del texto.

## Cargar fuentes  locales

Necesitamos una fuente en formato WOF o TTF.

```css
@font-face{
	font-family: "name";
	src: url("font-path") format("font-format"),
		 url("font-path") format("font-format");
	font-display: "
		auto: comportamiento por defecto
		block: oculta la fuente personalizada hasta que haya cargado
			swap: utiliza la fuente por defecto hasta que carga la fuente personalizada
		fallback
		optional
	";
}
```

## Estilos

- text-align: Alineaciond el texto
- text-decoration: Estilos de los enlaces
- text-indent: Permite aplicar sangria al texto.
- text-overflow: Estilos de texto para el texto cuando se desborda.
- text-transfor: capitalize, normalize, lowercase.
- letter-spacing: Espaciado entre caracteres.
- white-space: Permite establecer el comportamiento de los espacios en blanco.
- word-brake: Divide las palabras cuando estas no caben en un salto de linea.
- word-space: Espaciado entre palabras.
- writting-mode: Orientacion del mode de escritura.

---
# 6. Border

## Bordes

Bordes basados en una circunferencia, usamos border.
Bordes basados en una elipsis usamos border asi: border: (x / y)
Ejemplo: border: 10px / 10px;

## Outline


---
# 7. Estilos del fondo

## **background-color**:

Nos permite definir el color del fondo de un elemento html.

## background-image

Nos permite establecer una imagen de fondo a un elemento html, por lo regular a elementos contenedores y con propiedades de tamaño. Para colocar la imagen hay que hacer uso de la funcion ************url(),************ que nos permite especificar la ubicacion de nuestra imagen de manera local o remota.

## background-size

Nos permite definir las medidas de una imagen de fondo, recibe dos valores el primer valor en x para el ancho y el segundo valor en y para el alto, las medidas deben estar especificadas en alguna
unidad de medida valida para css.

### Valores

- **size**: medidas definidas en alguna de las unidades de medida validas para css.
- **************cover:************** segura que la imagen cubra toda la imagen, pero no asegura que la imagen se vea por completo.
- ******************contain:****************** se asegura que la imagen se vea por completo, pero no cubre toda el area.

## background-repeat

Define como se repite una imagen de fondo en un elemento html. El valor por defecto es repeat.

### Valores

- ************repeat:************ la imagen se repite.
- ****************repeat-x:**************** la imagen solo se repite en el eje x.
- ****************repeat-y:**************** la imagen solo se repite en el eje y.
- ******************no-repeat:****************** la imagen no se repite

## background-position

Nos permite posicionar la imagen de fondo dentro del espacio donde esta contendida.

### Valores

- **********X Y:********** Podemos especificar los valores para X e Y los cuales indicarian cuanto se aleja el fondo de su posicion original, podemos especificar estos valores en cualquie runidad de medida valida de css.
- **************top, left, bottom, left y center:************** Nos permiten posicioanr el fondo en una ubicacion especifca con cualquiera de estos valores.

```css
ejemplo{
	background-position: 100px 50px;
	background-position: top center;
}
```

## background-clip

Define como va a extenderse el color de fondo en el elemento.

El valor por defecto es border-box

## background-origin

Define como van a extenderse las imágenes de fondo en el elemento.

## background-attachment

Define como va a comportarse la image de fondo al desplazarnos por la pagina.

---
# 8. Estilos de imagenes

## Imagen responsiva

Aplicar las siguientes propiedades :
```css
max-with: 100%
height: auto;
```

## object-fit


## object-position

# 9. Estilos de listas

# 10. Tablas

# 11. Formularios
