// import yargs from 'yargs'
// import { hideBin } from 'yargs/helpers'
// const yargs = require('yargs/yargs')

const yargs = require("yargs")
const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv


// yargs(hideBin(process.argv))
//     .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
//         console.info(argv)
//     })
//     .demandCommand(1)
//     .parse()
// console.log(process.argv)
// yargs('1.1.0')
// yargs(hideBin(process.argv))
//     .command('curl <url>', 'fetch the contents of the URL', () => {}, (argv) => {
//         console.info(argv)
//     })
//     .demandCommand(1)
//     .parse()
// //
// yargs(hideBin(process.argv)).command({
//     command:"add",
//     describe:"Add a new note",
//     handler:function() {
//         console.log('adding a new note')
//     }
// }).parse()

yargs.command({
    command:"add",
    describe:"Add a new note",
    handler:function() {
        console.log('adding a new note')
    },
})

yargs.command({
    command:"sub",
    describe:"Remove a new note",
    builder: {
        title:{
            describe:" Note Tilte",
            demandOption:true
        }
    },
    handler:function(argv) {
        console.log('remove a new note', argv)
    },
})

// })
// console.log(yargs.argv)
yargs.parse()