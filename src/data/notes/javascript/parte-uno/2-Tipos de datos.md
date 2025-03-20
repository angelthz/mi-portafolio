---
title: '2. Tipos de datos en Javascript'
pubDate: 2025-04-03
description: 'Aplicacion para generar y sincronizar las letras de archivos de audio "mp3"'
author: '@angelthz'
tags: ["typescript", "html", "css"]
slug : 'tipos-de-datos-javascript'
category: 'javascript'
---

# 1\. Tipos de variables

## 1.1 var vs let

Podemos declarar variables con las palabras reservadas ********var******** o ********let.********

Antes de EMS6 JS solo tenia un ámbito global y funcional. Por lo que no tenia ámbito de bloque ya que cualquier variable salía fuera de su bloque, haciendo que fuera global.

Con EMS6 llego el ambito de bloque.

El ámbito global se almacena en el objeto window de JS.

### 1.1.1 Variables declaradas con var

Cuando declaramos una variable con la palabra reservada ********var,******** es automáticamente declarada como una variable de ****************************ambito global.****************************

Cuando declaramos una variable con la palabra ********var******** esta se almacena en el objeto global ****************window,**************** con lo que pasa a ser una variable de ambito global y se puede acceder a ella desde cualquier punto del codigo JS.

Lo que hace JS al declarar una variable con ***var*** es elevarla fuera de su scope para que sea global, por lo que si declaramos una variable con el mismo nombre dentro y fuera de un **************************bloque************************** (funcion, ciclo, condicion) y con ********var******** es como si fuera global a todo el documento js.

Podemos acceder a una variable de este tipo directamente a traves del objeto **window**.

```jsx
window.varName;
```

En el código anterior acceder a la variable de esta manera nos devolvería el contenido de esta misma a través del objeto window.

********var******** no respeta los ámbitos de bloque.

---

### 1.1.2 Variables declaradas con let

Para que una variable tenga **ambito de bloque** es necesario declararlas con la palabra reservada ********let.********

La palabra **let** nos permite definir variables de bloque por lo que estas solo pueden existir solamente dentro del bloque donde fue definida la variable. Es decir su alcance solo se extiende al código de bloque donde ha sido declarada, recordemos que un bloque de codigo en JS puede ser una funcion, objeto, clase, condicion o ciclo.

Su alcance se limita al bloque de codigo donde fue declarado por lo que no se puede acceder desde el exterior como las variables de tipo **var**.

### 1.1.3 Variables Constantes (const)

La palabra reservada ***************const,*************** nos permite declarar variables *********************constantes,********************* es decir variables que no pueden cambiar su valor durante la ejecucion del programa.

* Si se declaramos una variable **primitiva** de tipo **const** no podremos cambiar su valor ni se le podra reasignar otro valor diferente al que se le dio en su declaracion.

* Si declaramos alguna variable **referenciada** de tipo **const** podremos cambiar o modificar su contenido mientras que el tipo no, es decir, si declaramos un objeto de tipo **array** con la palabra **const** podremos añadir nuevos elementos, eliminarlos y remplazar los elementos que queramos pero no seremos capaces de reasignar cambiar su tipo, es decir, no podremos hacer que el array pase a ser un **objeto** u otro tipo de dato referenciado.

> **Nota**: "const" no permite declarar variables vacías por lo que tenemos que asignarles un valor al momento de su declaracion.

### 1.1.4 Variables sin declaracion

Cuando hablamos de variables sin declaración nos referimos a aquellas variables que carecen de alguna de las palabras reservadas para la declaración de variables (var, let o const) y se les ha asignado un valor de cualquier tipo de dato, cuando nos encontremos ante una variable de este tipo es importante puntualizar que *JS* declara el **scope** de estas variables como **global**.

Por lo que el scope es visible cualquier punto del codigo.

---
# 2\. Tipos de variables

Veremos los tipos de variables en Javascript, las cuales se dividen al igual que otros lenguajes de programación en primitivas y referenciadas, en el caso particular de Js se las variables referenciadas tambien se conocen como **compuestas**.
## 2.1 Variable Primitivas

Las variable primitivas son aquellas que almacenan valores simples como, caracteres, números, booleanos, etc.
### 2.1.1 Strings

Almacenan caracteres de texto

```jsx
let str = "Hello world";
let char = "c";
```

### 2.1.2 Template strings

Es una nueva forma de declarar ******strings****** ya que esta consta de declarar toda la cadena de texto con las comillas invertidas. Esta es una forma mejorada de declarar cadenas de texto y mas natural sobre todo al momento de concatenar variables que hayamos declarado antes y que queramos dentro de alguna cadena de texto.

