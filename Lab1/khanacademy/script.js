const btn = document.querySelector('button')
let flag = false;
btn.addEventListener('click', () => {
    if(!flag) {btn.textContent = "Arseniy bot"; flag = true;}
    else {btn.textContent = "Dastan top"; flag = false;}
})

