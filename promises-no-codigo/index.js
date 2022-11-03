/* Promise 

A promessa de que algo irá acontecer 
Proderá da certo ou errado,
mas irá acontecer 
*/
let aceitar = true;
console.log('pedir uber')
const promessa = new Promise((resolve, reject)=> {
   if(aceitar){
    return resolve('pedido aceito')
   }else{
    return reject('pedido negado')
   }
});

promessa
/* Anexa callbacks para a resolução e/ou rejeição da Promessa. */
.then(result => console.log(result))
/* Anexa um retorno de chamada apenas para a rejeição da Promessa. */
.catch(erro => console.log(erro))
/* Anexa um retorno de chamada que é invocado quando a promessa é liquidada (cumprida ou rejeitada). */
.finally(() => console.log('finalizado'))


console.log('aguardando')

