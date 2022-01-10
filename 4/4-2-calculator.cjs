const yargs = require("yargs")


yargs.command({
    command:"add",
    describe:"Add a new note",
    builder: {
        title:{
            describe:" add method",
            type:'number',
        },
        body: {
            describe: "body",
            type:'string'
        }
    },
    handler:function(argv) {
        console.log('adding:   ', argv._[1]+ argv._[2])
    },
})
yargs.command({
    command:"sub",
    describe:"Subtract",
    builder: {
        title:{
            describe:" sub method",
            type:'number',
        },
        body: {
            describe: "body",
            type:'string'
        }
    },
    handler:function(argv) {
        console.log('adding:   ', argv._[1] -argv._[2])
    },
})

yargs.command({
    command:"multiply",
    describe:"Multuply a new note",
    builder: {
        title:{
            describe:" multiply method",
            type:'number',
        },
        body: {
            describe: "body",
            type:'string'
        }
    },
    handler:function(argv) {
        console.log('adding:   ', argv._[1] * argv._[2])
    },
})

yargs.command({
    command:"pow",
    describe:"Pow a new note",
    builder: {
        title:{
            describe:" pow method",
            type:'number',
        },
        body: {
            describe: "body",
            type:'string'
        }
    },
    handler:function(argv) {
        console.log('adding:   ', argv._[1] ** argv._[2])
    },
})



console.log(yargs.argv)
