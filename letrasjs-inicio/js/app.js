import {API} from './api.js';
import * as UI from './interfaz.js';

UI
    .formulario
    .addEventListener('submit', (e) => {
        e.preventDefault();

        //Obtener datos del formulario
        const artista = document
                .querySelector('#artista')
                .value,
            cancion = document
                .querySelector('#cancion')
                .value;

        if (artista === '' || cancion === '') {
            //Si ell usuario deja los campos vacio muestra error
            UI.divMensajes.innerHTML = 'Error... Todos los campos son obligatorios';
            UI.divMensajes.classList.add('error');
            setTimeout(() => {
                UI.divMensajes.innerHTML = '';
                UI
                    .divMensajes
                    .classList
                    .remove('error');
            }, 3000);
        } else {
            //El formulario esta completo se realiza la consulta
            const api = new API(artista, cancion);
            api
                .consultarApi()
                .then((datos) => {
                    const letras = datos.respuesta.lyrics;

                    if (letras) {
                        UI.divResultado.innerHTML = letras;
                    } else {
                        UI.divMensajes.innerHTML = 'La cancion no existe';
                        UI.divMensajes.classList.add('error');
                        setTimeout(() => {
                            UI.divMensajes.innerHTML = '';
                            UI.divMensajes.classList.remove('error');
                            UI.formulario.reset();
                        }, 3000);
                    }

                })

        }
    })