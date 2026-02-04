const btnLog = document.querySelector('.logIn')
const btnCreate = document.querySelector('.createAccount')
const btnForget = document.querySelector('.forgotPassText')
const input1 = document.querySelector('#email')
const input2 = document.querySelector('#password')

btnLog.addEventListener('click', () => {
    const data1 = input1.value;
    const data2 = input2.value;
    if(data1 == "" || data2 == "") alert('Write email and password');
    else {
        alert('Success');
    }
})

btnForget.addEventListener('click', () => {
    alert('Не наша вина')
})

btnCreate.addEventListener('click', () => {
    alert('Не добавил такое')
});
