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
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})
// create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note!')
    }
})
// create list command
yargs.command({
    command:'list',
    describe: 'List your notes',
    handler: function(){
        console.log('Listing out all notes')
    }
})
// create read command
yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
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