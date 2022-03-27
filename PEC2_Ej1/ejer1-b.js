const findOne = (list, {key, value}) => {

    const element2 = list.find(element => element[key] === value);

    return new Promise (resolve => {
        setTimeout(() =>{
            resolve(element2 ? onSuccess(element2) : onError({ msg: 'ERROR: Element Not Found' }));
        }, 2000);

    })
} 
  /* En la definicion de la funcion findOne, creamos internamente la promesa como la funcion resolve que pone un metodo de temporizador para ejecutarla 
  el operador ternario dentro de findOne a los 2 segundos. Removemos las funciones onSuccess y onError de los parametros de entrada de findOne, ya que estas
  se ejecutan internamente en la promesa*/
  
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
  findOne(users, { key: 'name', value: 'Carlos' })
    .then((result) => {
        onSuccess(result);
    }).catch((err) => {
        onError(err);
    });
  
  console.log('findOne error');
 findOne(users, { key: 'name', value: 'Fermin' })
    .then((result) => {
        onSuccess(result);
    }).catch((err) => {
        onError(err);
    });

  /* No se modifican las impresiones por consolas de findOne success y findOne Error, pero se utilizan las palabras reservas de .then y .catch para las llamadas de 
  las funciones onSuccess y onError.
  */
  