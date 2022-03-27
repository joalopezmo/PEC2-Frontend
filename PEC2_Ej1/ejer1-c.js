const findElement = (list, {key, value}) => {
    const element2 = list.find(element => element[key] === value);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(element2);
        }, 2000);

    }
        
  )

} 
/* Separamos la funcion en 2 partes, la primera parte, la funcion findElement se encargara de hallar el elemento buscado mediante una promesa y en el lapso de tiempo de 2 segundos*/

async function findOne(list, {key, value}){

    let result = await findElement(list, {key, value}); 

    result ? onSuccess(result) : onError({ msg: 'ERROR: Element Not Found' });

}

/* La funcion original findOne ingresara los parametros originales y llamara mediante el operador await a la promesa de findElement. Una vez resuelta la promesa, mediante el 
operador ternario verificara el resultado de findElement y llamara a OnSuccess u OnError si es necesario */
  
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  const onError = ({ msg }) => console.log(msg);

  /* No se hacen cambios en estas lineas */
  
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

  /* No se hacen cambios en estas lineas*/
  
  console.log('findOne success');
  findOne(users, { key: 'name', value: 'Carlos' });
  
  console.log('findOne error');
 findOne(users, { key: 'name', value: 'Fermin' });

  /* Se eliminan las palabras reservadas de .then y .catch, y se llama directamente a la funcion asincrona findOne para la verificacion de los parametros ingresados
  */
  