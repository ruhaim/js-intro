

var onKeydown = function(evt){
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

var createTodoItem = function(value){
    var item = document.createElement('li');
    item.innerText = value;
    return item;
}

var attachTodoItem = function(item){
    var ulElement = document.getElementById('listContent');
    ulElement.appendChild(item);
}

var clearTextField = function(elementRef){
    elementRef.value = '';
}