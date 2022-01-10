import fs from 'fs'
import {add}  from './test.mjs'
import {minus} from './test.mjs'

// const add = require('./test.mjs')
// import {multiply} from './test2.js';
// const validator = require('validator')
import validator from "validator";
// const validator = require('validator')
import chalk from 'chalk'

console.log(add(4,2));
console.log(minus(4,2))

// const result = multiply(3,4);
// console.log(result);
console.log(validator.isEmail('dasdasda#@gmail.com'));
console.log(validator.isURL('https:i//mead.io'));
console.log(chalk.green('suceess'))
console.log(chalk.bgBlue.red.bold('gggg'))