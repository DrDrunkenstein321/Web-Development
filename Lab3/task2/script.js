const containerTasks = document.querySelector('.div-for-tasks')
const inputTag = document.querySelector('.input-text-task')
const buttonTag = document.querySelector('.add-button-task')

buttonTag.addEventListener('click', () => {
    const todo = inputTag.value.trim();
    if (!todo) {
        alert("Enter a task bro");
        return;
    }
    const label = document.createElement('label');
    label.className = 'task';
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.className = 'checkInput';
    const span = document.createElement('span')
    span.textContent = todo;
    const buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'Delete';
    buttonDelete.className = 'btn-delete'
    label.append(checkbox, span, buttonDelete);
    containerTasks.appendChild(label);
    
    inputTag.value = '';
    
})

containerTasks.addEventListener('change', (e) => {
    if (e.target.type !== 'checkbox') return;
    const label = e.target.closest('.task')
    const text = label.querySelector('span')
    text.style.textDecoration = e.target.checked ? 'line-through' : 'none'
})

containerTasks.addEventListener('click', (e) => {
    if (!e.target.classList.contains('btn-delete')) return;
    const label = e.target.closest('.task');
    if (label) label.remove();
})

