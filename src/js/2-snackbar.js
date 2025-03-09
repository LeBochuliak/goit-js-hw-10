import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import iconError from '../img/error.png';
import iconCaution from '../img/caution.png';
import iconOk from '../img/ok.png';

const formButton = document.querySelector('.form-button');
const state = document.querySelectorAll('input[type="radio"]');
const fieldset = document.querySelector('.fieldset-state');
const inputDelay = document.querySelector('.input-delay');
let stateChoice = null;
let delay = 0;

inputDelay.addEventListener('input', (e) => {
    delay = parseInt(e.target.value, 10);
    if (isNaN(delay)) {
        delay = 0;
    }
});

state.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === "fulfilled") {            
            stateChoice = true;
            fieldset.classList.add('active');
        } else if (input.value === "rejected") {
            stateChoice = false;
            fieldset.classList.add('active');
        } else {
        iziToast.show({
            title: 'Caution',
            titleColor: '#fff',
            titleSize: '16px',
            messageColor: '#fff',
            messageSize: '16px',
            message: 'You forgot important data',
            backgroundColor: '#ffa000',
            iconUrl: iconCaution,
            position: 'topRight'
            });
        }
    });
});

formButton.addEventListener('click', (e) => {
    const currentDelay = delay;
    const currentStateChoice = stateChoice;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (currentStateChoice) {
                resolve(`Fulfilled promise in ${currentDelay}ms`);
            } else {
                reject(`Rejected promise in ${currentDelay}ms`);
            };
        }, currentDelay);
    });


    promise
            .then(value => {
                iziToast.show({
                    title: 'OK',
                    titleColor: '#fff',
                    titleSize: '16px',
                    messageColor: '#fff',
                    messageSize: '16px',
                    message: value,
                    backgroundColor: '#59a10d',
                    iconUrl: iconOk,
                    position: 'topRight'
                });
            })
            .catch(error => {
                iziToast.show({
                    title: 'Error',
                    titleColor: '#fff',
                    titleSize: '16px',
                    messageColor: '#fff',
                    messageSize: '16px',
                    message: error,
                    backgroundColor: '#ef4040',
                    iconUrl: iconError,
                    position: 'topRight'
                });
            });

        
e.preventDefault();
})


  