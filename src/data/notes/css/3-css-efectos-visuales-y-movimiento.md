---
title: '3. Efectos visuales y movimiento'
pubDate: 2025-04-03
description: 'Aplicacion para generar y sincronizar las letras de archivos de audio "mp3"'
author: '@angelthz'
tags: ["typescript", "html", "css"]
slug : 'efectos-visuales-y-movimiento'
category: "css"
---

# 1. Efectos

## 1.1 Sombras 

### 1.1.1 Box Shadow

La propiedad CSS `box-shadow`añade efectos de sombra alrededor del marco de un elemento. Se pueden definir múltiples efectos separados por comas en la misma línea, es decir si quisieramos añadir una sombra externa y una interna solo bastaria con definir las propiedades de la sombra externa seguidas de una comoa y añadir las propiedades de la sombra interna. La sintaxis es la siguiente:

#### Sintaxis

```css
//sintaxis misma linea:
box-shadow: inset | offset-x | offset-y | blur-radius | spread-radius | color | inset-outset;
```

Las propieades basicas para generar una sombra son el offset-x, offset-y y color.
Para sombras internas o externas usamos la inset, por defecto es outset y no es necesario especificarlo.

#### Propieades

- inset: hace que la sombra se proyecte hacia adentro del elemento padre.
- offset-x: define las distancia de la proyeccion en X de la sombra.
- offset-y: define la distancia de la proyeccion en Y de la sombra.
- **Valores de offset-x y offset-y:** Los valores de offset  pueden ser positivos o negativos. Si los valores son negativos el desplazamiento se hace en direccion contraria a la original, con valores positivos y negativos podemos mover la sombra en todas las direcciones del elemento padre.
- blur-radius: Especifica el tamaño de la difuminacion de la sombra, no permite valores negativos.
- spread-radius: Permite modificar el tamaño de la sombra, acepta valores positivos y negativos. Con valores positivos la sombra se agranda y con negativos se reduce.
- color: permite especificar el color de la sombra.

> Nota: El valor de las propiedades que reciben una medica como : offset, blur-radius y spread-radius aceptan valores en px,rems,ems, vh,vw, etc.
> 

Si quisieramos una sombra uniforme alrededor de todo nuestro elemento basta con definir los valores del offset en 0 y especificar un valor mayor de 0 en la propiedad spread-radius.



### 1.2 Text shadow

```
text-shadow: x | y | spread-radius | color;
```

### 1.1 Drop Shadow

```
	filter: drop-shadow()
```

## 1.2 Gradientes (Degradados)

Estos efectos tienen efecto sobre fondos, como los definidos con propiedades como background, background-imagen. Generan una transición entre los colores definidos.

### 1.2.1 Gradiente linear

El gradiente linear hace una transición progresiva de los colores especificados en una dirección lineal especificada por la propiedad direction.

```css
/*Sintaxis*/
bacground-property: linear-gradient (direction | color | position%);
```

- background-property: es la propiedad css a la cual se aplicará el gradiente linear, esta puede ser una propiedad que aplica un fondo a un elemento como background, o backgroun-image.
- linear-gradient: es la propieadad css que indica que vamos a aplicar un gradiente linear.
- direction: es la direccion de inicio del gradiente , podemos especificarlo con las palabras clave: to left, to rigth, to top, to bottom. O bien definir una direccion basada en grados: (75deg, 128deg, etc).
- color: es el color del degradado.
- position%: indica el porcentaje del tamaño hasta donde se extenderá el degradado del color definido.

Para lograr un degradado basta con aplicarlo al elemento de fondo especificar la direccion de inicio y los diferentes colores y sus posiciones hasta donde se extenderan sus degradados en el elemento padre, si no se especifica el % CSS los dividie equitativamente.

Ejemplo:

```css
background: linear-gradient(to right,blue 20%, red 45%, orange, yellow);
```

### 1.2.2 Gradiente Radial

El gradiente radial hace una transición circular progresiva de los colores especificados desde un punto central de origen hacia afuera.

```css
//sintaxis
background: radial-gradient(type at posX% posY% | color position%);

```

- **radial-gradient:** indica un gradiente circular o radial
- **type:** Permite especificar el tipo de gradiente, existen dos tipos para: Circular y Elipse. El valor por defecto es elipse. Para el gradiente circular `cirlce` necesitamos especificar el radio y para la la elipse `ellipse` el radio en x e y.
- **at posX% posY%:** Permite especificar el punto de inicio del gradiente radial, este se toma en base al contenedor padre y lo podemos mover mediante los porcentajes. Tambien podemos usar las palabras at top, bottom, left, rigth y combinarlas.

Ejemplo:

```css
background: radial-gradient(circle at 0% 0%, #f35 0%, #43e 90%);
//indica un gradiente radial que inicia en la esquina superior //izquierda de su elemento padre
```

### 1.2.3 Gradiente Conico

### 1.2.4 Generar patrones


Graficas

---

# 2. Filtros a elementos

## Propiedad filter


> filter: “filterName”()”value;

