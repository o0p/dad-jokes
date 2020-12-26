const jokes = document.querySelector('#jokes');
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    getDadJoke();
});

const getDadJoke = async ()=>{
    const config = {headers: {Accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    const newLI = document.createElement('li');
    newLI.append(res.data.joke);
    jokes.append(newLI);


}