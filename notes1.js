const yargs = require ('yargs')
const fs =  require('fs')
const chalk = require('chalk')

const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title ===title )
    



    debugger
    
    if (!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    }else{
        console.log('Note title taken!')
    }
    
    saveNotes(notes)
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title ===title )
    if (note){
        
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse('Note not found'))
    }
}   


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJsON)

}

const removeNote=function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })

    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!') )
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('No note found!')) 
        }
   
    }

const listNotes= () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes') ) 

    notes.forEach((note) => {
        console.log(note.title)
    } )

}


const loadNotes = function(){
    try{
        
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
        
    } catch (e) {

        return[]
    }
   }



module.exports = {
    
    addNote: addNote,
    removeNote: removeNote,
    listNotes : listNotes,
    readNote : readNote
}