## Filtros

> filter: blur(.4);


brightness

contrast

grayscale

sepia

hue-rotate

invert

drop-shadow

Podemos aplicar multiples filtros a un solo elemento solo basta con declararlos en la misma línea separados con un espacio.

---

## Filtros a fondos

Para añadir filtros al fondo de un elemento html usamos la propieadad backdrop-filter, si usaramos la propiedad filter, esta se aplicaria a todos loes elementos que contenga sin embargo con la propiedad ******************backdrop-filter,****************** solo se aplica al fondo del elemento.

### Propiedad

backdrop-filter: filterName(value);

---

### Modo noche con filtros

---

### Modos de mezclado

<aside>
💡 mix-blend-mode: blendModeName;

</aside>

### Modos de Mezcla a fondos

---

# 3. Máscaras y formas

---

# 4. Efectos del Scroll

## Scroll Margin
Nos permite ajustar el margen de un elemento al realizar scroll, es ideal en los casos en los que tengamos elementos fijos o sticky para evitar que cubran el contenido.

---

## Scroll Snap (Ajuste del scroll)

Para hacer el efecto de slides, tenemos que tener una estructura bien definida para que el efecto funcione, se lista a continuacion:

- Un contenedor principal, va a contener todas las slides.
- Contenedores para las slides
- Contenido de las slides

En html podemos definir una esta estructura de esta manera:

```html
<main class="slides-container">
  <section class="slide-container">
    <article class="slide-content">
      <h2></h2>
      <p></p>
    </article>
  </section>
  <section class="slide-container">
    <article class="slide-content">
      <h2></h2>
      <p></p>
    </article>
  </section>
</main>
```

Ademas debemos considerar:

- El main-container: debe tener un ancho de 100% y un alto de 100vh y tener la propiedad overflow-y: scroll y scroll-snap-type;
- El slide: debe tener un ancho de 100% y un alto heredado de su contenedor padre (inherit) y la propiedad scroll-snap-align.
- El slide: content debera contener todo el contenido de la slide.

****************************************En el padre (slides-container) debemos:****************************************

Para activar el efecto de scroll automatico debemos añadir la propiedad scroll-snap-type en el padre o slides-container.

> scroll-snap-type: [eje de desplazamiento, nombre del efecto]

**Eje de desplazamiento**
- x: controla el desplazamiento horizontal
- y: controla el desplazamiento vertical
- inline: controla el desplazamiento horizontal
- block: controla el desplazamiento vertical
- both: controla el desplazamiento horizontal y vertical

**Efecto**
- mandatory:
- proximity:

********************En el hijo (slide-container) debemos:********************

Añadir la propiedad scroll-snap-align, que nos dice hacia donde se van alinear cuando hagamos el scroll automatico.

> 	scroll-snap-align: end | start | center;

---

# 5. Movimiento en CSS

