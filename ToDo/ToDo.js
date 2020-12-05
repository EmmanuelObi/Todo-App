

function addTask() {
    var task_cont = document.querySelector('.task_container');
    var tasks = document.createElement('div');
    tasks.className = 'tasks';

    var del = document.createElement('button');
    del.className = 'removeButton';
    var delText = document.createTextNode('REMOVE')
    var edit = document.createElement('button');
    edit.className = 'editButton';
    var editText = document.createTextNode('EDIT');
    del.appendChild(delText);
    edit.appendChild(editText);

    var task = document.createElement('input');
    task.className = 'task';
    var inputValue = document.querySelector('.addedTask').value;
    task.value = inputValue;
    task.disabled = true;
    edit.addEventListener('click', () => {
        task.disabled = false;
    })
    

    if (inputValue === "") {
        alert('Please Add Task');
    }
    else {
        task_cont.appendChild(tasks);
        tasks.appendChild(task);
        tasks.appendChild(edit);
        tasks.appendChild(del)
    }

    document.querySelector('.addedTask').value = "";

    var deleteButton = document.getElementsByClassName('removeButton');

    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = 'none';
        }
}

}

var deleteButton = document.getElementsByClassName('removeButton');

for (var i = 0; i < deleteButton.length; i++) {
    deleteButton[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}
