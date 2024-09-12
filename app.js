//const fs = require ('fs')

//fs.writeFileSync('fbook.txt' , 'My name is Andrew.')

//fs.appendFileSync ('notes.txt', ' I live in Philadelphia.')

//const add = require ('./utils/js')
 
//const sum = (4,-2)
//console.log(sum)

//const validator = require ('validator') //pour utiliser validator toujours le charger
const getNotes = require ('./notes.js') 

const msg = getNotes()

console.log(msg)


// paquet validator nous donne toutes sortes d'outils impressionants pour effectuer des validations

//console.log(validator.isEmail('andrew@exemple.com'))

//console.log(validator.isURL('https://mead.io'))

//console.log(validator.isURL('ht://mead.io'))

//Maintenant utilisons le chalk
const chalk = require ('chalk')
console.log(chalk.blue('Success!'))
console.log(chalk.green.bgYellow.bold('Hello World Les amisMerci!'))
console.log(chalk.green.bgBlack.inverse('School bus'))

const greenMsg = chalk.green('Success!')//autre methode pour mettre la craie
console.log(greenMsg)

//section 4
console.log(process.argv) //pour vider

const command =process.argv[2]

if (command === 'add' ) {
    console.log('Adding Note!')
}
else if (command ==='remove')
{
    console.log('Removing Note!')
}