[Animatable CSS properties - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

## Transiciones

Las transiciones CSS proporcionan una forma de animar los **cambios de las propiedades CSS**, en lugar de que los cambios surtan efecto de manera instantánea. 

Por ejemplo, si cambias el color de un elemento de blanco a negro, normalmente el cambio es instantáneo. Al habilitar las transiciones CSS, el cambio sucede en un intervalo de tiempo que puedes especificar, siguiendo una curva de aceleración que puedes personalizar.

>Nota: Hay propiedades a las que no se les pueden aplicar animaciones.

### Sintaxis

```css
/*Propiedades*/
transition-property: ;
transition-duration: ;
transition-timing-function: ;
transition-delay: ;
/* shorthand */
transition: transition-property | duration | timing-function | delay;
```

### Propieadad: transition

- transition-property: Especifica a que propiedad se le va a aplicar la transición.
- transition-duration: Especifica el tiempo que va durar la transición de un estado a otro.
- transition-delay: Permite especificar un tiempo de espera para que comience la transicion de un estado a otro.
- transition-timing-function: Nos permite especificar una funcion de tiempo que nos permiten modificar la curva de aceleracion del tiempo que dura la transicion. Por lo que en un punto de la transicion podemos hacer que vaya mas rapido o mas lento.
- transition-delay:

Podemos especificar diferentes transiciones a las propiedades de un elemento en una misma linea de codigo separandolas con comas o bien usar la propiead **********all********** como valor de la propiedad transition-property aunque esto ultimo no se recomienda.

>Nota: El valor "all" de la propiedad transition aplica las transiciones a todas las propiedades incluso a las pre-definidas por el navegador.

Ejemplo:

```css
//Establece una transicion entre el cambio de color y de tamaño de un elemento
transition: background-color 2s, width 500ms 3s;
```

### Transition timing function

[- CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)

Como mencionamos anteriormente esta propiedad nos permite establecer la aceleracion de la transición durante el lapso de tiempo que dura. Existen varias funciones que nos permiten hacer esto.

- linear: Es el valor por defecto y podemos modificarlo agregando los pasos.
- ease: Especifica el efecto ease, se usa solo usando la palabra clave ease.
- ease-in: se usa solo usando la palabra clave ease-in.
- ease-out: se usa solo usando la palabra clave ease-out.
- cubic-bezier: Se usa especificando los pasos de tiempo para modificar la acelaracion.
- steps:  Se usa especificando los pasos de tiempo para modificar la acelaracion.

```css
transition: background-color 2s steps(4);
```

---

## Transformaciones 2D
La funcion **transform** CSS representa una transformacion que afecta la apariencia de los elementos html. La funcion **transform** y sus propiedades nos permiten rotar, cambiar de tamaño, distoricionar y mover un elemento a traves de un espacio 2D y 3D.

### Sintaxis

```css
transform: transformFunction(values);
/* where transformFunction could be: */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);
```

Cada una de las funciones que recibe transform estan catalogadas en:
### Transformaciones de Matrices

Permite modificar el elemento html en base a una matriz.

- matriz()
- matriz3d()

### Perspectiva

Permite modificar la perspectiva en 2D y 3D.

- perspective()

### Rotacion

Permite modificar la rotacion de un elemento html, esta se especifica en grados (90deg, por ejemplo).

- rotate()
- rotate3d()
- rotateX()
- rotateY()
- rotateZ()

### Escalado

Permite cambiar el tamaño de un elemento html en 2 y 3 dimensiones, el escalado se especifica en numeros naturales y decimales. Tambien podemos escalar un elemento en un solo eje ya sea X o Y.

- scale()
- scale3d()
- scaleX()
- scaleY()
- scaleZ()

### Distorcion

Permite distorcionar un elemento html.

- skew()
- skewX()
- skewY()

### Transalacion

Permite modificar la poscion del eelemnto en 2 y 3 dimensiones. Podemos especificar la transalacion en pixeles o unidades de medida que usa css ademas tambien nos permite modificar la posicion en un solo eje ya sea X o Y.

- transalate()
- transalate3d()
- transalateX()
- transalateY()
- transalateZ()

## Transformaciones 3D
	

---

## Animaciones

### Crear animacion

Para crear una animacion necesitamos seguir los siguientes pasos:

1. Crear una animacion con la propiead “@keyframe”
2. Crear el selector de clase para la animación
3. Agregar al selector de clase las propiedades: animation-name: y animation-duration.

> animation:  name | duration | timing-function | delay  | iteration-count | direction | fill-mode | play-state;
	

- **name** (obligatoria): Nombre de la animacion. Le debemos dar un nombre nosotros mismos.
- **duration** (obligatoria): Duracion de la animacion en segundos o milisegundos.

Para crear una animacion usamos la palabra “@keyframes” dentro del codigo css.

```css
@keyframes nombreDeLaAnimacion{
	/*Indica el frame inicial o el inicio de la animacion*/
	from{
		/*propiedades a animar*/
	}

/*Indica el frame final o el termino de la animacion */
	to{
	/*propiedades a animar*/
	}
}
```

Ejemplo:

```css
@keyframes my-animation{
/*ESTA ANIMACION CREA UN EFECTO SLIDE A LA DERECHA*/
	/*Indica el frame inicial o el inicio de la animacion*/
	from{
		/*propiedades a animar*/
		opacity: 0;
	    transform: translateX(0);
	}

/*Indica el frame final o el termino de la animacion */
	to{
	/*propiedades a animar*/
	  opacity: 1; 
	    transform: translateX(50%);
	}
}

/*selector de clase para la animacion, para aplicarla a un elemento html, solo
hay que agregarle la clase al elemento*/
.animate-card{
	/*nombre de la animacion*/
  animation-name: my-animation;
	/*duracion de la animacion*/
  animation-duration: 5s;
}

```

### Propiedades

[animation - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)

- animation-delay: Especifica el retraso de la animacion, es decir un lapso de tiempo en el que iniciara a reproducirse la animacion despues de ser activada por cualquier evento.
- animation-direction: Permite especificar como deberia reproducirse la animacion, hacia adelante, atras, alternado, alternado de reversa.
- animation-fill-mode: Permite definir en que orden se van a aplicar los estilos durante la animacion, ninguno, antes, después o ambos.
- animation-iteration-count: Permite definir el numero de veces que la animacion debera repetirse, un valor de 0 indica que no se va reproducir la animacion, mientras que el valor ******************infinite****************** nos permite especificar que la animacion se reproduzca indefinidiamnte.
- animation-play-state: Nos permite definir el estado de l aanimacion: **************paused************** la animacion no se reproduce y ****************running**************** la animacion se reproduce.
- animation-timing-function: Al igual que las transformaciones, las animaciones permiten establecer una funcion de tiempo que permite modificar la aceleracion de la reproduccion de la animacion a traves del tiempo que dura.

### Linea de tiempo en animaciones

```css
@keyframes myAnimation1{
	0%{
		//properties
	}
	50%{
		//properties
	}
	75%{
		//properties
	}
}
```

### Multiples animaciones

Para añadir multiples animaciones tenemos que definirla y aplicarlas separandolas con comas.

---