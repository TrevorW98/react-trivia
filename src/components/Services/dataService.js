let value = [];
let shuffledArr = [];


function getValue() {
    return shuffledArr;
}

function FetchEasy() {
    value = [];
    shuffledArr = [];
    return fetch("https://spreadsheets.google.com/feeds/list/1MKPxRE7xn7l2zj3N3vX2jSi0ZH2aOVwr_hj5-bPrekA/1/public/full?alt=json").then(
        resp => resp.json()
    ).then(function (v) {
        for(let c of v.feed.entry)
        {
            const triviaNFO = {
                question: c.gsx$question.$t,
                a1: c.gsx$answer1.$t,
                a2: c.gsx$answer2.$t,
                a3: c.gsx$answer3.$t,
                a4: c.gsx$answer4.$t,
                ca: c.gsx$correctanswer.$t,
            }
            value.push(triviaNFO);

        }
        for(let i = 0; i < value.length; i++){
            let randomIdx = Math.floor(Math.random() * value.length); 
            shuffledArr.push(value[randomIdx])
            value.splice(randomIdx, 1)
        }
    })
}


function FetchMed() {
    value = [];
    shuffledArr = [];
    return fetch("https://spreadsheets.google.com/feeds/list/1MKPxRE7xn7l2zj3N3vX2jSi0ZH2aOVwr_hj5-bPrekA/2/public/full?alt=json").then(
        resp => resp.json()
    ).then(function (v) {
        for(let c of v.feed.entry)
        {
            const triviaNFO = {
                question: c.gsx$question.$t,
                a1: c.gsx$answer1.$t,
                a2: c.gsx$answer2.$t,
                a3: c.gsx$answer3.$t,
                a4: c.gsx$answer4.$t,
                ca: c.gsx$correctanswer.$t,
            }
            value.push(triviaNFO);
        }
        for(let i = 0; i < value.length; i++){
            let randomIdx = Math.floor(Math.random() * value.length); 
            shuffledArr.push(value[randomIdx])
            value.splice(randomIdx, 1)
        }
        console.log(shuffledArr)
    })
}


function FetchHard() {
    value = [];
    shuffledArr = [];
    return fetch("https://spreadsheets.google.com/feeds/list/1MKPxRE7xn7l2zj3N3vX2jSi0ZH2aOVwr_hj5-bPrekA/3/public/full?alt=json").then(
        resp => resp.json()
    ).then(function (v) {
        for(let c of v.feed.entry)
        {
            const triviaNFO = {
                question: c.gsx$question.$t,
                a1: c.gsx$answer1.$t,
                a2: c.gsx$answer2.$t,
                a3: c.gsx$answer3.$t,
                a4: c.gsx$answer4.$t,
                ca: c.gsx$correctanswer.$t,
            }
            value.push(triviaNFO);
        }
        for(let i = 0; i < value.length; i++){
            let randomIdx = Math.floor(Math.random() * value.length); 
            shuffledArr.push(value[randomIdx])
            value.splice(randomIdx, 1)
        }
        console.log(shuffledArr)
    })
}

export {FetchEasy, getValue, FetchMed, FetchHard}