```jsx
let myStr  = `Esto es un ejemplo de una
template string`
```

La ventaja del uso de template strings es que tambien respetan los caracteres especiales de manera directa como saltos de linea. Y para combinarlo con variables debemos usar el símbolo de dolar seguido de llaves ******${}.****** Dentro de esta declaración podremos hacer referencia a las variables que queramos concatenar a nuestro string.

```jsx
let age = 18;
let myString = `the age is: ${age};
```

También son una forma útil de incluir codigo HTML que posteriormente podría ser añadido dinámicamente a un documento HTML.

```jsx
let myHtml = `
	<section>
		<h2>Hello</h2>
		<p>Hello everryone<p>
	</section>
`;
```

### 2.1.3 Numbers

En Js no es necesario especificar un tipo de numero para alamacenarlo en una variable como lo hariamos en otros lenguajes de programacion, lo unico que debemos hacer es declarar una variable y asignarle un valor numerico. Aunque no debemos especificar el tipo de numero a almacenar( int, float, double, etc) podemos hacer uso de la clase **Number** para instanciar un numero.

```jsx
//declaracion normal
let num = 10;
//declaracion con constructor
let otherNum = new Number(10);
```

#### Métodos para numberos

- toFixed()
- parseInt(). Devuelve la parte numérica
- parseFloat() Devuelve la parte numérica y decimal.

### 2.1.4 Booleans

```jsx
//declaracion normal
********************let myBol = true;
//declaracion con constructor
let otherBool = Boolean(true);********************
```

---

## 2.2 Variables Compuestas

### 2.2.1 Funciones

Un bloque de codigo independiente al ámbito global, se define una vez y se puede reutilizar las veces que sea necesario. Puede recibir o no parámetros y devolver o no valores. Una funcion puede devolver cualquier tipo de dato.

Las funciones en JS tambien se consideran como objetos y se dice que son ciudadanos de primer orden, es decir, podemos asignar una función a variables e incluso retornar una función como resultado de la ejecucion de otra función.

#### Función declarada

Una función declarada es aquella que declaramos con la palabra reservada **function**.******************

```jsx
**//declaracion de una funcion**
function myFunction(){
	//some code
}

//llamado de la funcion
myFunction();
```

Función que devuelve valores

```jsx
//declaracion de funcion
function myFunction(){
	return "Hello im the function: myFunction()";
}

myFunction();
```

Las funciones **declaradas** nos permiten llamarlas antes de la declaración de la misma.

#### Función expresada

Consta de crear una función y asignarla a una variable. También se le conoce como una función **anonima**,  debido a que no es necesario asignarle un nombre al momento de declararla.

La principal diferencia de entre una función **declarada** y una **expresada**,es que la **expresada** se asigna a una variable y no puede ser llamada antes de su declaración, el intentar llamarla antes de declarla no tiene sentido dado que no existe.

```jsx
//Ejemplo
const funcionExpresada = function(){
	//some code
};
//llamando a una funcion expresada
funcionExpresada();
```

### 2.2.2 Arreglos

[] Es una colección de datos que pueden ser del mismo tipo o de diferente tipo.
#### Declarar arreglos

```jsx
//arreglo vacio
const arr = [];
//arreglo de datos del mismo tipo
const arr2 = [1,2,3];
//arreglo de diferentes tipos de datos
const arr3 = ["hello",1,true,"b"];
//arreglo de arreglos
const arr4 = [[1,2,3], ["a","b","c"], [true, false]];
//nuevo forma de declarar un arreglos
const arr5 = Array.of(1,2,4,true,"a","b");
//forma antigua de declarar una arreglo
consr arr6 = new Array(1,2,32,39);
```

**Nueva forma de declarar un arreglo**

```jsx
const arr = Array.of(1,2,4,5,7,7);
```

Es una manera nueva incluida en EMS6 para la declaración de arreglos, en la cual usamos el Objeto **Array** para declarar un arrgelo, este objeto tiene otros métodos como **fill** que nos permite declarar un arreglo de un determinado tamaño con un mismo valor.

```jsx
const arr = Array(10).fill(false);
```

Declara un arreglo de 10 elementos de tipo boolean con el valor "false" por defecto para todos los elementos.

**Forma antigua operador new**

Esta forma ya no es muy ocupada actualmente.

```jsx
const arr = new Array(1,32,2,1);
```
#### Métodos de arreglos

push : añade un elemento al final del arreglo

```jsx
let arr = [1,2,3,5];
arr.push(9);
```

pop: elimina el ultimo elemento del arreglo.

```jsx
let arr = [1,2,3,4,5,9];
arr.pop();
```

unshift: añade un elemento al inicio del arreglo.

```jsx
let arr = [1,2,3,4,5,9];
arr.unshift(9);
```

shift: elimina el primer elemento del arreglo.

```jsx
let arr = [9,1,2,3,4,5];
arr.unshift();
```

#### Metodo map
crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

**Sintaxis**
```jsx
arr.map( function(value){
	//function code
} );
```

Donde value: es el valor actual del arreglo, podemos nombrar este parametro como deseemos, este hara referencia a cada elemento del arreglo.

```jsx
//array original
let arr = [1,2,3,4,5];

