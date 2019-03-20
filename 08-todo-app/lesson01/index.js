

function onKeydown(evt){
    var key = evt.keyCode || evt.which;
    if(key === 13){
        var value = evt.target.value;
        if(value !== ''){
            var item = createTodoItem(value);
            attachTodoItem(item);
            clearTextField(evt.target);
        }
    }
}

function createTodoItem(value){
    var item = document.createElement('li');
    item.innerText = value;
    return item;
}

function attachTodoItem(item){
    var ulElement = document.getElementById('listContent');
    ulElement.appendChild(item);
}

function clearTextField(elementRef){
    elementRef.value = '';
}