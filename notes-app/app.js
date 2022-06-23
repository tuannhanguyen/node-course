const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')
const { describe, demandOption, argv } = require('yargs')

yargs.version('1.1.0')
// create add command
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})
// create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
// create list command
yargs.command({
    command:'list',
    describe: 'List your notes',
    handler(){
        notes.listNotes()
    }
})
// create read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'test',
    describe: 'test work',
    builder:{
        content:{
            describe:'describe test',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('test result: ', argv.content)
    }
})

yargs.parse()