const db=mysql.createConnection('mysql://root:rootroot@localhost:3306/employeeManagment_db')

const inquirer = require('inquirer')
const { type } = require('os')
const { inherits } = require('util')

inquirer.prompt([{
  message:'would you like to add a Department or Role!',
  type:'list',
  choices:['add department','add role','add employee','view department','view roles','view employee', 'update employee role']
  name:'init'
}])
.then(init=>{
  loginit
})