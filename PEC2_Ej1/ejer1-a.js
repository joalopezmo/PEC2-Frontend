const findOne = (list, { key, value }, { onSuccess, onError }) => {  
    setTimeout(() => {
      const element = list.find(element => element[key] === value);
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000);
  };

  /* en las lineas 1-6 estamos creando un callback, estamos pasando una funcion dentro de otra funcion, ya que findOne la estamos definiendo 
  como funcion asignandole parametros de entrada, una lista, una llave y valor, y valores de captura en caso verdadero o falso. Posteriormente se define un 
  un metodo de temporizador para ejecutar la funcion dentro de findOne a los 2 segundos. Definimos element, y tomamos la lista ingresada 
  como parametro, y aplica sobre ella el metodo find, buscando la llave y valor definidas como parametros de findOne. Posteriormente al resultado de element se 
  le aplica un operador condicional ternario en caso de encontrar concordancia en el valor buscado, que contiene llamada de funciones no definidas inicialmente, 
  pero que se definen en las lineas posteriores */
  
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  const onError = ({ msg }) => console.log(msg);

  /* En las lineas 14-15 se crean dos funciones que seran llamadas y pasan como parametro valores resultantes para imprimirlos por consola */
  
  const users = [
    {
      name: 'Carlos',
      rol: 'Teacher'
    },
    {
      name: 'Ana',
      rol: 'Boss'
    }
  ];

  /* En las lineas anteriores se crea el array */
  
  console.log('findOne success');
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  
  console.log('findOne error');
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });

  /* Finalmente en estas ultimas lineas de codigo se llama a la funcion findOne y al metodo console log. El anterior metodo no tiene temporizador por lo que se ejecuta
  inmediatamente, posterior a los dos segundos se convoca a la funcion findOne pasando como parametros el array creado, y en el primer ejercicio, una llave y valor de 'name : carlos'; 
  en el segundo ejercicio 'name : fermin'; y por ultimo, se ingresan como paramentros las funciones creadas en las lineas 15-16.En el primer caso, el metodo find encuentra dentro de la 
  lista al valor carlos y por aplicacion del operador ternario guarda el valor del elemento; posteriormente aplica mediante la llamada de onSuccess la impresion por consola de la expresion 
  regular `user: ${name}`. En el segundo caso, el metodo findOne arroja un valor undefined y aplicandole el operador ternario y la llamada de la funcion onError imprime por consola
  la expresion contenida en la parametrizacion de la misma funcion 'ERROR: Element Not Found'. De esta forma se define el resultado a mostrar :

  findOne success
  findOne error
   //wait 2 seconds
  user: Carlos
  ERROR: Element Not Found

  */
  