import inquirer from 'inquirer';
inquirer
.prompt([
{type:'input',name:'age',message:'How old are you?'},
{type:'input',name:'study',message:'Where do you study?'},
{type:'input',name:'occupation',message:'What is your occupation?'},
{type:'input',name:'Id',message:'What is your id number?'},

])
.then((answers)=>{
console.log(`I am ${answers.age} years old`)
console.log(`I study ${answers.study} `)
console.log(`I am ${answers.occupation} `)
console.log(`My id number is ${answers.Id} `)
})
 

