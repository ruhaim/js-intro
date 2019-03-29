var renderToScreen = function (value) {
    var value = value.toString();
    $('.screen').html(value.substring(0, 10));
};

var evaluate = function (a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a/b;
        case '*':
            return a * b;
    }
};

$(document).ready(function () {
    var result = 0,
        operand = 0,
        operator = null;
    

    $('.button').on('click', function (evt) {

        var value = $(this).attr('data-value');
        var command = $(this).attr('data-key');

        if(command === 'func'){
            switch(value){
                case 'clear':
                    result = operand = operandB = 0;
                    renderToScreen('');
            }
        }else if(command === 'numeric' || command === 'fractional'){
            if($.isNumeric(operand + value)){
                operand += value;
            }else if(value === '.'){
                if(operand.indexOf('.') === -1){
                    operand += 'value';
                }
            }

            if(operand.charAt(0) === '0'){
                operand = operand.substring(1);
            }

            renderToScreen(operand);
        }else if(command === 'operator'){
            operator = value;
            result = evaluate(result, operand, value);
            operand = 0;
            renderToScreen('');

        }else if(command === 'evaluator'){
            result = evaluate(result, operand, operator);
            renderToScreen(result.toString());
            operand = 0;
            operator = null;
        }
    });
});

