/*
* deno top level async 
* can use browser api
* top class typscript
*/

const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json = await res.json();

console.log('res', json);

console.log(window)