//sintaxis 1
let arrRes = arr.map( function(num){
	return num*2;
});

//sintaxis 2
let arrRes2 = arr.map ( num => return num*2 );

//la sintaxis 2 seria equivalente a
let arr2 = arr.map( (num) => {return num*2} );
```

El resultado seria el siguiente, la multiplicación por 2 de cada numero en el arreglo.

>[2,4,6,8,10]

reduce: ejecuta una función **reductora** sobre cada elemento de un array, devolviendo como resultado un único valor.

[Funcion reduce, javascript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

#### Recorrer una arreglo (forEach)

Podemos recorrer un arreglo con ciclos o con el metodo **************forEach.**************

```jsx
declaramos el arr
const arr = [1,2,3];
arr.forEach(el => {
	console.log(el);
});

arr.forEach( (el,index) => {
	console.log(el,index);
});
```

El metodo forEach recibe una funcion como parametro y ejecuta el codigo de la funcion sobre todos los elementos del arreglo.

### 2.2.3 Objetos literales

****{}****

Es una colección de datos conformados por pares **llave-valor**.

Donde una ************llave************ es un identificador y una **********valor********** es un valor que pude ser de cualquier tipo incluso una función.

Y hay que tener en cuenta que dentro de un objeto a las las **variables** pares llave-valor se les denomina como **atributos**,****** mientras que a las funciones se les denomina como **metodos**.

A estos objetos se les denomina como objetos literales ya que sus propiedades no están definidas explícitamente, sino que somos nosotros los encargados en definirlas. Y son diferentes de los objetos creados a partir de una clase.

#### Sintaxis

Un objeto se compone de atributos y metodos. Los atributos son las caracteristicas o variables que definen al objeto y los metodos son aquellas acciones que puede realizar el objeto sobre sus mismos atributos o bien cualquier accion que por sus caracteristicas el objeto pueda realizar.

```jsx
const objectName = {
	//attribs, Number, String, Boolean, Array,etc
	attribName : value,
	//methods (functions)
	methodName : function(){
		//to do
	}
}
```

**Ejemplo**

```jsx
//ejemplo
const angel= {
	//atributos o variables
	millave : "un valor",
	nombre : "angel",
	fechaNacimiento : "1994",
	contacto : {
		email: "email@.com",
		telefono: "5585279736"
	},
	pasatiempos : ["Leer","Dibujar"],
	//metodo
	saludar : function(){
	//acceder a un valor de un objeto dentro de una funcion 
		console.log("Hola soy",this.nombre);
	}
};
```

#### Acceder a los valores de un objeto

Podemos acceder a los valores de un objeto con corchetes o con la notacion de punto.

```jsx
//accedera los valores con corchetes
angel["nombre"];
//con notacion del punto
angel.nombre;

//acceder al valor de  un arreglo dentro un objeto
angel.pasatiempos[1];

//acceder al valor de un objeto dentro de otro objeto
angel.contacto.email;

//acceder a una funcion dentro de un objeto
angel.saludar();

```

#### Metodos de un objeto

- Object.keys(objeto): Muestra las llaves de un objeto
- Object.values(objetos): Muestra el valor de las llaves
- objeto.hasOwnProperty(”property-name”):****************************** Evalúa si un objeto tiene o no la propiedad que recibe como parámetro.

# 4\. null, undefined, NaN

**undefined**: es una variable que no tiene ningun valor y que además no se le ha asignado un valor al momento de declararla.

```jsx
let myNumber;
```

Si intentamos mostrar en consola el valor de "_myNumber_" obtendremos el erro **undefined**, si bien hemos declarado la variable, no le hemos asignado ningun valor.

Al realizar consultas a API's o tratar de acceder al DOM para almacenar un elemento HTML, es comun obtener **undefined** cuando ocurre un error o el elemento del DOM no existe o no se ha cargado.

- **null**: es un valor asignado por el programador para indicar que la variable no tiene ningún valor.
- **NaN**: indica que la variable no es un numero. Comunmente producido como el resultado de realizar operaciones entre datos de tipo diferente.

# Glosario

---

- ********bloque:******** Un bloque en JS es una parte de código que se encuentra dentro de llaves ******{}.******