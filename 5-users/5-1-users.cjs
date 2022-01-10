const yargs = require("yargs")
const fs = require('fs')
const uniqid = require('uniqid');
// const chalk = require('chalk');

const getUsers=()=>{
    try {
        const dataBuffer = fs.readFileSync('./users.json')
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch(e){
        return []
    }
}

const addUser=(name,email)=>{
    const users= getUsers();
    const dublicateName = users.filter(user =>{
        return user.name===name
    })

    if (dublicateName.length===0){
        const id = uniqid()
        users.push({
            id: id,
            name: name,
            email:email
        })
        saveUsers(users)
        console.log('add user')
    }
    else {
        console.log('users all ready exist')
    }

}

const saveUsers = function(users) {
    const dataJSON = JSON.stringify(users);
    fs.writeFileSync('users.json',dataJSON)
}

const removeUser = function(id) {
    const users = getUsers();
    const newUsers = users.filter(user=>{
        return user.id !== id
    })
    if(newUsers.length!== users.length){
        saveUsers(newUsers)
        console.log('user remove')
    }else {
        console.log('user not found')
    }
}

const updateUser=(id,newName)=>{
    const users = getUsers();
    console.log(users)
    const user = users.find(user=>{
        return user.id===id
    })
    if(user) {
        user.name=newName;
    console.log('hghgh',user)
        saveUsers(users)
    }else{
        console.log('user not found')
    }
}
const findUser = (id)=>{
    const users= getUsers();
    const user = users.find(user=>{
        return user.id ===id
    })
    if(user){
        return user
    }
    return "user not found"
}
yargs.command({
    command:"add",
    describe:"Add a new user",
    builder: {
        name:{
            describe:" add user",
            type:'string',
            options:{
                demandOption: true
            }
        },
        email: {
            describe: "email",
            type:'string'
        }
    },
    handler:function(argv) {
        addUser(argv.name,argv.email)

    },
})
yargs.command({
    command:"remove",
    describe:"Remove user",
    builder: {
        id:{
            describe:"id",
            type:"string",
        },
    },
    handler:function(argv) {
        removeUser(argv.id)
        console.log('removing:   ', argv.id)
    },
})

yargs.command({
    command:"update",
    describe:"update a user",
    builder: {
        id:{
            describe:"id",
            type:'string',
        },
        newName: {
            describe: "newName",
            type:'string'
        }
    },
    handler:function(argv) {
        updateUser(argv.id,argv.newName)
        console.log('update:   ')
    },
})
yargs.command({
    command:"read",
    describe:"read a user",
    builder: {
        id:{
            describe:"id",
            type:'string',
        },

    },
    handler:(argv)=> {
        const user = findUser(argv.id)
        console.log('user: ',user)
    }
})

console.log(yargs.argv)

