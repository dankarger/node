const fs = require('fs')

// import * as fs from 'fs'
// fs.appendFileSync('note.txt', ' \n this 33333')
fs.copyFileSync('note.txt','noteCopy.txt')