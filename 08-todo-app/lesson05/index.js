
/**
 * As a Javascript object
 */
var TodoApp = {

    onKeydown: function (evt) {
        var key = evt.keyCode || evt.which;
        if (key === 13) {
            var value = evt.target.value;
            if (value !== '') {
                var item = this.createTodoItem(value);
                this.attachTodoItem(item);
                this.clearTextField(evt.target);
            }
        }
    },

    createTodoItem: function (value) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(value));
        return item;
    },

    attachTodoItem: function (item) {
        var ulElement = document.getElementById('listContent');
        ulElement.appendChild(item);
    },

    clearTextField: function (elementRef) {
        elementRef.value = '';
    }
};