const fullName = require('./names.js');

const hobbies = require('./hobbies.js');



const people = () =>{
  return{
    fullName: fullName('Damiano','Mura'),
    hobbies: hobbies('guitar','videogames','cats')
  }
}

console.log(people())