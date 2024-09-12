const chalk = require ('chalk')
const yargs = require ('yargs')
const getNotes = require ('./notes.js') 


//Customize yags version
yargs.version('1.1.0')

//Create add command
yargs.command ({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,//obligatoire
            type:'string'
        }
    },
    handler: function(argv)
    {
        console.log('Addind Note!',argv)
    }
})

//Create remove command
yargs.command({
    command : 'remove',
    describe: 'Remove a note',
    handler: function()
    {
        console.log('Removing Note!')
    }
})

//Create list command
yargs.command({
    command : 'list',
    describe: 'List your notes',
    handler: function()
    {
        console.log('Listing your notes!')
    }
})

//Create read command
yargs.command({
    command : 'read',
    describe: 'Read your notes',
    handler: function()
    {
        console.log('Reading your notes!')
    }
})

yargs.parse()//yargs.parse est utiliser pour imprimer que les arguments de la ligne de commande
//add, remove, read, list

//console.log(yargs.argv) //yargs.parse() fait la méme chose que cette ligne de code sauf que console.log(yargs.argv) imprime d'abord une fois à l'intérieur 
//du gestionnaire de commande et ensuite les imprime à nouveau dans un petit appel de dialogue de console
