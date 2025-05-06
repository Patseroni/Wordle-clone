async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words_dictionary.json');
    const data = await response.json();
    return data;
}



/*
async function numberOfKeys() {
    const data = await getData();
    const nrOfKeys = Object.keys(data);
    return nrOfKeys;
}

(async () => {
    const keys = await numberOfKeys();
    return keys;
})();

async function getRandomWord() {
    const words = await getData();
    const randomWord = math.random(Object.keys(words));
}
*/
