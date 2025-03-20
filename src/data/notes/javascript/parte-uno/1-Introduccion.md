---
title: '1. Introduccion a Javascript'
pubDate: 2025-04-03
description: 'Aplicacion para generar y sincronizar las letras de archivos de audio "mp3"'
author: '@angelthz'
tags: ["typescript", "html", "css"]
slug : 'introduccion-a-javascript'
category: 'javascript'
---


# Características del lenguaje

- Lenguaje de alto nivel
- Interpretado
- Dinamico
- Debilmente tipado
- Multi paradigma
- Case sensitive
- Se compila en tiempo de ejecución

## Escritura del lenguaje

- Usar **snake_case** para nombrar archivos.
- Usar **UPPER_CASE** para constantes.
- Usar **UperCamelCase** para clases.
- Usar ******************************lowerCamelCase****************************** para variables, objetos, funciones, métodos.

## Ordenamiento del codigo

1. Importar modulos
2. Declaracion de variables
3. Declaracion de funciones
4. Ejecucion de codigo (Llamada de funciones, eventos, etc.).

## Tipos de datos

### Primitivos

Se puede acceder directamente al valor, como:

- strings
- number
- boolean
- null
- undefined
- NaN

Es decir, podemos llamar a estos datos o variables primitivas y como resultado obtendremos su valor.

```jsx
let name = "angel";

console.log(name);
```

### Compuestos

Se accede a la referencia del valor.

- object = {}
- array = []
- function (){}
- Class{}
- etc.

Es decir, accedemos a una referencia por la cual podemos acceder a los datos que componen a este tipo de datos.

```javascript
//un objeto es un tipo de dato compuest
let employee = {
	//atributos
	id : 123,
	name : "juan",
	salary : 2500.00,
	//metodos
	greeting: function(){
		console.log("My name is: "+name);
	}
}

//a traves de una referencia podemos acceder a todos su atributos
console.log(employee.name);
employee.greeting();
```


```jsx
let names = ["ana", "juan", "diego"];
//este array es un objeto compuesto

//a traves de la referencia names podemos acceder a sus datos 
console.log(names[0]):
```
---