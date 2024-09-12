// supprimer note
const yargs = require ('yargs')
const functionThatRemoveNotes = require ('./notes2.js')


yargs.command({
    command : 'remove',
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
    handler: function()
    {
        console.log('Title:' + argv.title)
        functionThatRemoveNotes.removeNote()
    }
})


yargs.parse()
