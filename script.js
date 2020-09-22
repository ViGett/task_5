/*
У нас есть объект, в котором хранятся зарплаты нашей команды:
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.

COБСТВЕНАЯ МОДИФИКАЦИЯ:
Пользовотель вводит имя сотрудника и его ЗП.
При нажатии кнопки добавить, выводится окно с суммарной ЗП всех сотрудников.
*/

class Staff {
    constructor(name, salaty) {
        this.name = name;
        this.salary = salaty;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var sum = 0;
    var arr = [];
    var buttonAdd = document.getElementById('btn_add');
    var buttonResult = document.getElementById('btn_result');

    buttonAdd.addEventListener('click', clickAdd);
    buttonResult.addEventListener('click', clickResult);


    function clickAdd() {
        let name = document.getElementById('add_name').value;
        let salary = document.getElementById('add_salary').value;
        let employee = new Staff (name, salary);
        arr += employee;
        sum += Number(employee.salary);
        document.getElementById('add_name').value = '';
        document.getElementById('add_salary').value = '';
    }

    function clickResult() {
        document.getElementById('result').innerHTML = `Суммарная заработная плата всех сотрудников: ${sum}`;
        document.getElementById('result').style.display = "block";
    }
})

// Массив добавлен как база введенных данных, которые можно будет в дальнейшем использовать.
