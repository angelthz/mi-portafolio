---
title: '8. Promises'
pubDate: 2025-04-03
description: 'Aplicacion para generar y sincronizar las letras de archivos de audio "mp3"'
author: '@angelthz'
tags: ["typescript", "html", "css"]
slug : 'promises'
category: 'javascript'
---

# 8. Promises

---

[Promesa](https://es.javascript.info/promise-basics)

[Promise - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Promesa trabaja con dos objetos: resolve y reject.

creamos una funcion dentro de ella retornamos instancias de resolve y reject. La ventaja de las promesas respecto a las callbacks es que son objetos creados para mejorar el codigo y nos permiten manejar un error al encadenar varias promesas.

```js
//ejemplo promise

//cuadrado Promise
//definimos una funcion
function cuadradoPromise(value){
	//retornaremos una instancia de promise, que necesita como parametro
	//una funcion con los parametros resolve y reject
	return new Promise((resolve, reject)=>{
		//codigo a ejecutar 
		//simalando codigo asincrono
		setTimeout(()=>{
			//ejecutamos el metod resolve, le pasamos una funcion
			resolve({
				value,
				result: value*value
			});
		},Math.random()*2500);
	});
}

//para ejecutar la promesa

cuadradoPromise(2)
	.then((result)=>{
		console.log(result);
		return cuadradoPromise(3);
	})
	.then((result)=>{
		console.log(result);
		return cuadradoPromise(3);
	})
	.then((result)=>{
		console.log(result);
		return cuadradoPromise(4);
	})
	.cathc(err => console.log(err))
	
```
