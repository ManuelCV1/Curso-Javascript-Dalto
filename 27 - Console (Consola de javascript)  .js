/*--Funciones de Registro--*/

console.assert(5<3);// assert (Si la afirmación es falsa , envia mensaje de error a consola)
console.clear();// clear (Limpia la consola)

console.error('Existe un error');// error (Muestra un mensaje de error en la consola)

console.info('Mensaje informativo')// info (envia un mensaje informativo a la consola)

console.log('Mensaje de depuración')// log (funciona exactamente igual que info , pero se enfoca más para depuración)

console.table(['Manuel','Massiel','Mariadny',1,2,3])// table (recibe como parametro un array u objeto y genera en consola una tabla con los datos)

console.warn('!Advertencia!, cuidado con...')// warn (imprime un mensaje de advertencia en la consola web)

console.dir([1,2,3,4,5]);// dir (despliega en consola un lista del elemento recibido como parametro [similar como ocurre con info o log])



/*--Funciones de Conteo--*/ 

console.count();// count (registra el numero de veces que se llama a count)

console.countReset();// countReset (reinicia el contador console.count())



/*--Funciones de Agrupación--*/

console.group("grupo1");// group (crea un nuevo grupo o sub-grupos en linea en el registro de la consola web. Adicionalmente puede recibir como parametro el nombre del grupo)

console.groupCollapsed("grupo1");// groupCollapsed (funciona exactamente igual que group . La diferencia es que para ver los elementos del grupo hay que darle click)

console.groupEnd();// groupEnd (para salir de una agrupación)



/*--Funciones de Temporización--*/

console.time();// time (inicia un temporizador)

console.timeLog();// timeLog (registra el valor actual de un temporizador)

console.timeEnd();// timeEnd (detiene un temporizador)



/*--Cambiar el Color de Texto de la Consola--*/

console.log("%cmanuel","color:white;padding:20px;background:black");// %c (se puede cambiar color y otras propiedades más de CSS en la consola)

