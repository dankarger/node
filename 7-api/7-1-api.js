// import axios from "axios";
// import request from 'request'
const request = require('request');
const axios = require('axios');
const superagent = require('superagent')


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
        console.log('request',body)
     console.log('request',response.data)
});


// axios//
const getJokeAxios = async ()=> {
    try {
        let responseAxios = await axios.get(API_JOKE, options)
        console.log('axios',responseAxios.data)
        return responseAxios
    }catch (e) {
        console.log(e)
    }
}

const jokeAxios =  getJokeAxios()
// console.log('r',jokeAxios)
console.log('rrrr',jokeAxios.data)

//super agent
superagent.get(API_JOKE)
    // .query({ api_key: 'DEMO_KEY', date: '2017-08-02' })
    .end((err, res) => {
        if (err) { return console.log(err); }
        console.log('super',res.body);
        // console.log(res.body);
});