const chalk = require ('chalk')
const yargs = require ('yargs')
const functionThatModifyNotes = require ('./notes1.js')
const functionThatRemoveNotes = require ('./notes1.js') 
const functionThatListNotes = require ('./notes1.js')
const functionThatReadNotes = require ('./notes1.js')


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
        body:{ //body est une option
            describe:'Note body',
            demandOption:true,
            type:'string'
        },
    handler: function(argv)
    {
        console.log('Title:' + argv.title)
        functionThatModifyNotes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command ({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,//obligatoire
            type:'string'
        }
    },
        body:{ //body est une option
            describe:'Note body',
            demandOption:true,
            type:'string'
        },
    handler: function(argv)
    {
        console.log('Title:' + argv.title)
        functionThatRemoveNotes.removeNote(argv.title,argv.body)
    }
})

yargs.command({
    command : 'list',
    describe: 'List your notes',
    handler: function()
    {
        
        functionThatListNotes.listNotes()
    }
} )
yargs.command({
    command : 'read',
    describe: 'Read your notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,//obligatoire
            type:'string'
        }
    },
    handler: function(argv)
    {
        functionThatReadNotes.readNote(argv.title)
    }
})

yargs.parse()