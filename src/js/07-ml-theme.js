; (function () {
    'use strict'


    function sendEmail(email) {
        console.log(email)
        fetch('https://script.google.com/macros/s/AKfycbytbtdcLPPef-Fxefdr1hRAMldbhaIrr9cyIEsgw5pouwW5OoHw/exec', {
            method: 'POST',
            body: email
        })
    }

    const sf = {};

    sf.container = document.querySelector('.container-ml');
    sf.form = document.querySelector('.container-ml > #singular-form-ml');
    sf.trigger = document.querySelector('.container-ml > #singular-form-ml > button#trigger');
    sf.input = document.querySelector('.container-ml>#singular-form-ml>#input-container-ml>input');
    sf.submitButton = document.querySelector('.container-ml > #singular-form-ml > #input-container-ml > button');
    sf.successMessage = document.querySelector('.container-ml > #singular-form-ml > #success-ml');

    sf.submitDelay = 1500;

    sf.clickHandler = (e) => {
        switch (e.target) {
            case sf.trigger:
                console.log('case trigger');
                sf.container.style.width = '20rem'  // Size after clicking to provide email
                e.target.classList.remove('shown-ml');
                sf.input.classList.add('shown-ml');
                sf.submitButton.classList.add('shown-ml');
                sf.input.focus();
                break;
            case sf.submitButton:
                sf.submitForm();
                break;
        }
    }

    sf.handleInputKeypress = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            sf.submitForm();
        }
    }

    sf.submitForm = () => {
        sf.input.style.transition = 'all .4s ease';
        sf.submitButton.style.transition = 'all .4s ease';
        sf.input.classList.remove('shown-ml');
        sf.submitButton.classList.remove('shown-ml');
        sf.container.style.transition = 'all .4s cubic-bezier(0.47, 0.47, 0.27, 1.20) .4s';
        sf.container.style.width = '';
        sf.successMessage.classList.add('shown-ml');
        console.log("Sending email ...");
        sendEmail(sf.input.value);
        let submission = setTimeout(() => sf.form.submit(), sf.submitDelay);
    }

    sf.input.addEventListener('keypress', (e) => sf.handleInputKeypress(e));
    document.addEventListener('click', (e) => sf.clickHandler(e));
})()
