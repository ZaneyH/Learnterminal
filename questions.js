import inquirer from 'inquirer';
inquirer
.prompt([
{type:'Number',name:'age',message:'How old are you?'},
{type:'input',name:'study',message:'Where do you study?'},
{type:'confirm',name:'car',message:'Are you old enough to drive'},
{type:'list',name:'List',message:'How many cars do you have',choices:["0","1","2","Andrew Tate"]},
{type:'rawlist',name:'Raw',message:'What style of clothes do you wear ', choices:["Streetwear","Baggy","Vintage"]},
{type:'expand',name:'EX',message:'Are you happy?', choices:[{key:"y",value:"Yes"},{key:"n",value:"No"}]},
{type:'checkbox',name:'Check',message:"Which of the following is your mood ", choices:["Happy","Sad","Neutral"]},
{type:'password',name:'Pass',message:'Enter a password'},
{type:'editor',name:'Editor',message:'Type or super secure Password'},

])
.then((answers)=>{
console.log(`I am ${answers.age} years old`)
console.log(`I study ${answers.study} `)
console.log(`Am i old enough to drive? ${answers.car} `)
console.log(`I have/I am ${answers.List} `)
console.log(`My style is ${answers.Raw} `)
console.log(`I am, ${answers.EX} `)
console.log(`I am  ${answers.Check} `)
console.log(`My password is ${answers.Pass} `)
console.log(`My super secure password is ${answers.Editor} `)
})


