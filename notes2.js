const yargs = require ('yargs')
const fs =  require('fs')
const getNotes = function() {
    return 'Your notes...'
    
}

const removeNote=function(title,body){
    const notes =loadNotes()
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
    getNotes: getNotes,
    addNote: addNote
}