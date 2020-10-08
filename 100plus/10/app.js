//глобальные переменные
var input = document.querySelector('#input');
var buttonsArray = document.querySelectorAll('.btn');
var btnResult = document.querySelector('#result');
var btnClear = document.querySelector('#clear');

//строки, массивы и объекты
var arrayValues = [];

//события
btnResult.addEventListener('click', result);
btnClear.addEventListener('click', clearValue);

//циклы
//
// этот цикл устанавливает на все кнопки с операциями событие нажатия ЛКМ
// и затем добавляет в поле ввода значение соответствующее нажатой кнопки (цифры или операции)
for (var i = 0; i < buttonsArray.length; i++) {
    var btnClick = buttonsArray[i].addEventListener('click', function (event) {
        var btn = event.target.innerHTML;
        input.value += btn;
    });
}

//функции, которые выполняют соответствующие операции
function isAddition(firstNum, secondNum) {
    return (firstNum + secondNum);
}

function isSubtraction(firstNum, secondNum) {
    return (firstNum - secondNum);
}

function isDiv(firstNum, secondNum) {
    return (firstNum / secondNum);
}

function isMultiply(firstNum, secondNum) {
    return (firstNum * secondNum);
}

// функция, которая проверяет, является ли элемент операцией
function isOperation(operation) {
    var symbol = operation;
    switch (symbol) {
        case '+':
            return symbol;
        case '-':
            return symbol;
        case '/':
            return symbol;
        case '*':
            return symbol;
        case '**':
            return symbol;
        default:
            return false;
    }
}

// функция возвращающая массив с раздельными числовыми значениями
// и операциями
function getValues (VALUE) {
    var NUMBERS = '';
    for (var i = 0; i < VALUE.length; i++) {
        var symbol = VALUE[i];
        if (isNumber(symbol)) {
            NUMBERS += symbol;
        } else if(isOperation(symbol)) {
            if (VALUE[(i+1)] != (isOperation(symbol))) {
                arrayValues.push(NUMBERS);
                arrayValues.push(symbol);
                NUMBERS = '';
            } else continue;
        } else return false;
    } 
    if (isOperation(VALUE[(VALUE.length-1)]) || isOperation(VALUE[0])) {
        return false;
    }
    arrayValues.push(NUMBERS);
    return arrayValues;
}

// функция, которая проверяет, является ли полученный элемент числовым значением
function isNumber (number) {
    if (Number(number)) {
        return number;
    } else return false;
}

// функция которая начинает обработку элементов 
function result () {
    console.log(getValues(input.value));
    console.log(goCount());
}

// функция, которая показывает результат в #input
function showResult (result) {
    input.value = result[0];
}

function goCount() {
    var run = true;
    var div = '/';
    var mult = '*';
    var addit = '+';
    var subtr = '-';

    while (run == true) {
        var shag = 0;
        var divIndex = arrayValues.indexOf(div);
        var multIndex = arrayValues.indexOf(mult);
        var additIndex = arrayValues.indexOf(addit);
        var subtrIndex = arrayValues.indexOf(subtr);

        isRun (divIndex,multIndex,additIndex,subtrIndex, shag);
    }

    showResult(arrayValues);
}

// функция, которая полностью очищает #input
function clearValue () {
    input.value = '';
    arrayValues = [];
}

function divOrMult(divInd,multInd, shag) {
    if (divInd != (-1) && multInd != (-1) ) {
        if (divInd > multInd) {
            var first = arrayValues[(divInd-1)];
            var second = arrayValues[(divInd+1)];
            var result = isDiv(first,second);

            arrayValues.splice((divInd-1), 3, result);
            console.log('Шаг ' + (shag++));
            console.log('деление');
            return console.log(arrayValues);
        } else if (divInd < multInd) {
            var first = arrayValues[(multInd-1)];
            var second = arrayValues[(multInd+1)];
            var result = isMultiply(first,second);

            arrayValues.splice((multInd-1), 3, result);
            console.log('Шаг ' + (shag++));
            console.log('умножение');
            return console.log(arrayValues);
        }
    } else return isOff();
}

function additOrSubst(additInd,subtrInd,shag) {
    if (subtrInd != (-1) && (additInd > subtrInd)) {
        var first = arrayValues[(additInd-1)];
        var second = arrayValues[(additInd+1)];
        var result = isAddition(first,second);

        arrayValues.splice((additInd-1), 3, result);
        console.log('Шаг ' + (shag++));
        console.log('сложение');
        return console.log(arrayValues);

    } else if (additInd != (-1) && (additInd < subtrInd)) {
        var result = isSubtraction(first,second);
        var first = arrayValues[(subtrInd-1)];
        var second = arrayValues[(subtrInd+1)];

        arrayValues.splice((subtrInd-1), 3, result);
        console.log('Шаг ' + (shag++));
        console.log('вычитание');
        return console.log(arrayValues);

    } else return isOff();
}

function isRun(divInd, multInd, additInd, subtrInd, shag) {
    if (arrayValues.length <= 1) {
        return isOff();
    } else if (divInd == (-1) && multInd == (-1)) {
        return additOrSubst(additInd, subtrInd, shag);
    } else {
        return divOrMult(divInd, multInd, shag);
    }
}

function isOff() {
    run = false;
    return run;
}