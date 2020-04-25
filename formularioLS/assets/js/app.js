//Variables
const listaTweets = document.getElementById('lista-tweets');

//Event listeners

eventListeners();

function eventListeners() {
    //envio al formulario
    document
        .querySelector('#formulario')
        .addEventListener('submit', agregarTweet);

    //borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Cargar contenido
    document.addEventListener('DOMContentLoaded', localStorageListo)
}

function eraseText() {
    document
        .querySelector('#tweet')
        .value = '';
}

//Funciones Añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //leer el valor del textArea
    const tweet = document
        .querySelector('#tweet')
        .value;
    //crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // crear elemento y anadir a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);

    //Agregar a localStorage
    agregarALocalStorage(tweet);

    eraseText();

}

function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarDeLocalStorage(e.target.parentElement.textContent);

    }

}

function borrarDeLocalStorage(tweet){
    let tweets, tweetABorrar;

    tweetABorrar = tweet.substring(0, tweet.length - 1);

    tweets = leerLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetABorrar === tweet){
            tweets.splice(index,1)
        }
        
    });

    localStorage.setItem('tweets', JSON.stringify(tweets))

}


//Mostrar datos de Local storage en la pantalla
function localStorageListo() {
    let tweets;

    tweets = leerLocalStorage();
    tweets.forEach(function (tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';

        // crear elemento y anadir a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    });
}

function agregarALocalStorage(tweet) {
    let tweets;
    tweets = leerLocalStorage();
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//comprobar elementos en localstorage y retorna un arreglo
function leerLocalStorage() {
    let tweets;
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;

}
