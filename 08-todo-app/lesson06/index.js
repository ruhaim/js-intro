
/**
 * JQuery example
 */

$(function () { // document ready
    $('#todoInput').keydown(function (evt) {
        if (evt.which === 13 && evt.target.value !== '') {
            $('#listContent').append("<li>" + evt.target.value + "</li>");
            evt.target.value = '';
        }
    })
});
