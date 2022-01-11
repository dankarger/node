// import axios from "axios";
// import request from 'request'
const request = require('request');
const axios = require('axios');
const {Axios} = require("axios");


API_JOKE='https://geek-jokes.sameerkumar.website/api?format=json'

let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
}
//request
let joke = ''
 request(options, (err, response, body) => {
    if(!err && response.statusCode == 200)
        // console.log(body)
     joke=JSON.parse(body)
});
console.log('jpk',joke)

// axios//

const getJokeAxios = async ()=> {
    let responseAxios = await axios.get(API_JOKE, options)
    console.log('res',responseAxios.data)
     return responseAxios

}

const jokeAxios =  getJokeAxios()
// console.log('r',jokeAxios)
console.log('rrrr',jokeAxios.data)